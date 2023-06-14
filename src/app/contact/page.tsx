import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'


type Props = {}

function ContactPage({}: Props) {
  const ContactAction  = async (data: FormData) => {
    'use server'; 
    const email = data.get("email"); 
    const name = data.get("name"); 
    const feedback = data.get("feedback");
    console.log(name, email, feedback)

  }
  return (
   <div className="flex flex-row gap-10">
    <div className="relative w-[500px] h-[500px]">
      <Image 
        src="/images/contact.png"
        alt="contact"
        fill
        className="image"
      />
    </div>
    <div className="lg:flex-1">
      <form className="flex flex-col space-y-5 h-full justify-center">
        <input 
          placeholder="Name"
          className="w-full p-2 bg-transparent border border-white"
        />
        <input 
          placeholder="Email"
          className="w-full p-2 bg-transparent border border-white"
        />
        <input 
          placeholder="Issue"
          className="w-full p-2 bg-transparent border border-white"
        />
        <textarea 
          placeholder="Message"
          cols={30}
          rows={20}
          className="w-full p-2 bg-transparent border border-white"
        />
        <Button 
          label="contact"
        />
      </form>
    </div>
   </div>
  )
}

export default ContactPage