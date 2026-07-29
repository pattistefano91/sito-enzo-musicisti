'use client'

import { motion } from 'framer-motion'
import { Container, Badge, Divider } from '@/components/ui'
import { UPCOMING_CONCERTS, PAST_COLLABORATIONS, TOUR_STATS } from '@/data/concerts'

export function ConcertsSection() {
  return (
    <section id="concerti" className="py-24 bg-[var(--color-surface-page)]">
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
            Live
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">
            TOUR &amp; CONCERTI
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        {/* Tour stats */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
          className="grid grid-cols-3 gap-6 mb-16 py-8 border-y border-[var(--color-border)]"
        >
          {[
            { value: TOUR_STATS.countries, label: 'Paesi' },
            { value: TOUR_STATS.shows, label: 'Concerti' },
            { value: TOUR_STATS.continents, label: 'Continenti' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-heading-1 text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </span>
              <span className="text-label text-xs text-[var(--color-text-muted)]">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Prossimi concerti */}
          <div>
            <motion.h3
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-heading-3 text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              PROSSIME DATE
            </motion.h3>
            <div className="flex flex-col gap-4">
              {UPCOMING_CONCERTS.map((concert, i) => (
                <motion.div
                  key={concert.id}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="flex items-center gap-4 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors"
                >
                  <span className="text-2xl">{concert.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-label text-sm text-[var(--color-text-primary)] truncate">{concert.artist}</p>
                    <p className="text-caption">{concert.venue} — {concert.city}</p>
                  </div>
                  <Badge variant="neutral">{concert.date}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Collaborazioni passate */}
          <div>
            <motion.h3
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-heading-3 text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              COLLABORAZIONI
            </motion.h3>
            <div className="flex flex-col gap-4">
              {PAST_COLLABORATIONS.map((collab, i) => (
                <motion.div
                  key={collab.artist}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="flex items-start gap-4 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface-card)] border border-[var(--color-border)]"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <p className="text-label text-sm text-[var(--color-text-primary)]">{collab.artist}</p>
                    <p className="text-caption">{collab.description}</p>
                    <p className="text-caption text-[var(--color-primary)]">{collab.years}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
