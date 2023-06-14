import Image from "next/image";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="container flex items-center justify-between h-52">
      <div>©️ {year}. All rights reserved.</div>
      <div className="flex flex-row space-x-5 ">
        <Image src="/images/1.png" alt="myimage" width={15} height={15} className="opacity-[0.6] cursor-pointer hover:opacity-100" />
        <Image src="/images/2.png" alt="myimage" width={15} height={15} className="opacity-[0.6] cursor-pointer hover:opacity-100" />
        <Image src="/images/3.png" alt="myimage" width={15} height={15} className="opacity-[0.6] cursor-pointer hover:opacity-100" />
        <Image src="/images/4.png" alt="myimage" width={15} height={15} className="opacity-[0.6] cursor-pointer hover:opacity-100" />
      </div>
    </footer>
  );
}

export default Footer;
