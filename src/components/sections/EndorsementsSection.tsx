'use client'

import Image from 'next/image'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import { Container } from '@/components/ui'
import { ENDORSEMENTS } from '@/data/about'

interface FadeProps {
  initial: TargetAndTransition
  animate: TargetAndTransition
  transition: Transition
}

function fadeUp(delay = 0): FadeProps {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' as const },
  }
}

export function EndorsementsSection() {
  return (
    <section className="py-16 bg-[var(--color-surface-page)] border-b border-[var(--color-border)]">
      <Container>

        <motion.p
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="text-center text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-10"
        >
          Endorsements
        </motion.p>

        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {ENDORSEMENTS.map((brand, i) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: 'easeOut' as const }}
              whileHover={{ scale: 1.08 }}
              className="relative flex items-center justify-center w-28 h-14 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              aria-label={brand.name}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </motion.a>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}
