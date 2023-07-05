import React from 'react'
import Tilt from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from "../styles"
import { SectionWraper } from "../hoc"
import { github, dot } from "../assets"
import {projects} from "../constants"
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard=({index,name,description,tags,image,source_code_link,liveUrl})=>{
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full relative h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div onClick={()=>window.open(source_code_link)} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
            <div onClick={()=>window.open(liveUrl)} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={dot} alt='Live url' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag,i)=><p className={`text-[14px] ${tag.color}`} key={i}>#{tag.name}</p>)
          }
        </div>

      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div  className="w-full">
        <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"

        >
          Welcome to my project showcase! Here, you'll discover a collection of my diverse and impactful projects. From software development to artistic endeavors, each project reflects my passion, skills, and dedication. Join me on this journey of creativity, innovation, and positive change. Let's explore the possibilities together!
        </motion.p>
        <div className="mt-20 flex-wrap flex gap-7">
          {
            projects.map((project,i)=>(
              <ProjectCard key={i} index={i} {...project}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default SectionWraper(Works,'work')