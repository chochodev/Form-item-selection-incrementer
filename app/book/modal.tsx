import React from 'react';
import  { RiCloseLine } from 'react-icons/ri';

const cl = console.log.bind(console);

interface ModalProps {
  name?: string;
  alias?: string;
  people?: string;
  bottles?: string;
  price?: string;
  onClick?: any;
}

const Modal: React.FC<ModalProps> = ({
  onClick,
  ...item
}) => {
  const handleCloseModal = (e: any) => {
    e.stopPropagation()
    onClick();
  }

  return (
    <>
      <div
        onClick={handleCloseModal}
        className='fixed z-[8] top-0 left-0 flex justify-center items-center h-screen w-screen bg-teal-900/20 backdrop-blur-[10px] '
      >
        <div
          onClick={(e)=>e.stopPropagation()} 
          className='relative z-10 flex flex-col gap-[2rem] w-full md:w-[22rem] bg-white rounded-[16px] px-[1rem] py-[1rem] '
        >
          <div className='flex justify-center items-center text-center w-full h-[3rem] '>
            <p className='w-full text-teal-900 font-[600] text-[1rem] uppercase '>#{item.alias}</p>
          </div>

          <div className='flex flex-wrap gap-[1rem] '>
            <div className='flex flex-col gap-[0.5rem] w-[45%] bg-teal-50 border-solid border-[1px] border-teal-200 py-[0.875rem] px-[0.5rem] rounded-[8px] '>
              <p className='text-teal-600 text-[0.75rem] '>Name:</p>
              <span className='text-teal-800 text-[1rem] '>{item.name}</span>
            </div>

            <div className='flex flex-col gap-[0.5rem] w-[45%] bg-teal-50 border-solid border-[1px] border-teal-200 py-[0.875rem] px-[0.5rem] rounded-[8px] '>
              <p className='text-teal-600 text-[0.75rem] '>Price:</p>
              <span className='text-teal-800 text-[1rem] '>${item.price}</span>
            </div>

            <div className='flex flex-col gap-[0.5rem] w-[45%] bg-teal-50 border-solid border-[1px] border-teal-200 py-[0.875rem] px-[0.5rem] rounded-[8px] '>
              <p className='text-teal-600 text-[0.75rem] '>People:</p>
              <span className='text-teal-800 text-[1rem] '>{item.people}</span>
            </div>

            <div className='flex flex-col gap-[0.5rem] w-[45%] bg-teal-50 border-solid border-[1px] border-teal-200 py-[0.875rem] px-[0.5rem] rounded-[8px] '>
              <p className='text-teal-600 text-[0.75rem] '>Bottle(s):</p>
              <span className='text-teal-800 text-[1rem] '>{item.bottles}</span>
            </div>

            {/* :::::::::::::::::::::::: CLOSE MODAL BUTTON */}
            <button 
              onClick={handleCloseModal}
              className='group absolute top-[1rem] right-[1rem] flex justify-center items-center h-[3rem] w-[3rem] rounded-[8px] bg-teal-50 hover:bg-teal-900/10 ease-250 '
            >
              <RiCloseLine className='text-teal-900 text-[1.25rem] group-active:text-black ease-250 ' />
            </button>
          </div>

          <a href='/' className='flex items-center justify-center h-[3rem] w-full mx-auto bg-teal-700 text-white hover:bg-teal-900 hover:text-teal-200 rounded-[8px] '>Book</a>
        </div>
      </div>
    </>

  )
}

export default Modal;