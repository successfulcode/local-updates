import Providers from '@/providers/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/providers/ThemeProvider';
import { DrawerProvider } from '@/providers/DrawerProvider';
import Drawer from '@/components/Navbar/Drawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Local updates App',
  description: 'Local news and activities'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>

          <header className="sticky top-0">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </header>
          <main className="container mx-auto px-4 grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
