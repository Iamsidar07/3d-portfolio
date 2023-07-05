import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {logo,menu,close} from "../assets"
import {navLinks} from "../constants"
import { styles } from "../styles" 
const Navbar = () => {
  const [active,setActive]=useState("");
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
        <Link to={"/"} onClick={()=>{
setActive("");
window.scrollTo(0,0)
        }}>
        <div className='flex items-center justify-center space-x-1'>
            <p className='font-bold'>Manoj Kumar</p>
        </div>
        </Link>

        <ul className='hidden sm:flex list-none gap-10'>
            {
              navLinks.map((link)=>{
                return <li key={link.id} className={`${active===link.title ? "text-white":"text-secondary"} hover:text-white font-medium cursor-pointer`} onClick={()=>{
                  setActive(link.title)
                }}>
                       <a href={`#${link.id}`} >{link.title}</a>
                </li>
              })
            }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt={toggle?"menu":"close"} className="w-5 h-5 object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl`}>
            <ul className='flex flex-col items-start justify-end list-none gap-4'>
              {
                navLinks.map((link) => {
                  return <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white font-medium cursor-pointer`} onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                    <a href={`#${link.id}`} >{link.title}</a>
                  </li>
                })
              }
            </ul>

          </div>

        </div>
      </div>
     

    </nav>
  )
}

export default Navbar