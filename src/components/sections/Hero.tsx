'use client'

import Image from 'next/image'
import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import { Button, Badge, Container } from '@/components/ui'

interface FadeProps {
  initial: TargetAndTransition
  animate: TargetAndTransition
  transition: Transition
}

function fadeUp(delay: number): FadeProps {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  }
}

const ROLES = [
  'Professional drummer live and studio rec.',
  'Pop-Rock Production at G.Verdi Milan Conservatory',
  'Drum teacher',
  'Studio engineer',
]

// Placeholder — sostituire con URL reali di Enzo
const SOCIALS = [
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
]

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">

      <Image
        src="/images/hero-bg.jpg"
        alt="Enzo Boscarino alla batteria"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        aria-hidden
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,8,8,0.92) 40%, rgba(8,8,8,0.3) 75%, rgba(8,8,8,0.15) 100%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#D4FF00 1px, transparent 1px), linear-gradient(90deg, #D4FF00 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="flex flex-col items-start gap-6 max-w-2xl">

          <motion.div {...fadeUp(0)}>
            <Badge variant="primary">Batterista &amp; Insegnante Rock/Pop</Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block text-[clamp(3.5rem,10vw,8rem)] text-[var(--color-text-primary)]">
              ENZO
            </span>
            <span className="block text-[clamp(3.5rem,10vw,8rem)] text-[var(--color-primary)]">
              BOSCARINO
            </span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.3)}
            className="w-16 h-1 bg-[var(--color-primary)] rounded-full"
          />

          {/* Ruoli — bullet list */}
          <motion.ul {...fadeUp(0.4)} className="flex flex-col gap-1.5">
            {ROLES.map((role) => (
              <li key={role} className="flex items-center gap-2.5 text-[var(--color-text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span className="text-body-md">{role}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Guarda video
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById('lezioni')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Prenota una lezione
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div {...fadeUp(0.65)} className="flex items-center gap-4 pt-1">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-caption tracking-widest uppercase text-xs text-[var(--color-text-muted)]">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[var(--color-primary)] to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  )
}
