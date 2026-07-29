'use client'

import { motion } from 'framer-motion'
import { Container, Button, Card } from '@/components/ui'

const KIT_ITEMS = [
  { icon: '📄', label: 'Bio ufficiale', desc: 'IT / EN — breve e lunga versione', file: '#' },
  { icon: '📸', label: 'Foto HD', desc: 'Live, studio e ritratti — uso stampa/web', file: '#' },
  { icon: '🎚️', label: 'Rider tecnico', desc: 'Specifiche batteria, monitor, PA', file: '#' },
  { icon: '🎵', label: 'Scheda artista', desc: 'Genere, live setup, link social e media', file: '#' },
]

export function PressKitSection() {
  return (
    <section className="py-24 bg-[var(--color-surface-elevated)]">
      <Container>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-12"
        >
          <span className="text-label text-[var(--color-primary)] text-xs tracking-widest">
            Per promoter &amp; organizzatori
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">PRESS KIT</h2>
          <p className="text-body-lg text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto">
            Tutto il materiale necessario per organizzare un concerto o una collaborazione con Enzo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {KIT_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const }}
            >
              <Card variant="elevated" className="flex flex-col gap-3 text-center items-center">
                <span className="text-4xl">{item.icon}</span>
                <p className="text-label text-sm text-[var(--color-text-primary)]">{item.label}</p>
                <p className="text-caption">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' as const }}
          className="flex justify-center"
        >
          {/* Placeholder — collegare a un link reale o generazione PDF */}
          <Button variant="primary" size="lg" onClick={() => alert('PDF in arrivo — materiale da aggiornare')}>
            Scarica Press Kit completo
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
