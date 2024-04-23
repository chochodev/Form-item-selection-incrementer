"use client";
import React from 'react'

const Header: React.FC = () => {
  interface NavProps {
    name: string;
    link: string;
  }

  const navLinks: NavProps[] = [
    {name: 'home', link: 'home'},
    {name: 'upload', link: 'upload'},
    {name: 'events', link: 'events'},
  ]

  return (
    <header className='flex justify-between w-full bg-slate-400 px-[2rem] sm:px-[3.5rem]'>
      <p className='font-bold text-[2rem] text-slate-900'>Logo</p>
      <nav className='flex-1 flex justify-end items-center gap-[5%]'>
        {navLinks.map((nav, index) => {
          return (
            <a key={index} href={'/' + nav.link} className='text-[1.05rem] font-[600] text-slate-600 hover:text-blue-800 capitalize ease-250 '>{nav.name}</a>
          )
        })}
      </nav>
    </header>
  )
}

export default Header