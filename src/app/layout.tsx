import type { Metadata } from 'next'
import { bebasNeue, inter } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enzo — Musicista & Insegnante Rock/Pop',
  description: 'Sito ufficiale di Enzo, musicista e insegnante di musica Rock/Pop.',
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
