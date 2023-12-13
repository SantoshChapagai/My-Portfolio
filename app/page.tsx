import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-cols items-center justify-between p-32">
      <div className='max-w-[600px]'>
      <h1>Hello! I'm Santosh Chapagai</h1>
      <h3>A Full-Stack Developer</h3>
      <p>I am a Master's in Business Administration graduate and a full stack developer. I am going to complete my full-stack program from Business College Helsinki. Currently, I am looking for an internship in the field of web development.</p>
      </div>
      <div>
        <Image src="/santosh.jpg" alt="santosh" width={100} height={80} className="object-contain"/>
      </div>
    </main>
  )
}
