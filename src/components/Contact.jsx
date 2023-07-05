import React,{ useState,useRef } from 'react'
import { motion } from 'framer-motion'
motion;
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas"
import { SectionWraper } from "../hoc"
import { slideIn } from '../utils/motion';
import { toast } from 'react-hot-toast';
const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  });
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_r0d37ng','template_u9lvpwf',{
      from_name:form.name,
      to_name:'Manoj kumar',
      from_email:form.email,
      to_email:'ms8460149@gmail.com',
      message:form.message
    },
    'XgjMFRX4wUPMnPW_7').then(()=>{
      setLoading(false);
      toast.success('Thank you.I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    },(error)=>{
      setLoading(false);
      console.log(error);
      toast.error('Something went wrong.');
    })

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden '>
      <motion.div variants={slideIn("left","tween",0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>
              Your Name
            </span>
            <input type="text" name="name" value={form.name} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" onChange={handleChange} placeholder="What is your name ?" />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>
              Your Email
            </span>
            <input type="email" name="email" value={form.email} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" onChange={handleChange} placeholder="What is your email ?" />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>
              Your Messgae
            </span>
            <textarea rows={7} type="text" name="message" value={form.message} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" onChange={handleChange} placeholder="What do you want to say ?" />
          </label>
           <button type='submit' className='bg-tertiary font-bold outline-none w-fit text-white py-3 px-8  shadow-md rounded-xl shadow-primary'>
            {loading?'Sending':'Send'}

           </button>
        </form>

      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWraper(Contact,"contact")