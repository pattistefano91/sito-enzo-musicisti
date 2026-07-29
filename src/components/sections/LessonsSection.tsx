'use client'

import { motion } from 'framer-motion'
import { Container, Card, Button, Divider } from '@/components/ui'
import { LESSONS, STUDIO } from '@/data/lessons'

export function LessonsSection() {
  return (
    <section id="lezioni" className="py-24 bg-[var(--color-surface-card)]">
      <Container>

        {/* Header */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16"
        >
          <span className="text-label text-[var(--color-primary)] text-xs tracking-widest">
            Lezioni
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">
            IMPARA LA BATTERIA
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
          <p className="text-body-lg text-[var(--color-text-muted)] mt-6 max-w-2xl">
            Lezioni individuali nello studio privato di Enzo, pensate per ogni livello.
            Approccio diretto, pratico e orientato al suonare dal vivo.
          </p>
        </motion.div>

        {/* Cards lezioni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LESSONS.map((lesson, i) => (
            <motion.div
              key={lesson.id}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
            >
              <Card variant="default" className="h-full flex flex-col gap-4 hover:border-[var(--color-primary)]/40 transition-colors">
                <span className="text-3xl">{lesson.icon}</span>
                <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {lesson.title}
                </h3>
                <p className="text-body-md text-[var(--color-text-muted)] flex-1">
                  {lesson.description}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {lesson.details.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                      <span className="text-caption">{d}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Studio info + CTA */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 rounded-[var(--radius-lg)] border border-[var(--color-primary)]/20 bg-[var(--color-surface-elevated)]"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              {STUDIO.name}
            </h3>
            <p className="text-body-md text-[var(--color-text-muted)]">{STUDIO.address} — {STUDIO.city}</p>
            <p className="text-caption">{STUDIO.note}</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Prenota una lezione
          </Button>
        </motion.div>

      </Container>
    </section>
  )
}
