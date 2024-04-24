// "use client";
// import React from 'react'

// const Header: React.FC = () => {
//   interface NavProps {
//     name: string;
//     link: string;
//   }

//   const navLinks: NavProps[] = [
//     {name: 'home', link: 'home'},
//     {name: 'upload', link: 'upload-event'},
//     {name: 'events', link: 'events'},
//   ]

//   return (
//     <header className='sticky z-[100] top-0 left-0 flex justify-between items-center w-full h-[3.5rem] sm:h-[6rem] bg-slate-600 px-[2rem] sm:px-[3.5rem]'>
//       <p className='font-bold text-[2rem] text-slate-300'>LOGO</p>
//       <nav className='flex-1 flex justify-end items-center gap-[5%]'>
//         {navLinks.map((nav, index) => {
//           return (
//             <a key={index} href={'/' + nav.link} className='text-[1.05rem] font-[600] text-slate-300 hover:text-blue-300 capitalize ease-250 '>{nav.name}</a>
//           )
//         })}
//       </nav>
//     </header>
//   )
// }

// export default Header

import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const [openSmallNav, setOpenSmallNav] = useState(false);
  const closeSmallNav = () => {
    setOpenSmallNav(false);
  }

  interface NavProps {
    name: string;
    link: string;
  }

  const navLinks: NavProps[] = [
    {name: 'home', link: 'home'},
    {name: 'upload', link: 'upload-event'},
    {name: 'events', link: 'events'},
  ]


  const nav_link = 'text-[1.25rem] capitalize xl:text-[1.35rem] font-semibold w-full text-center text-slate-600 hover:text-slate-800 transition-all duration-250 ease-in-out';

  return (
    <div className='fixed z-[50] top-0 left-0 h-max w-full bg-slate-600'>
      <div 
        className='relative z-[50] flex items-center justify-end lg:justify-center gap-[5rem] lg:gap-[20%] w-full py-[0.875rem] sm:py-[1rem] px-[5%] lg:px-[5rem] xl:px-[7.5rem]'
      >
        {/* <img src='./assets/images/logo.png' alt='LOGO' className='absolute left-[5%] xl:left-[7.5%] h-[3.875rem] sm:h-[5rem] w-[3.875rem] sm:w-[5rem] object-cover select-none' /> */}
        <p className='flex-1 font-[600] text-[2.5rem] text-slate-200 '>LOGO</p>
        <div 
          className="hidden lg:flex justify-evenly w-[40%] min-w-[30rem] lg:min-w-[35rem] px-0 xl:px-[.5rem] py-[1rem] rounded-[6.25rem] "
        >
          {navLinks.map((link: any, index: number) => (
            <Link key={index} to={link.link} offset={-80} className={nav_link}>{link.name}</Link>
          ))}
        </div>
        <button onClick={()=>setOpenSmallNav(!openSmallNav)} className='lg:hidden'>
          {!openSmallNav? 
            <RiMenuLine className='bg-slate-200/10 hover:bg-slate-200/20 rounded-[8px] p-[.45rem] text-slate-200 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
            : <RiCloseFill  className='bg-slate-200/10 hover:bg-slate-200/20 rounded-[8px] p-[.45rem] text-slate-200 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
          }
        </button>
      </div>
      <div className={`absolute ${openSmallNav? 'top-[100%] right-0 opacity-[100%] select-auto z-[50] visible' : 'top-[200%] right-[.5rem] opacity-0 select-none z-[-5] invisible'} lg:hidden flex flex-col items-center h-screen w-full gap-[2.125rem] xl:gap-[2.8125rem] pt-[12rem] bg-slate-400 px-[2rem] py-[3.5rem] transition-all ease-in-out duration-200 overflow-hidden`}>
        {navLinks.map((link: any, index: number) => (
          <Link 
            key={index} 
            onClick={closeSmallNav} 
            to={link.link} 
            offset={-80} 
            className={nav_link + ' w-full hover:bg-slate-500 [#ffffff]/20 py-[0.875rem] rounded-[8px] ease-250 '}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar