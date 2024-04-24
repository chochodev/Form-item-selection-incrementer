"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputField from "@/components/input";
import UploadImage from './upload';
import { useData } from '../useContext';
import { useRouter } from 'next/router';
import { useNavigate } from 'react-router-dom';

const cl = console.log.bind(console);

// Data structure for form items
interface ItemData {
  name: string;
  alias: string;
  price: string;
}

// Component for individual item inputs
const ItemAppendForm: React.FC<{
  item: ItemData;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, field: keyof ItemData, value: string | number) => void;
}> = ({ item, index, onDelete, onChange }) => {
  return (
    <div className="flex gap-[1rem] items-center">
      <InputField
        label="Name"
        name={`name-${index}`}
        type="text"
        value={item.name}
        placeholder="e.g. Living Room 1"
        onChange={(e: any) => onChange(index, "name", e.target.value)}
      />
      <InputField
        label="Alias"
        name={`alias-${index}`}
        type="text"
        value={item.alias}
        placeholder="e.g. LR 1"
        onChange={(e: any) => onChange(index, "alias", e.target.value)}
      />
      <InputField
        label="Price"
        name={`price-${index}`}
        type="number"
        value={item.price}
        placeholder="e.g. 100"
        onChange={(e: any) => onChange(index, "price", e.target.value)}
      />

      {/* BUTTON */}
      <button
        type="button"
        className="flex items-center justify-center h-[2.5rem] min-w-[2.5rem] rounded-[8px] bg-red-500 text-white"
        onClick={() => onDelete(index)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

// Main component to manage the dynamic form
const DynamicForm: React.FC = () => {
  const route = useNavigate();

  const { setFloorContextImage, setFloorContextItems } = useData();

  // :::::::::::::::::::::::::::::::::::::::::::: IMAGE SECTION FUNCTION
  const [floorImage, setFloorImage] = useState<string>("");

  // :::::::::::::::::::::::::::::::::: IMAGE UPLOAD FUNCTIONS
  const handleFloorImage = (event: any) => {
    var file = event.target.files[0];
    if (file === null) return;

    let reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setFloorImage(reader.result as string);
    };
    reader.onerror = function (error: any) {
      cl('Change Image error: ', error);
    };
  };

  const [items, setItems] = useState<ItemData[]>([
    { name: "", alias: "", price: "" },
  ]);

  // :::::::::::::::::::::::::::::::::::::::::::: ADD FUNCTION
  const handleAddItem = () => {
    setItems([...items, { name: "", alias: "", price: "" }]);
  };

  // :::::::::::::::::::::::::::::::::::::::::::: DELETE FUNCTION
  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // :::::::::::::::::::::::::::::::::::::::::::: ITEM CHANGE FUNCTION
  const handleItemChange = (
    index: number,
    field: keyof ItemData,
    value: string | number
  ) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFloorContextImage(floorImage);
    setFloorContextItems(items);
    
    route.push('/book');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem] w-full max-w-[48rem] mx-auto py-[5rem] '>
      {floorImage && <img 
        src={floorImage} 
        alt={'floorplan'} 
        className='w-[25rem] min-w-[25rem] object-contain '
      />}
      <UploadImage
        name='floor-plan-image'
        label='Upload floor-plan'
        onChange={handleFloorImage}
      />
      <div className='flex flex-col gap-[1rem] '>
        <p className='text-[1.25rem] font-bold text-slate-900'>List the name(s) and price(s) of the space(s) available in your floor plan image</p>
      {items.map((item, index) => (
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
        className="flex items-center justify-center gap-[0.5rem] text-[1.25rem] font-semibold text-center h-[3rem] w-[8rem] mb-[-1.5rem] border-solid border-[2px] border-green-500 bg-green-100 hover:bg-green-500 text-green-500 hover:text-white rounded-[8px] ease-250"
        onClick={handleAddItem}
      >
        <FaPlus />
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center justify-center h-[3rem] w-[8rem] bg-blue-500 text-white rounded-[8px] mt-[1rem]"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
