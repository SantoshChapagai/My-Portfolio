import TypographyH1 from '@/components/typography/h2'
import TypographyH3 from '@/components/typography/h3'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-cols items-center justify-evenly pt-24 px-16 h-2/3">
      <div className='lg:max-w-[750px] mr-4'>
      <TypographyH1>Hello! I'm Santosh Chapagai</TypographyH1>
      <TypographyH3>A Full-Stack Developer <span className='transition duration-1000 ease-in animate-pulse h-16 w-16'>👋</span></TypographyH3>
      <p className='p-4'>I am a Master's in Business Administration graduate and a full stack developer. I am going to complete my full-stack program from Business College Helsinki. Currently, I am looking for an internship in the field of web development.</p>
      </div>
      <div className='bg-carolina dark:bg-black rounded-3xl mt-10'>
        <Image src="/santosh.jpg" alt="santosh" width={768} height={512} className="object-contain rounded-full"/>
      </div>
    </main>
  )
}
