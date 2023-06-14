import { getPostsByUserId } from "@/actions/getPosts"
import Posts from "../blog/Posts";
import Form from "./Form";

export default async function DashboardPage() {
    const posts = await getPostsByUserId(); 
   
    return(
        <div
            className="container"

        >
            {posts?.map((post) => (

            <Posts 
                key={post?.id}
                post={post}
                isUser
            />
            ))}
           <Form />
           
        </div>
    )
}