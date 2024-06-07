import TypographyH2 from '@/src/app/[locale]/components/typography/h2'
import TypographyH1 from '@/src/app/[locale]/components/typography/h2'
import Image from 'next/image'
import Link from 'next/link'
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import {Overpass} from "next/font/google";
import { useTranslations } from 'next-intl';
const overPass = Overpass({
  weight: "400",
  subsets: ['latin'],

})

export default function Home() {
  const t = useTranslations('homepage');
  return (
    <main>
      <div className="flex lg:flex-row sm:flex-col flex-wrap lg:justify-center lg:items-center lg:space-x-10 pt-24 lg:px-16 h-2/3">
        <div className='ml-2 text-heading1'>
        <TypographyH1>{t('h1')}</TypographyH1>
        <div className='text-heading2'>
      <TypographyH2>{t('h2')} <span className='transition duration-1000 ease-in animate-pulse'>👋</span></TypographyH2>
      </div>
      <div className={`${overPass.className} max-w-[650px] text-primary mx-8`}>
      <p className='mb-4'>{t('study')}</p>
      <hr className='h-4'/>
      <p>{t('business_study')}</p>
      </div>
      <div className='mt-4 p-5 text-primary'>
        <p className=''>{t('intern_description')}<Link href="https://www.unelmaplatforms.com/" target='_blank' className='underline'> {t('intern_place')}</Link> <span>{t("intern_role")}</span></p>
      </div>
      <button className='mt-5 sm:text-center bg-primary mx-8 text-primary-foreground p-2 rounded-xl transition duration-1000 ease-out animate-pulse'>
       <Link href="/images/santosh.pdf" download="resume" target='_blank'>
       {t('cv')}
       </Link>
      </button>
        </div>
        <div className='lg:bg-card  rounded-tl-full w-96 mt-10'>
         <Image src="/images/santosh.jpeg" alt="santosh" width={768} height={512} className="object-contain rounded-full w-80 mb-5 ml-8 md:ml-2"/>
         </div>
         </div>
     
      <div className='lg:flex justify-evenly mx-8 lg:mt-32 lg:mb-12'>
        <Link href="/about" className="max-w-[250px] group relative">
          <div className='flex items-center space-x-4  group-hover:underline text-heading2'>
          <TypographyH2>{t('about_link')}</TypographyH2>
          <ImProfile size={32} />
          </div>
          <p className='text-primary'>{t('about_text')}.</p>
        </Link>
        <Link href="/skills" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>{t('skills_link')}</TypographyH2>
          <GiSkills size={32} />
          </div>
          <p className='text-primary'>{t('skills_text')}</p>
        </Link>
        <Link href="/projects" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>{t('projects_link')}</TypographyH2>
          <GrProjects size={24}/>
          </div>
          <p className='text-primary'>{t('projects_text')}</p>
        </Link>
        <Link href="contact" className="max-w-[250px] group">
          <div className='flex items-center space-x-4 group-hover:underline text-heading2'>
          <TypographyH2>{t('contact_link')}</TypographyH2>
          <IoIosContacts size={32} />
          </div>
          <p className='text-primary'>{t('contact_text')}</p>
        </Link>
      </div>
    </main>
  )
}
