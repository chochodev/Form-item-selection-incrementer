"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
// import img1 from '@/assets/images/lorem.jpg';

const cl = console.log.bind(console);
interface BookProps {
  router: any;
}

const Book: React.FC<BookProps> = () => {
  const router = useRouter();
  // const data: string = JSON.parse(router.query.data || '{}');

  const [floorContextImage, setFloorContextImage] = useState<string>('/assets/images/lorem.jpg');
  const [floorContextItems, setFloorContextItems] = useState([
    {
      name: 'Living room 1',
      alias: 'LR 1',
      price: '100',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 2',
      alias: 'LR 2',
      price: '200',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 3',
      alias: 'LR 3',
      price: '300',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 4',
      alias: 'LR 4',
      price: '400',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 1',
      alias: 'LR 1',
      price: '100',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 2',
      alias: 'LR 2',
      price: '200',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 3',
      alias: 'LR 3',
      price: '300',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 4',
      alias: 'LR 4',
      price: '400',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 1',
      alias: 'LR 1',
      price: '100',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 2',
      alias: 'LR 2',
      price: '200',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 3',
      alias: 'LR 3',
      price: '300',
      people: '5',
      bottles: '6'
    },
    {
      name: 'Living room 4',
      alias: 'LR 4',
      price: '400',
      people: '5',
      bottles: '6'
    },
  ])

  // const { floorContextImage, floorContextItems } = useData();
  // cl('floor items', data);

  return (
    <div className='flex max-[680px]:flex-col w-full gap-[1rem] py-[2rem] '>
      {floorContextImage && 
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src={floorContextImage} 
        alt="Floor Plan" 
        className='h-[25rem] w-full max-w-[35rem] object-[0,0] object-fill rounded-[16px] '
      />
      }
      <ul className='flex-1 w-full grid rows-6 '>
        {floorContextItems.map((item, index) => (
          <li 
            key={index}
            className="h-[4rem] w-[4rem] "
          >
            <button 
              type="button" 
              className="text-teal-900 bg-white border-solid border border-teal-100 focus:outline-none hover:border-teal-300 focus:ring-4 focus:ring-teal-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ease-250">
                <p className='font-[600] text-teal-600 '>{item.alias}</p>
                {/* {item.name} */}
                <p className='text-[0.875rem] text-teal-500  '>${item.price}</p>
              </button>
            <button 
              className='flex flex-col gap-[0.5rem] bg-teal-200 rounded-[8px] shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] '
            >
              <span className='text-teal-[0.875rem] font-bold text-teal-600 '></span>
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Book;
