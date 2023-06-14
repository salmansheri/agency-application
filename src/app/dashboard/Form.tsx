'use client'; 

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter(); 
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        
        content: "", 
    }); 
    const [image, setImage] =useState(""); 

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader(); 
            fileReader.readAsDataURL(file); 

            fileReader.onload = () => {
                resolve(fileReader.result); 
            }

            fileReader.onerror = () => {
                reject(fileReader.error); 
            }
        })

    }

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0] 
        const base64 = await convertBase64(file); 
        // @ts-ignore
        setImage(base64); 

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })

    }

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault(); 
        try {
            setIsLoading(true); 
            const response = await fetch("/api/post", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                }, 
                body: JSON.stringify({
                    ...formData, 
                    image, 
                })
            }); 

            if(response.ok) {
                router.refresh(); 
            }
        } catch(error: any) {
            alert("something went wrong"); 
            

        } finally {
            setIsLoading(false); 

        }

    }
  return (
    <div className="new my-10 flex items-center justify-center">
        {/* @ts-ignore  */}
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 md:w-[50%]" >
        <h1 className='text-center text-3xl font-extrabold '>Add New Post</h1>
        <input
        disabled={isLoading}
        
            onChange={(e) => handleChange(e)}

            placeholder="Enter the title"
            type='text'
            name="title"
            className="w-full p-2 bg-transparent border"
        />
        <input
        disabled={isLoading}
        
            onChange={(e) => handleChange(e)}

            placeholder="Enter the description"
            type="text"
            name="description"
            className="w-full p-2 bg-transparent border"
        />
        <input
        disabled={isLoading}
        
            onChange={(e) => uploadImage(e)}

            type="file"
            name="image"
            className="w-full p-2 bg-transparent border"
        />
        <textarea
        disabled={isLoading}
        // @ts-ignore 
            onChange={(e) => handleChange(e)}
        placeholder="Enter Content" name="content" id="" cols={30} rows={10} className="w-full p-2 bg-transparent border"></textarea>
        <button
        disabled={isLoading}
            type="submit"
            className="bg-green-500 text-black w-fit px-4 py-2 rounded-sm disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
            Post
        </button>
    </form>

</div>
  )
}

export default Form