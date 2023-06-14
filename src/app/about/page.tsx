import Button from "@/components/Button";
import Image from "next/image";

export default function AboutPage() {
    return(
        <div className="">
            <div className="w-full h-[300px] relative">
                <Image
                    className="object-cover grayscale" 
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="about"
                    fill
                    
                />
                <div className="absolute bottom-10 left-10 bg-green-500/80 text-white p-5  rounded-full">
                    <h1 className="text-2xl ">Digital Storytellers</h1>
                    <h2 className="text-xl">Handcrafting award winning digital experiences</h2>
                </div>

            </div>
            <div className="flex lg:flex-row  flex-col gap-10">
                <div className="my-10 flex flex-col space-y-5">
                    <h1 className="text-3xl font-extrabold">Who are we?</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, optio.</p>
                    <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, non magni veritatis recusandae quasi esse optio laborum earum repudiandae dignissimos? Quaerat vero nihil voluptas autem? Ex hic quod ab magni?</p>
                    <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, expedita?</p>
                </div>
                <div className="my-10 flex flex-col space-y-5 ">
                    <h1 className="text-3xl font-extrabold">
                        What We Do?
                    </h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis exercitationem sequi atque dolorum, iusto reiciendis, eveniet odit dolor quos harum! Aut reiciendis architecto velit odit fugit ex maiores facilis?</p>
                    <ul className="flex flex-col space-y-5">
                        <li>Creative illustration</li>
                        <li>Dynamic websites</li>
                        <li>Fast and handy Mobile Apps</li>
                    </ul>
                    <Button 
                        label="Contact"
                        href="/contact"
                    />
                   
                </div>
            </div>

        </div>
    )
}