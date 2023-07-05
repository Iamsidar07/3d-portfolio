import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles"
import { experiences } from "../constants";
import { SectionWraper } from "../hoc"
import { textVariant } from '../utils/motion';

const ExperienceCard=({date,iconBg,title,icon,company_name,points})=>{
  return (
    <VerticalTimelineElement contentStyle={{background:"#1d1836",color:"#fff"}}
    // contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={date}
    iconStyle={{background:iconBg}}
    icon={<div className='flex items-center justify-center h-full w-full'>
      <img src={icon} alt={company_name}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>}

    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">{company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2" >
{
  points.map((point,i)=>(
<li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
  ))
}
      </ul>
    
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {
          experiences.map((experience,i)=>(
            <ExperienceCard key={i} {...experience}/>
          ))
        }
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWraper(Experience,"experience");