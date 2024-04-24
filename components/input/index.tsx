import React from 'react';

const cl = console.log.bind(console);

interface InputFieldProps {
  label?: string; 
  name?: string; 
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  icon?: any;
  onChange?: (e: any) => void; 
}

const InputField: React.FC<InputFieldProps> = ({
  label = "label",
  name = "",
  type = 'text',
  value = "",
  placeholder = 'Enter',
  className = "",
  icon = null,
  onChange
}) => {

  return (
    <div className={`relative flex items-center justify-center h-[25rem] min-w-[15rem] outline outline-[1px] outline-slate-400 rounded-[8px] ${className}`}>
      {/* ::::::::::::::::::::::::::::::::::: LABEL */}
      <label 
        htmlFor={name} 
        className='absolute top-[-1rem] left-[1rem] px-[0.5rem] py-[0.25rem] bg-slate-200 font-semibold text-[0.75rem] text-slate-500 '
      >
        {label}
      </label>

      {/* ::::::::::::::::::::::::::::::::::: INPUT */}
      <input 
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        className="w-full h-full text-[1.05rem] bg-slate-200 placeholder:text-slate-500 text-slate-700 pl-[0.5rem] rounded-[8px]"
      />

      {/* ::::::::::::::::::::::::::::::::::: ICON */}
      <div className='absolute right-[0.5rem] '>
        {icon}
      </div>
    </div>
  )
}

export default InputField