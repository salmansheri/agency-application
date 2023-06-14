import prisma from "@/libs/prismaDB";
import getCurrentUser from "./getCurrentUser";

export async function getPosts() {
    try {
        const currentUser = await getCurrentUser(); 
        if(!currentUser) {
            return null;
        }

        const posts = await prisma.post.findMany({
            include: {
                user: true,
            }
        }); 

        if(!posts) {
            return null; 
        }

        return posts; 

    } catch(error) {
        console.log(error); 
        return null; 

    }
}

export async function getPostsById(id: string) {
    try {
        const currentUser  = await getCurrentUser(); 

        if(!currentUser) {
            return null; 

        }

        const post = await prisma.post.findUnique({
            where: {
                id: id, 
            }, 
            include: {
                user: true, 
            }

        }); 

        if(!post) {
            return null; 
        }

        return post; 

    } catch(error: any) {
        console.log(error); 
        return null; 
    }
}

export async function getPostsByUserId() {
    try {
        const currentUser = await getCurrentUser(); 
        if(!currentUser) {
            return null; 
        }

        const post = await prisma.post.findMany({
            where: {
                userId: currentUser?.id
            }, 
            include: {
                user: true, 
            }
        }); 

        if(!post) {
            return null; 
        }

        return post; 

    } catch(error: any) {
        console.log(error); 
        return null; 

    }
}