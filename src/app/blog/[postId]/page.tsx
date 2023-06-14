import { getPostsById } from "@/actions/getPosts";
import Image from "next/image";

interface IParams {
    postId: string; 
}

export async function generateMetadata({params}: { params: IParams }) {
    const post = await getPostsById(params.postId); 

    return {
        title: post?.title,
        description: post?.description,
    }

}
export default async function PostPage({
    params
}: {
    params: IParams,

}) {
    const { postId } = params; 
    const post: Record<string, any> | null = await getPostsById(postId); 

    if(!post) {
        throw new Error("No post found")
    }
    return(
        <div className="flex flex-col space-y-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:flex-1 flex flex-col justify-between">
                    <h1 className="text-3xl font-extrabold ">{post?.title}</h1>
                    <p className="text-justify">{post?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam voluptatum molestias porro autem, quibusdam distinctio minima consectetur iure a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellendus unde adipisci veritatis saepe sunt voluptate perspiciatis omnis atque laboriosam expedita, eius dolor deleniti, commodi quasi quia maxime! Voluptas quaerat facilis ab nostrum pariatur architecto aperiam, ratione nobis, cum a, eos ipsam! Ullam, iste accusamus omnis at amet recusandae laborum.</p>
                    <p><strong>Author: </strong>{post?.user?.name}</p>
                </div>
                <div className="lg:flex-1">
                    <Image 
                        src={post?.image as string}
                        alt={post?.title as string}
                        width={500}
                        height={500}

                    />
                    
                </div>
            </div>
            <div className="text-justify">
            {post?.content}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum quos explicabo ratione nobis laudantium totam voluptates vero saepe iusto cupiditate quam maiores, esse doloremque fugiat iure, aspernatur at. Saepe id eligendi officia, libero magni architecto voluptatibus asperiores deserunt at natus corporis velit, modi ipsam, vitae maxime tempore voluptas. Dolores ex aperiam in, dolor, soluta aliquid dolore, nisi autem neque minus quo tempore iure eveniet veniam optio ipsa consequuntur modi? Facilis, at distinctio cupiditate nostrum recusandae repellendus, laborum dolor ipsam voluptatem voluptate voluptas fuga ipsum, quos et! Vero, perspiciatis qui? Quisquam facilis, eius nisi expedita voluptatum optio molestias! Sit ipsa, at iure recusandae voluptatibus labore minus, ratione maxime esse eligendi fugit sint nisi quod omnis praesentium voluptas, asperiores consectetur. Laborum maxime asperiores quos eos soluta deleniti a qui rem quam cum! In dolores recusandae reiciendis laborum quam at dignissimos cumque officia autem eaque quae quis consequuntur soluta laudantium aperiam magnam corporis atque, maxime officiis quasi ipsa temporibus. Quaerat possimus qui placeat quod consequatur officiis reprehenderit molestiae praesentium minima fugiat. Dolorum unde eius iure! Fuga, blanditiis enim quas architecto ipsum debitis eius voluptatem labore nesciunt cupiditate doloribus veniam delectus vitae quam, obcaecati totam hic atque, ipsam ex ullam! Dicta asperiores debitis illo totam molestias dolore deleniti, sequi molestiae iusto quo, cum ullam amet repellendus quaerat? Tempore, aspernatur. Quod reprehenderit labore officia distinctio, delectus fuga. Ducimus quae nobis, explicabo suscipit nihil repellendus a officia? Incidunt iure culpa earum qui tempore soluta iusto quo voluptate repellat quas blanditiis dolores, inventore excepturi necessitatibus corrupti obcaecati animi at doloremque! Placeat, blanditiis ratione possimus non tempora autem esse et odit quibusdam, tenetur asperiores quasi voluptates, quae reiciendis quisquam. Recusandae voluptatibus dolorem laudantium exercitationem sit, deserunt distinctio neque pariatur suscipit qui ex ipsa, dolorum quos. Veritatis optio consequuntur explicabo sit aliquid exercitationem sint debitis excepturi numquam in officia ipsa asperiores, nemo corrupti hic facilis ipsam incidunt quos sunt est necessitatibus magni voluptatem! Veritatis excepturi odit ea minima, maxime, quam sit consectetur neque totam ullam, vitae asperiores rem libero iusto voluptates error eius. Dolores quos molestias excepturi non, temporibus repellat vitae quis quas reprehenderit enim, necessitatibus sint aut fugit consequatur, optio laborum nihil magnam aspernatur commodi dignissimos? In est nisi mollitia incidunt pariatur itaque facere officiis ipsum recusandae dignissimos, praesentium inventore optio velit adipisci excepturi necessitatibus iste officia eveniet. Voluptatem nobis consequuntur hic provident perferendis? Culpa facilis ullam recusandae iusto dignissimos ipsam accusamus laudantium fugiat quasi omnis. Repudiandae deserunt tempora ducimus excepturi est expedita libero, molestias officia. Delectus quasi repellat eos sint est corrupti ex, aperiam ratione dolor vel officiis aliquid atque totam nobis quis sed fugiat tempore. Ut dolore excepturi repellat commodi sapiente praesentium ducimus porro in accusantium ratione, soluta doloribus perspiciatis vitae repellendus temporibus expedita deleniti at voluptatem, hic enim sequi, fuga ipsam. Beatae incidunt ad ullam inventore esse doloremque recusandae reprehenderit quo accusamus laudantium sapiente, quibusdam magnam harum earum! Explicabo consequatur perferendis eligendi eos corporis enim ab itaque voluptatibus a, dolorem obcaecati facere! Praesentium cupiditate ad magnam, voluptatum mollitia vel consequatur iste corporis deleniti error?

            </div>
        </div>
    )
}