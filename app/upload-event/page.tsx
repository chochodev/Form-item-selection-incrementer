"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputField from "@/components/input";

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
    <div className="flex gap-[1rem] px-[2rem] items-center">
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
      <button
        type="button"
        className="flex items-center justify-center h-[3rem] min-w-[3rem] rounded-[8px] bg-red-500 text-white"
        onClick={() => onDelete(index)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

// Main component to manage the dynamic form
const DynamicForm: React.FC = () => {
  const [items, setItems] = useState<ItemData[]>([
    { name: "", alias: "", price: "" },
  ]);

  const handleAddItem = () => {
    setItems([...items, { name: "", alias: "", price: "" }]);
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

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
    console.log("Form submitted", items); // You can handle the form submission as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      {items.map((item, index) => (
        <ItemAppendForm
          key={index}
          item={item}
          index={index}
          onDelete={handleDeleteItem}
          onChange={handleItemChange}
        />
      ))}
      <button
        type="button"
        className="flex items-center justify-center h-[3rem] min-w-[3rem] bg-green-500 text-white rounded-[200rem]"
        onClick={handleAddItem}
      >
        <FaPlus />
      </button>
      <button
        type="submit"
        className="flex items-center justify-center h-[3rem] min-w-[15rem] bg-blue-500 text-white rounded-[8px] mt-[1rem]"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
