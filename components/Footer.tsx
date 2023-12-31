import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date= new Date();
  const year = date.getFullYear();
  return (
    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>
      <div>
      <p>&copy;{year} Santosh. All rights reserved.</p>
      </div>
      <div className='flex space-x-4 dark:text-white'>
        <Link href="https://www.facebook.com/santosh.chapagai.56" target="_blank">
          <Image src="facebook.svg" alt="facebook" width={32} height={32}/>
        </Link>
        <Link href="https://www.linkedin.com/in/santosh-chapagai-44b313131/" target="_blank">
          <Image src="linkedin.svg" alt="linkedin" width={32} height={32}/>
        </Link>
        <Link href="https://github.com/SantoshChapagai" target="_blank">
          <Image src="/github.svg" alt="github"  width={32} height={32}/>
        </Link>
        <Link href="https://www.instagram.com/san____tosh?igsh=NmdwNDZ4NnE5MXB4" target="_blank">
          <Image src="instagram.svg" alt="instagram"  width={32} height={32}/>
        </Link>
        <Link href="mailto:santoshchapagai100@gmail.com">
          <Image src="mail.svg" alt="gmail" width={32} height={32}/>
        </Link>
        
      </div>
      

    </div>
  )
}

export default Footer