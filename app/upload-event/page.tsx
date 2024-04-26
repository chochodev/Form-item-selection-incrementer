"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import floorSlice, { setFloorImage, setItems } from '@/redux/reducers/floorSlice';
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line, RiProfileLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import InputField from "@/components/input";
import UploadImage from './upload';
import { useData } from '../useContext';
import { useRouter } from 'next/navigation';

const cl = console.log.bind(console);

// Data structure for form items
interface ItemData {
  name: string;
  alias: string;
  price: string;
  people: string;
  bottles: string;
}

// Component for individual item inputs
const ItemAppendForm: React.FC<{
  item: ItemData;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, field: keyof ItemData, value: string | number) => void;
}> = ({ item, index, onDelete, onChange }) => {
  return (
    <div className="flex flex-col gap-[0.5rem] items-center max-w-[45rem] lg:w-full ">
      <InputField
        label="Name"
        name={`name-${index}`}
        type="text"
        icon={<MdOutlineDriveFileRenameOutline className='text-[1.25rem] text-slate-400 ' />}
        value={item.name}
        className='min-w-[10rem] lg:w-full'
        placeholder="e.g. Parlour 1"
        onChange={(e: any) => onChange(index, "name", e.target.value)}
      />
          
      <div className='flex lg:flex-row flex-col gap-[0.5rem] mt-[1.5rem] '>
        <InputField
          label="Alias"
          name={`alias-${index}`}
          type="text"
          icon={<RiProfileLine className='text-[1.25rem] text-slate-400 ' />}
          value={item.alias}
          placeholder="e.g. P 1"
          onChange={(e: any) => onChange(index, "alias", e.target.value)}
        />
        <InputField
          label="Price"
          name={`price-${index}`}
          type="number"
          icon={<RiMoneyDollarCircleLine className='text-[1.25rem] text-slate-400 ' />}
          value={item.price}
          placeholder="e.g. 100"
          onChange={(e: any) => onChange(index, "price", e.target.value)}
        />
        <InputField
          label="People"
          name={`people-${index}`}
          type="number"
          icon={<RiMoneyDollarCircleLine className='text-[1.25rem] text-slate-400 ' />}
          value={item.people}
          placeholder="e.g. 3"
          onChange={(e: any) => onChange(index, "people", e.target.value)}
        />
        <InputField
          label="Bottles"
          name={`bottles-${index}`}
          type="number"
          icon={<RiMoneyDollarCircleLine className='text-[1.25rem] text-slate-400 ' />}
          value={item.bottles}
          placeholder="e.g. 5"
          onChange={(e: any) => onChange(index, "bottles", e.target.value)}
        />
      </div>

      {/* BUTTON */}
      <button
        type="button"
        className="flex items-center justify-center sm:justify-self-end h-[2.5rem] min-w-[2.5rem] rounded-[8px] bg-red-500 text-white"
        onClick={() => onDelete(index)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

interface UploadEventComponentProps {
  router: any;
}

// :::::::::::::: Main component to manage the dynamic form
const UploadEventComponent: React.FC<UploadEventComponentProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { setFloorContextImage, setFloorContextItems } = useData();

  // :::::::::::::::::::::::::::::::::::::::::::: IMAGE SECTION FUNCTION
  const [floorImage, setLocalFloorImage] = useState<string>("");

  // :::::::::::::::::::::::::::::::::: IMAGE UPLOAD FUNCTIONS
  const handleFloorImage = (event: any) => {
    var file = event.target.files[0];
    if (file === null) return;

    let reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLocalFloorImage(reader.result as string);
      dispatch(setFloorImage(reader.result as string));
    };
    reader.onerror = function (error: any) {
      cl('Change Image error: ', error);
    };
  };

  const items = useSelector((state: any) => state.floorData.items);

  // :::::::::::::::::::::::::::::::::::::::::::: ADD FUNCTION
  const handleAddItem = () => {
    dispatch(setItems([...items, { name: "", alias: "", price: "", people: "", bottles: "" }]));
  };

  // :::::::::::::::::::::::::::::::::::::::::::: DELETE FUNCTION
  const handleDeleteItem = (index: number) => {
    dispatch(setItems(items.filter((_: any, i: number) => i !== index)));
  };

  // :::::::::::::::::::::::::::::::::::::::::::: ITEM CHANGE FUNCTION
  const handleItemChange = (
    index: number,
    field: keyof ItemData,
    value: string | number
  ) => {
    dispatch(
      setItems(
        items.map((item: any, i: number) =>
          i === index ? { ...item, [field]: value } : item
        )
      )
    );
  };

  
  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFloorContextImage(floorImage);
    setFloorContextItems(items);
  
    router.push('/book');
  };

  return (
    <form onSubmit={HandleSubmit} className='flex flex-col gap-[1rem] w-full justify-center px-[1rem] sm:px-[2rem] py-[2rem] '>
      
      {floorImage && (
        <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={floorImage} 
          alt={'floorplan'} 
          className='w-full max-w-[45rem] h-[25rem] mx-auto object-contain border-solid border-[2px] border-teal-500 rounded-[8px] shadow-sm '
        />
        </>
      )}
      {!floorImage && 
        <UploadImage
          name='floor-plan-image'
          label='Upload floor-plan'
          onChange={handleFloorImage}
        />
      }
      {floorImage && 
      <label 
        htmlFor='floor-image' 
        className='relative z-[1] w-max mx-auto py-[0.5rem] md:py-[0.875rem] px-[0.875rem] md:px-[1.25rem] border-solid border-[1px] border-slate-600 rounded-[8px] hover:bg-teal-200 ease-250 '
      >
        <span className='text-slate-700 font-[600] text-[0.875rem] md:text-[1.05rem] uppercase '>Select New Floor-Plan</span>
        <input 
          type='file'
          id='floor-image'
          onChange={handleFloorImage}
          className='invisible z-[2] absolute top-0 left-0 h-full w-full '
        />
      </label>
      }
      <div className='flex flex-col gap-[2rem] mx-auto max-w-[55rem] max-h-[50%] '>
        <p className='text-[1.25rem] font-bold text-slate-900'>Enter the Spaces Details as Follows </p>
        {items.map((item: any, index: number) => (
          <ItemAppendForm
            key={index}
            item={item}
            index={index}
            onDelete={handleDeleteItem}
            onChange={handleItemChange}
          />
        ))}
      </div>
      <button
        type="button"
        className="flex items-center justify-center gap-[0.5rem] text-[1.25rem] font-semibold text-center h-[3rem] max-w-[45rem] w-full mx-auto border-solid border-[2px] border-green-500 bg-green-100 hover:bg-green-500 text-green-500 hover:text-white rounded-[8px] ease-250"
        onClick={handleAddItem}
      >
        <p className='text-[0.875rem] '>Add Space</p>
        <FaPlus />
      </button>
      <button
        type="submit"
        onClick={HandleSubmit}
        className="flex items-center justify-center h-[3rem] max-w-[45rem] w-full mx-auto bg-blue-500 text-white rounded-[8px] mt-[1rem]"
      >
        Submit
      </button>
    </form>
  );
};

export default UploadEventComponent;
