"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './modal';
// import img1 from '@/assets/images/lorem.jpg';

const cl = console.log.bind(console);

const Book = () => {
  const router = useRouter();

  const floorImage = useSelector((state: any) => state.floorData.floorImage);
  const items = useSelector((state: any) => state.floorData.items);

  const [floorContextImage, setFloorContextImage] = useState<string>(floorImage || '/assets/images/floor-plan.jpg');

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(items[0]);

  const handleOnClick = (index: number) => {
    setModalData(items[index]);
    cl('modalData: ', modalData);
    setOpenModal(true);
  }

  return (
    <div className='flex sm:flex-col justify-center sm:justify-evenly w-full gap-[1rem] py-[2rem] '>
      {floorContextImage && 
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src={floorContextImage} 
        alt="Floor Plan" 
        className='w-full max-w-[45rem] h-[25rem] mx-auto sm:mx-0 object-contain border-solid border-[2px] border-teal-500 rounded-[8px] shadow-sm '
      />
      }

      {/* :::::::::::::::::::::::::::: BUTTONS */}
      <ul className='flex-1 max-w-[45rem] w-full grid gap-y-[1rem] grid-cols-4 lg:grid-cols-6 '>
        {items.map((item: any, index: number) => (
          <li 
            key={index}
            className=""
          >
            <button 
              onClick={()=>handleOnClick(index)}
              type="button" 
              className="flex items-center text-center justify-center h-[4rem] w-[4.5rem] text-teal-900 bg-transparent border-solid border border-teal-500 outline-none hover:border-teal-300 ring-4 ring-teal-100 font-medium rounded-[12px] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] ease-250"
            >
              <p className='font-[600] text-teal-800 text-[0.875rem] text-nowrap w-max '>{item.alias}</p>
            </button>
          </li>
          
        ))}
      </ul>
      {openModal &&
        <Modal 
          {...modalData}
          onClick={()=>{
            setOpenModal(false);
          }} 
        />
      }
    </div>
  );
};

export default Book;
