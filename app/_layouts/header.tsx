"use client";

import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseFill } from 'react-icons/ri';

const Header: React.FC = () => {
  const [isMobileView, setMobileView] = useState(false);
  const closeMobileNav = () => {
    setMobileView(false);
  }

  useEffect(() => {

    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  interface NavProps {
    name: string;
    link: string;
  }

  const navLinks: NavProps[] = [
    {name: 'home', link: 'home'},
    {name: 'upload', link: 'upload-event'},
    {name: 'events', link: 'events'},
  ]


  return (
    // <header className=' z-[100] top-0 left-0 flex justify-between items-center w-full h-[3.5rem] sm:h-[6rem] bg-slate-600 px-[2rem] sm:px-[3.5rem]'>
      <nav className="bg-white dark:bg-teal-900 sticky w-full z-20 top-0 start-0 border-b border-teal-200 dark:border-teal-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-teal-600 ">LOGO</span> 
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-[12px] md:hidden hover:ring-teal-200 hover:outline-none hover:ring-2 focus:ring-2 focus:ring-teal-400 " 
              aria-controls="navbar-sticky" 
              aria-expanded="false"
              onClick={() => setMobileView(!isMobileView)}
            >
              <span className="sr-only">Open main menu</span>
            
              <RiMenuLine className={`${isMobileView? 'visible relative' : 'absolute right-[1rem] '} rounded-[8px] p-[.45rem] text-slate-500 text-[2.75rem] ease-250 `} />
              <RiCloseFill  className={`${!isMobileView? 'visible relative' : 'absolute right-[1rem] '} rounded-[8px] p-[.45rem] text-slate-500 text-[2.75rem] ease-250 `} />
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-teal-100 rounded-lg bg-teal-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white 0">
            {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link} className="block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 capitalize" aria-current="page">{link.name}</a>
            </li>
            ))}
          </ul>
        </div>

        {/* ::::::::::::::::::::::::::::::::::::::::::: MOBILE VIEW NAV */}
        <div className={`absolute ${isMobileView? 'top-[100%] right-0 opacity-[100%] select-auto z-[50] visible' : 'top-[100%] right-[.5rem] opacity-0 select-none z-[-5] invisible'} lg:hidden flex flex-col items-center h-max w-[17rem] gap-[1.5rem] xl:gap-[2.8125rem] bg-teal-900 px-[1rem] py-[1.5rem] rounded-[8px] ease-250 overflow-hidden`}>
        {navLinks.map((link: any, index: number) => (
          <Link 
            key={index} 
            onClick={closeMobileNav} 
            to={link.link} 
            offset={-80} 
            className={'text-[0.875rem] capitalize xl:text-[1.35rem] font-semibold w-full text-center text-teal-50 hover:text-teal-300 hover:bg-[#ffffff]/20 py-[0.5rem] rounded-[8px] ease-250 '}
          >
            {link.name}
          </Link>
        ))}
      </div>
        </div>
    </nav>
    // </header>
  )
}


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
    <div className='sticky z-[50] top-0 left-0 h-max w-full bg-slate-600'>
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

export default Header