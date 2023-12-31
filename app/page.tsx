import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-cols items-center justify-evenly p-24">
      <div className='lg:max-w-[750px] mr-4'>
      <h1 className='text-3xl text-bold p-4'>Hello! I'm Santosh Chapagai</h1>
      <h3 className='text-xl p-4'>A Full-Stack Developer <span className='transition duration-1000 ease-in animate-pulse'>👋</span></h3>
      <p className='p-4'>I am a Master's in Business Administration graduate and a full stack developer. I am going to complete my full-stack program from Business College Helsinki. Currently, I am looking for an internship in the field of web development.</p>
      </div>
      <div>
        <Image src="/santosh.jpg" alt="santosh" width={768} height={512} className="object-contain rounded-ig h-96 w-84 pt-8"/>
      </div>
    </main>
  )
}
