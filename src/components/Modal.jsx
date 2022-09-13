import React from "react";
import project1 from '../assets/project1.png';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-rose-800 text-white active:bg-rose-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Click to Zoom
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="relative">
                <img className='w-full' src={project1} alt="Project Preview" />
                <button
                    className="absolute top-0 right-0 text-rose-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                </button>
                </div>
              </div>
            </div>
        </>
      ) : null}
    </>
  );
}