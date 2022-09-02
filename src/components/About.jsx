import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#050c17] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mehul, nice to meet you. Please take a look around.</p>
             
              <p className='py-4'>My Certifications</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
              <p>I have done a Certification course of full stack web development from Udemy.</p>
             
              <button className='text-white group  border-2 px-3 py-2 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>
                <a href="https://drive.google.com/file/d/1J_Lkn-UEFk0uTTNNEdsMlJF6s7bdZLYb/view?usp=sharing">View Certificate </a>
              </button>
             
            </div>
          
          
          </div>
      </div>
    </div>
  );
};

export default About;