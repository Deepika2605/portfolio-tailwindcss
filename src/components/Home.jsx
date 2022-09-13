import React from 'react';
import profilePic from '../assets/profilePhoto.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fefae0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='h-64 w-64 mx-auto rounded-full flex justify-center shadow-lg shadow-gray-500/50'>
          <img className="rounded-full object-contain object-center h-64 w-46" src={profilePic} alt='Profile'/>
        </div>
        <div className='justify-center m-10'>
          <p className='text-rose-800'>Hi, I'm</p>
          <h1 className='text-4xl sm:text-6xl font-bold text-[#0f4c5c]'>
            Deepika Sathianarayanan
          </h1>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
            Full Stack Developer | UI/UX Designer
          </h2>
          <p className='text-blue-900 py-4 max-w-[700px]'>
            I’m a full stack engineer by profession and a designer by passion aiming to build products with the best user experience. 
          </p>
        </div>        
      </div>
    </div>
  );
};

export default Home;
