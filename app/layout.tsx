import {Navbar, Footer} from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import {ThemeProvider} from "next-themes"
import TopButton from '@/components/TopButton';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santosh Chapagai',
  description: 'Created by santosh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-black dark:bg-black dark:text-white">
        <Navbar />
        <div className='bg-lavender dark:bg-black pb-10'>
        {children}
        </div>
        <Footer />
        <div className='absolute bottom-8 right-10'>
        <TopButton/>
        </div>
        </body>
        
    </html>
  )
}
