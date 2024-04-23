// "use client";
// import React, { useState, useRef } from 'react';
// import { MdOutlineDriveFileRenameOutline, MdOutlineArrowUpward } from "react-icons/md";
// import { FiAtSign } from "react-icons/fi";
// import { HiOutlineCurrencyDollar } from "react-icons/hi2";
// import { FaPlus } from "react-icons/fa6";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import UploadImage from './upload';
// import InputField from '@/components/input';

// const cl = console.log.bind(console);

// interface ItemAppendFormProps {
//   onChange?: () => void;
// }

// const ItemAppendForm: React.FC<ItemAppendFormProps> = ({ onChange }) => {

//   const [spaceName, setSpaceName] = useState<string>('');

//   const handleSpaceNameChange  = () => {

//   }

//   return (
//   <div className="flex gap-[1rem] px-[2rem] ">
//     <InputField 
//       label="Space name"
//       name="space-name"
//       type="text"
//       placeholder='e.g Living room 1'
//       icon={<MdOutlineDriveFileRenameOutline className='text-[1.5rem] text-slate-400' />}
//       onChange={handleSpaceNameChange}
//     />
//     <InputField 
//       label="Alias"
//       name="alias"
//       type="text"
//       placeholder='e.g LR 1'
//       icon={<FiAtSign className='text-[1.5rem] text-slate-400' />}
//       onChange={()=>{}}
//     />
//     <InputField 
//       label="Price"
//       name="price"
//       type="number"
//       placeholder='e.g 100'
//       icon={<HiOutlineCurrencyDollar className='text-[1.5rem] text-slate-400' />}
//       onChange={()=>{}}
//     />
//     <div>
//       <button
//         type="button"
//         className="flex items-center justify-center h-[3rem] min-w-[15rem] outline outline-[1px] outline-slate-400 rounded-[8px] "
//       >
//         <MdOutlineArrowUpward className='text-[1.15rem] text-slate-400 ' />
//         <RiDeleteBin6Line className='text-[1.15rem] text-slate-400 ' />
//       </button>
//     </div>
//   </div>
//   )
// }


// // ::::::::::::::::::::::::::::::::: MAIN FUNCTION COMPONENT
// interface ItemData {
//   name: string;
//   alias: string;
//   price: number;
// }

// const Upload: React.FC = () => {
//   // ::::::::::::::::::::::::::::::::::: STINGIFIED FILE STATE
//   const [floorImage, setFloorImage] = useState<string>("");

//   // :::::::::::::::::::::::::::::::::: IMAGE UPLOAD FUNCTIONS
//   const handleFloorImage = (event: any) => {
//     var file = event.target.files[0];
//     if (file === null) return;
//     let reader: any = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//         setFloorImage(reader.result);
//     };
//     reader.onerror = function (error: any) {
//       cl('Change Image error: ', error);
//     };
//   };
      
//   // :::::::::::::::::::::::::::::::::: FORM STATE
//   const [items, setItems] = useState<ItemData[]>([]);

//   const handleItemChange = () =>

 

//   const columnLength: any = []

//   return (
//     <form>
//       <UploadImage
//         name='floor-plan-image'
//         label='Upload floor-plan'
//         onChange={handleFloorImage}
//       />
//     {columnLength?.map((_: any, index: number) => {
//       return (
//         <div key={index} className="flex gap-[1rem] px-[2rem] ">
//           <ItemAppendForm 
//             key={index}
//             onChange={handleItemChange}
//           />
//         </div>
//       )
//     })}

//       <button className="group flex justify-center items-center h-[2.5rem] w-[2.5rem] min-w-[2.5rem] bg-slate-100 hover:bg-slate-200 rounded-[200rem] ">
//         <FaPlus className="group-hover:text-slate-800 text-[1.5rem] text-slate-600" />
//       </button>
//     </form>
// )}

// export default Upload;