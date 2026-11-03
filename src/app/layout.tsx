import type { Metadata } from 'next'
import { bebasNeue, inter } from '@/lib/fonts'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'
import { SITE_URL } from '@/data/site'
import './globals.css'

const TITLE = 'Enzo Boscarino — Batterista e insegnante Rock/Pop | Milano'
const DESCRIPTION =
  'Enzo Boscarino, batterista professionista e insegnante di batteria a Milano e Casalmaiocco (LO). Lezioni private, consulenza online e studio recording.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: '/',
    siteName: 'Enzo Boscarino',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
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
        <WhatsAppButton />
      </body>
    </html>
  )
}
