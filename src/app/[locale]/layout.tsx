import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import TopButton from '@/src/app/[locale]/components/TopButton';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


export const metadata: Metadata = {
  title: 'Santosh Chapagai',
  description: 'Created by Santosh',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="relative min-h-screen">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar locale={locale}/>
          <main className="bg-lavender dark:bg-black pb-10">
            {children}
          </main>
          <Footer />
          <div className="absolute bottom-8 right-10">
            <TopButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
