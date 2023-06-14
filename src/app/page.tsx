import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col  items-center justify-between">
      <div className="flex flex-col space-y-7">
        <h1 className="text-7xl text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#194c33] to-[#bbb] leading-tight break-words">
          Better design <br /> for your digital <br /> products.
        </h1>
        <p className="text-2xl">
          Turning Your Idea into Reality. We bring together <br /> the teams from the global tech industry
        </p>
        <Button 
          label="See Our work"
          href="/portfolio"
        />
          
      </div>
      <div className="h-[500px] relative w-[500px] z-50">

      <Image
        src="/images/hero.png"
        alt="homepage"
        fill
        className="image"
        
      />
      </div>
      
    </main>
  )
}
