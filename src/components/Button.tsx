'use client'; 

import { useRouter } from 'next/navigation'; 

import React, { ButtonHTMLAttributes } from 'react'; 

interface ButtonProps {
    label: string; 
    href?: string; 
    secondary?: boolean; 
   

}

const Button: React.FC<ButtonProps> = ({
    label, 
    href, 
    secondary,
    
}) => {
    const router = useRouter(); 
  return (
    <button onClick={() => router.push(href as string)} className="p-5 rounded-md bg-green-500 text-white w-max">
    {label}
</button>
  )
}

export default Button