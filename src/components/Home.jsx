import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-[#050c17]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-200'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mehul Mittal</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building and designing best digital experiences.Currently, I'm focused on building responsive frontend web applications.</p>
        <div>
        <button className='text-white group  border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>
        <Link to="work" smooth={true} duration={500}>
          View Work 
          </Link>
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' /></span>
           
          </button>
        </div>
       </div>
      
    </div>
  )
}

export default Home
