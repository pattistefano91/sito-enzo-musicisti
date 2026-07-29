'use client'

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

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">

      {/* Foto hero placeholder — sostituire con <Image> reale */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      {/* Overlay gradiente nero */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,8,8,0.93) 45%, rgba(8,8,8,0.45) 100%)',
        }}
      />

      {/* Griglia decorativa */}
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

          <motion.p {...fadeUp(0.4)} className="text-body-lg text-[var(--color-text-muted)] max-w-lg">
            Batterista professionista in tour tra Italia, Europa e mondo.
            Docente di batteria Rock/Pop nel suo studio privato.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('concerti')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Scopri i concerti
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
