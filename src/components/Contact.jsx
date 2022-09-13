import React from 'react'
import './Smiley.css';

const Contact = () => {
  
  function handleSubmit(e) {
    console.log("You clicked");
    const subject=`We are interested in your profile`;
    window.location.href = `mailto:deepika.sathia26@gmail.com?subject=${subject}&body=Body%20goes%20here`;
  }

  function _onMouseMove(e){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye)
    {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2( e.screenX - x, e.screenY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rot+"deg)";
    })
  }

  return (
    <div name='contact' className='w-full h-screen bg-[#fefae0] flex justify-center items-center p-4' onMouseMoveCapture={_onMouseMove}>
        <div className='flex flex-col max-w-[600px] w-full'>
              <div className='flex pb-8 space-x-10'>
                <div>
                  <p className='text-4xl font-bold inline border-b-4 border-rose-800 text-blue-900'>Contact</p>
                  <p className='text-blue-900 py-4'>Click on the link below to send me an email</p>
                </div>
                <div className='flex justify-center'>
                  <button id='contact' className='bg-rose-800 text-white active:bg-rose-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    onClick={handleSubmit}
                    >Send Email</button>
                </div>
              </div>  
              <div className='smiley flex justify-center'>
                  <div className="face">
                    <div className="eyes">
                      <div className="eye"></div>
                      <div className="eye"></div>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Contact