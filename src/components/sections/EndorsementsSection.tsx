'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { ENDORSEMENTS } from '@/data/about'

export function EndorsementsSection() {
  return (
    <div className="absolute top-16 inset-x-0 z-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="flex flex-col items-start gap-2 pt-3"
        >
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
            Endorsements
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-8">
            {ENDORSEMENTS.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={brand.name}
                className="relative block w-[4.25rem] h-9 sm:w-24 sm:h-11 opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  unoptimized={brand.logo.endsWith('.svg')}
                  className="object-contain object-left"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
