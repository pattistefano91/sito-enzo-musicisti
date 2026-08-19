'use client'

import Image from 'next/image'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import { Container, Divider } from '@/components/ui'
import { RIFERIMENTI_TEXT } from '@/data/about'

interface FadeProps {
  initial: TargetAndTransition
  animate: TargetAndTransition
  transition: Transition
}

function fadeUp(delay = 0): FadeProps {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
  }
}

const PHOTOS = [
  { src: '/images/ref-albano.png', alt: 'Al Bano Carrisi' },
  { src: '/images/ref-chiara.jpg', alt: 'Chiara Galiazzo' },
  { src: '/images/ref-gian.png', alt: 'Collaborazione live' },
  { src: '/images/ref-mosca.png', alt: 'Live in Russia' },
]

export function RiferimentiSection() {
  return (
    <section id="i-miei-riferimenti" className="py-24 bg-[var(--color-surface-page)]">
      <Container>

        {/* Header */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.65, ease: 'easeOut' as const }}
          className="mb-14"
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-primary)]">
            I miei riferimenti
          </span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] mt-2 leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            COLLABORAZIONI
          </h2>
          <Divider className="mt-4 w-12 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Griglia foto */}
          <div className="grid grid-cols-2 gap-4">
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.src}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const }}
                className="aspect-square rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)] relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={85}
                  className="object-cover object-center"
                />
              </motion.div>
            ))}
          </div>

          {/* Testo */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' as const }}
            className="flex flex-col gap-8 justify-center"
          >
            <div className="flex flex-col gap-4">
              {RIFERIMENTI_TEXT.map((p, i) => (
                <p key={i} className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Nomi collaboratori */}
            <div className="border-t border-[var(--color-border)] pt-6">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
                Ha collaborato con
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Al Bano Carrisi',
                  'Chiara Galiazzo',
                  'Umberto Smaila',
                  'Rudy Smaila',
                  'Elisabetta Eneh',
                  'Federico Poggipollini',
                  'Max Cottafavi',
                ].map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full border border-[var(--color-border)] text-[0.7rem] text-[var(--color-text-muted)] tracking-wide"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
