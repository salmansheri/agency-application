import React from 'react'; 
import { getPosts } from '@/actions/getPosts';
import { Post } from '@prisma/client';
import Posts from './Posts';


export default async function BlogPage() {
    const posts: Post[] | null = await getPosts(); 

    if(!posts) {
        throw new Error("No posts found")
    }
  return (
    <div>
        {posts?.map((post) => (
            <Posts
                key={post?.id}
                post={post}

            />
        ))}
    </div>
  )
}

