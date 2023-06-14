import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'; 
import { items } from './data';
import { notFound } from 'next/navigation';

interface IParams {
  category: string; 
}

const getData = (cat: any) => {
  // @ts-ignore
  const data = items[cat]

  if(!data) {
    return notFound(); 
  }

  return data; 

}

export default function CategoryPage({params}: {params: IParams}) {
  const { category } = params; 
  const data = getData(category); 
  console.log(data); 

  return (
    <div>

        <h1 className="uppercase font-bold text-green-600">{category}</h1>
        {data.map((item: any) => (

        <div key={item.id} className="flex lg:flex-row odd:lg:flex-row-reverse flex-col gap-10  w-full my-10">
          <div className="lg:flex-1 flex flex-col space-y-5 justify-center ">
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-xl text-justify">{item.desc}</p>
            <Button
              label="See More" 
              href="#"
              
            />
          </div>
          <div className="h-[300px] lg:w-[300px] w-[500px] relative lg:flex-1">
            <Image 
              src={item.image}
              alt="i"
              fill
              className="object-cover absolute"
            />
          </div>



        </div>
        ))}
   
       



       
      

    </div>
  )
}