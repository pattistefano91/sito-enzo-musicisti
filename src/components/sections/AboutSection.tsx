'use client'

import { motion, type Transition, type TargetAndTransition } from 'framer-motion'
import { Container, Divider } from '@/components/ui'
import { ABOUT } from '@/data/about'

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

export function AboutSection() {
  return (
    <section id="chi-sono" className="py-24 bg-[var(--color-surface-card)]">
      <Container>

        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          viewport={{ once: true }}
          whileInView={fadeUp(0).animate}
          initial={fadeUp(0).initial}
          animate={undefined}
          className="mb-16"
        >
          <span className="text-label text-[var(--color-primary)] text-xs tracking-widest">
            Chi sono
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">
            ENZO BOSCARINO
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Foto */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)]">
              {/* Placeholder foto — sostituire con <Image> reale */}
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${ABOUT.photoPlaceholder}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Accent border decorativo */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[var(--color-primary)]/30 rounded-[var(--radius-lg)] -z-10" />
          </motion.div>

          {/* Testo + stats + credenziali */}
          <div className="flex flex-col gap-8">

            {/* Bio */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' as const }}
              className="flex flex-col gap-4"
            >
              {ABOUT.bio.map((paragraph, i) => (
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
              {ABOUT.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-heading-2 text-[var(--color-primary)] leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-caption text-[var(--color-text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Credenziali */}
            <motion.ul
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' as const }}
              className="flex flex-col gap-3"
            >
              {ABOUT.credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                  <span className="text-body-md text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </motion.ul>

          </div>
        </div>
      </Container>
    </section>
  )
}
