import type { Metadata } from 'next'
import { bebasNeue, inter } from '@/lib/fonts'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enzo Boscarino — Batterista Rock/Pop',
  description: 'Sito ufficiale di Enzo Boscarino, batterista e insegnante di musica Rock/Pop.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
