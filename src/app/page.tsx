import { Hero } from '@/components/sections/Hero'
import { EndorsementsSection } from '@/components/sections/EndorsementsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BioSection } from '@/components/sections/BioSection'
import { RiferimentiSection } from '@/components/sections/RiferimentiSection'
import { MediaSection } from '@/components/sections/MediaSection'
import { LessonsSection } from '@/components/sections/LessonsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import {
  CHI_SONO_TEXT,
  COSA_INSEGNO_TEXT,
  COME_SUONO_TEXT,
  STUDIO_TEXT,
  DOVE_MI_TROVI_TEXT,
} from '@/data/about'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <EndorsementsSection />
      <AboutSection />

      <BioSection
        id="chi-sono"
        eyebrow="La storia"
        title="CHI SONO"
        paragraphs={CHI_SONO_TEXT}
        imageSrc="/images/enzo-portrait.png"
        imageAlt="Enzo Boscarino — ritratto"
        imageAspect="aspect-square"
        imagePosition="right"
        dark
      />

      <BioSection
        id="cosa-insegno"
        eyebrow="Didattica"
        title="COSA INSEGNO"
        paragraphs={COSA_INSEGNO_TEXT}
        imageSrc="/images/cosa-insegno.jpg"
        imageAlt="Enzo Boscarino — lezione"
        imageAspect="aspect-[4/3]"
        imagePosition="left"
      />

      <BioSection
        id="come-suono"
        eyebrow="Il mio approccio"
        title="COME SUONO"
        paragraphs={COME_SUONO_TEXT}
        imageSrc="/images/come-suono-family.png"
        imageAlt="Tre generazioni di musicisti"
        imageAspect="aspect-square"
        imagePosition="right"
        dark
      />

      <BioSection
        id="il-mio-studio"
        eyebrow="Studio recording"
        title="IL MIO STUDIO"
        paragraphs={STUDIO_TEXT}
        imageSrc="/images/studio-1.jpg"
        imageAlt="Studio di registrazione Enzo Boscarino"
        imageAspect="aspect-[4/3]"
        imagePosition="left"
      />

      <RiferimentiSection />

      <BioSection
        id="dove-mi-trovi"
        eyebrow="Contatti & Location"
        title="DOVE MI TROVI"
        paragraphs={DOVE_MI_TROVI_TEXT}
        imageSrc="/images/studio-2.jpg"
        imageAlt="Studio Casalmaiocco"
        imageAspect="aspect-[4/3]"
        imagePosition="right"
        dark
      />

      <MediaSection />
      <LessonsSection />
      <ContactSection />
    </main>
  )
}
