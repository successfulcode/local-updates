import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Local updates App',
  description: 'Local news and activities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <header className="fixed w-full">
            <Navbar />
          </header>
          <main className="container mx-auto px-4 grow">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
