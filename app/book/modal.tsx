import React from 'react';
import  { RiCloseLine } from 'react-icons/ri';

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
        className='fixed z-10 top-0 left-0 flex justify-center items-center h-screen w-screen bg-teal-400/20  '
      >
        <div
          onClick={(e)=>e.stopPropagation();} 
          className='relative flex flex-col gap-[2rem] bg-white rounded-[16px] '
        >
          <div className='flex flex-col gap-[1rem] px-[1rem] py-[2rem] '>
            <div>
              <p>Name:</p>
              <span>{item.name}</span>
            </div>

            <div>
              <p>Price:</p>
              <span>{item.price}</span>
            </div>

            <div>
              <p>People:</p>
              <span>{item.people}</span>
            </div>

            <div>
              <p>Bottle(s):</p>
              <span>{item.bottles}</span>
            </div>

            {/* :::::::::::::::::::::::: CLOSE MODAL BUTTON */}
            <button className='group absolute top-[1rem] right-[1rem] flex justify-center items-center h-[3rem] w-[3rem] rounded-[8px] hover:bg-teal-200 ease-250 '>
              <RiCloseLine className='text-teal-900 text-[1rem] group-active:text-black ease-250 ' />
            </button>
          </div>

          <button>Book</button>
        </div>
      </div>
    </>

  )
}

export default Modal;