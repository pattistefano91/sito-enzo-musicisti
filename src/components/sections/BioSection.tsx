'use client'

import Image from 'next/image'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import { Container, Divider } from '@/components/ui'

interface BioSectionProps {
  id: string
  eyebrow: string
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  imageAspect?: string
  imagePosition?: 'left' | 'right'
  dark?: boolean
  children?: React.ReactNode
}

interface FadeProps {
  initial: TargetAndTransition
  animate: TargetAndTransition
  transition: Transition
}

function fadeX(direction: 'left' | 'right', delay = 0): FadeProps {
  return {
    initial: { opacity: 0, x: direction === 'left' ? -40 : 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  }
}

export function BioSection({
  id,
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageAspect = 'aspect-[3/4]',
  imagePosition = 'left',
  dark = false,
  children,
}: BioSectionProps) {
  const bg = dark
    ? 'bg-[var(--color-surface-card)]'
    : 'bg-[var(--color-surface-page)]'

  const imageEl = (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: imagePosition === 'left' ? -40 : 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' as const }}
      className="relative"
    >
      <div className={`${imageAspect} rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)] relative`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={90}
          className="object-cover object-center"
        />
      </div>
      <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[var(--color-primary)]/20 rounded-[var(--radius-lg)] -z-10" />
    </motion.div>
  )

  const textEl = (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: imagePosition === 'left' ? 40 : -40 }}
      transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' as const }}
      className="flex flex-col gap-6"
    >
      <div>
        <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-primary)]">
          {eyebrow}
        </span>
        <h2
          className="text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] mt-2 leading-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <Divider className="mt-4 w-12 border-[var(--color-primary)] border-t-2" />
      </div>
      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {children}
    </motion.div>
  )

  return (
    <section id={id} className={`py-24 ${bg}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageEl}
              {textEl}
            </>
          ) : (
            <>
              {textEl}
              {imageEl}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
