import React from "react";
import prisma from "@/libs/prismaDB";
import bcrypt from "bcrypt";
import { IoEyeSharp } from 'react-icons/io5'; 
import Link from "next/link";

type Props = {};

function RegisterPage({}: Props) {
  
  let isLoading = false;

  const registerAction = async (data: FormData) => {
    "use server";
    
     
      const name = data.get("name");
      const password = data.get("password");
      const email = data.get("email");

      const salt = await bcrypt.genSalt(10);
      // @ts-ignore
      const hashedPassword = await bcrypt.hash(password, salt);

      await prisma.user.create({
        // @ts-ignore
        data: { name, email, hashedPassword },
      });
      console.log("successfully registered");
   
      
    
  };
  return (
    <div className="flex justify-center items-center">
      <form action={registerAction} className="space-y-3 flex flex-col w-[50%]">
        <label htmlFor="">Name</label>
        <input
          className="bg-transparent border p-2 w-full"
          name="name"
          type="text"
          disabled={isLoading}
          placeholder="Enter Your Name"
        />
        <label htmlFor="">Email</label>
        <input
          className="bg-transparent border p-2 w-full"
          name="email"
          type="email"
          disabled={isLoading}
          placeholder="Enter Your Email"
        />
        <label htmlFor="">Password</label>
        <input
          className="bg-transparent border p-2 w-full"
          name="password"
          type="password"
          disabled={isLoading}
          placeholder="Enter Your Password"
        />
        <div>

        </div>
        <button
          type="submit"
          className="bg-green-600 py-2 px-4 w-fit rounded-md shadow-lg shado-green-300 hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-green-900"
          disabled={isLoading}
        >
          Register
        </button>
        <hr className="border my-5" />
        <span className="text-center">
          Already have an account? <Link href="login" className="text-green-500 hover:underline">Sign in</Link>
        </span>
      </form>
    </div>
  );
}

export default RegisterPage;
