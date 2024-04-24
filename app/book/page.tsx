"use client";

import React, { useState } from "react";
import { useData } from "../useContext";
import { useRouter } from 'next/navigation';
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
      price: '100'
    },
    {
      name: 'Living room 2',
      alias: 'LR 2',
      price: '200'
    },
    {
      name: 'Living room 3',
      alias: 'LR 3',
      price: '300'
    },
    {
      name: 'Living room 4',
      alias: 'LR 4',
      price: '400'
    }
  ])

  // const { floorContextImage, floorContextItems } = useData();
  // cl('floor items', data);

  return (
    <div>
      {floorContextImage && 
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src={floorContextImage} 
        alt="Floor Plan" 
        className='h-[25rem] w-full max-w-[35rem] object-contain rounded-[16px] '
      />
      }
      <ul>
        {floorContextItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.alias} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
