import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { MediaSection } from '@/components/sections/MediaSection'
import { LessonsSection } from '@/components/sections/LessonsSection'
import { ConcertsSection } from '@/components/sections/ConcertsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { PressKitSection } from '@/components/sections/PressKitSection'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <AboutSection />
      <MediaSection />
      <LessonsSection />
      <ConcertsSection />
      <PressKitSection />
      <ContactSection />
    </main>
  )
}
