'use client'; 

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useState } from 'react'

const DarkModeToggle = () => {
  // @ts-ignore
  const { toggle, mode } = useContext(ThemeContext)
    
  return (
    <div className="w-10 h-6 border-[1.5px] border-solid border-[#53c28b70] rounded-full flex relative transition-all duration-500 cursor-pointer items-center" onClick={toggle}>
        <div className="">🌙</div>
        <div className="">☀️</div>
        <div className={`bg-green-500 rounded-full h-5 w-5 absolute ${mode === "dark" ? "left-0":"right-0"}`}></div>

    </div>
  )
}

export default DarkModeToggle