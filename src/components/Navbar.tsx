"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useRouter } from 'next/navigation'; 
import { User } from "@prisma/client";
import { signOut } from 'next-auth/react'; 

type Props = {
  currentUser: User | null; 
};

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    title: "About",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    href: "/dashboard",
  },
];

function Navbar({currentUser}: Props) {
  const router = useRouter(); 
   
  return (
    <header className="flex flex-row justify-between items-center h-28">
      <div>
        <Link href="/" className="font-bold text-2xl">
          Logo
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {navLinks.map((link) => (
          <Link className="link-items" key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
        {currentUser ? (
            <button
            className="p-2 bg-green-600 text-white rounded-md"
            onClick={() => signOut()}
          >
            Sign out
          </button>

        ): (
          <button
          className="p-2 bg-green-600 text-white rounded-md"
          onClick={() => router.push("/register")}
        >
          Sign Up
        </button>

        )}
       
      </div>
    </header>
  );
}

export default Navbar;
