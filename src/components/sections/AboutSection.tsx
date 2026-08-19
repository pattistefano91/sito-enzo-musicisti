'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container, Divider } from '@/components/ui'
import { ABOUT_BIO, ABOUT_STATS } from '@/data/about'


export function AboutSection() {
  return (
    <section id="chi-sono" className="py-24 bg-[var(--color-surface-card)]">
      <Container>

        {/* Header */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.65, ease: 'easeOut' as const }}
          className="mb-16"
        >
          <span className="text-label text-[var(--color-primary)] text-xs tracking-widest uppercase">
            Chi sono
          </span>
          <h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--color-text-primary)] mt-2 leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ENZO BOSCARINO
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Foto Russia hockey arena */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)] relative">
              <Image
                src="/images/enzo-russia.png"
                alt="Enzo Boscarino — Stadio hockey Russia"
                fill
                quality={90}
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[var(--color-primary)]/30 rounded-[var(--radius-lg)] -z-10" />
          </motion.div>

          {/* Testo + stats */}
          <div className="flex flex-col gap-8">

            {/* Bio overview */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' as const }}
              className="flex flex-col gap-4"
            >
              {ABOUT_BIO.map((paragraph, i) => (
                <p key={i} className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
              className="grid grid-cols-3 gap-4 py-6 border-y border-[var(--color-border)]"
            >
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-[clamp(2rem,5vw,3rem)] text-[var(--color-primary)] leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-caption text-[var(--color-text-muted)] text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  )
}
