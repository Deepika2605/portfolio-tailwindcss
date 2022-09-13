import React from 'react';
import project1 from '../assets/project1.png';
import Modal from './Modal';

const Work = () => {
  return (
    <div name='work' id='work-section' className='w-full md:h-screen text-blue-900 bg-[#fefae0]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-blue-900 border-rose-800'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <img src={project1} alt="First Project Look" />
            <Modal/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
