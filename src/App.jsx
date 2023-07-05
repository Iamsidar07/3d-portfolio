import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Navbar,About,Contact,Experience,Feedbacks,Hero,StarsCanvas,Works,Tech} from "./components"
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-primary z-0 relative'>
      <div className="bg-hero-pattern  bg-no-repeat bg-cover bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="z-0 relative">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </BrowserRouter>
  )
}

export default App