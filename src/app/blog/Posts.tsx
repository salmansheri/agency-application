'use client'; 

import { Post } from '@prisma/client';
import Image from 'next/image';
import React, { useCallback } from 'react'; 
import { useRouter } from 'next/navigation';
import { AiFillDelete } from 'react-icons/ai'; 


interface PostsProps {
    post: Post | null;
    isUser?:boolean;  
}

const Posts: React.FC<PostsProps> = ({
    post,
    isUser
}) => {
    const Router = useRouter(); 
    const handleDelete =  useCallback(async () => {
        try {
            const response = await fetch(`/api/post/${post?.id}`, {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json", 
                }
            })

            if(!response.ok) {
                alert("Cannot delete post"); 
            }

            Router.refresh(); 

        } catch(error) {

        } 

    }, [post?.id, Router]); 

  return (
    <div className="flex justify-between">


    <div className="flex flex-col lg:flex-row gap-10 my-10" onClick={() => Router.push(`/blog/${post?.id}`)}>
        <div>
            <Image 
                src={post?.image as string}
                alt={post?.title as string}
                width={300}
                height={300}
                
                />
        </div>
        <div className="flex justify-between w-full">
            <div>

            <h1>{post?.title}</h1>
            <p>{post?.description}</p>
            </div>
        </div>

    </div>
            {isUser && (
                <div onClick={handleDelete}>
                    <AiFillDelete 
                        size={30}
                        color="red"
                        />

                </div>

)}
</div>
  )
}

export default Posts