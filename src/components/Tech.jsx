import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc"
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className='flex flow-row flex-wrap justify-center gap-10'
    >{
        technologies.map((tech, i) => (
          <div className="w-28 h-28" key={i}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))
      }</div>
  )
}

export default SectionWraper(Tech, "")