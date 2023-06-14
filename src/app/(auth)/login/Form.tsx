'use client'; 

import Link from 'next/link'
import React, { useState } from 'react'; 
import { IoEyeSharp } from 'react-icons/io5'; 
import { FaEyeSlash } from 'react-icons/fa'; 
import { signIn } from 'next-auth/react'; 


const Form = () => { 
    const [passwordType, setPasswordType] = useState("password"); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleLogin = () =>{
        signIn('credentials', {
            email, 
            password,
            callbackUrl: "/"

        })
    }
  return (
   
        <div className="w-[50%] ">
            <div>
                <label>Email</label>
                <input
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-2 border my-3 bg-transparent"
                placeholder="Enter your email address"

                    

                />
            </div>
            <div className="relative">
                <label>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
                    className="w-full p-2 border my-3 bg-transparent"
                    type={passwordType}
                    placeholder="Enter your password"
                />
                <div className="absolute top-11 right-2 cursor-pointer" onClick={() => setPasswordType(prev => prev === "password" ? "text": "password")}>
                    {passwordType === "text" ? (
                        <FaEyeSlash size={30} />

                    ): (
                       
                        <IoEyeSharp size={30} />
                    )}
                </div>
            </div>
            <button className="bg-green-600 py-2 px-4 rounded-md" onClick={handleLogin}>Sign In</button>
            <hr className="border my-5" />
            <div className="text-center">
                New User? <Link className="text-green-500 hover:underline" href="/register">Register</Link>
            </div>
            
            
        </div>
   
  )
}

export default Form