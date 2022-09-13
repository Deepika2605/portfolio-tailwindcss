import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#fefae0] text-blue-900'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-rose-800'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Deepika, nice to meet you. Thank you for visiting.</p>
            </div>
            <div>
              <p>Having a keen eye for detail, I aspire to solve problems from the user's perspective 
                by developing web solutions which provide simple and aesthetically pleasing 
                user interface with equal importance to functional aspects. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
