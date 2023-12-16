import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-cols items-center justify-evenly p-32">
      <div className='lg:max-w-[800px] mr-4'>
      <h1>Hello! I'm Santosh Chapagai</h1>
      <h3>A Full-Stack Developer</h3>
      <p>I am a Master's in Business Administration graduate and a full stack developer. I am going to complete my full-stack program from Business College Helsinki. Currently, I am looking for an internship in the field of web development.</p>
      </div>
      <div>
        <Image src="/santosh.jpg" alt="santosh" width={800} height={800} className="object-contain rounded-full"/>
      </div>
    </main>
  )
}
