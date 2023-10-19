import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/providers/ThemeProvider';
import { DrawerProvider } from '@/providers/DrawerProvider';
import {notFound} from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}

const inter = Inter({ subsets: ['latin'] });
async function getMessages(locale: string) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: 'Local updates App',
  description: 'Local news and activities'
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: any
}) {
  const messages = await getMessages(locale);
 
  return (
    <html lang={locale}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>

              <section className="hidden lg:block">
                <div>Lorem ipsum dolor sit amet.</div>
                <div>Lorem ipsum dolor sit amet.</div>
              </section>

              <header className="sticky top-0">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </header>

              <main className="container mx-auto px-4 grow">
                {children}
              </main>
              
              <footer>
                <Footer />
              </footer>

          </ThemeProvider>
        </ NextIntlClientProvider>

      </body>
    </html>
  );
}
