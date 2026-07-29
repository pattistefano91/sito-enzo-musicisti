'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Button, Divider } from '@/components/ui'
import { CONTACT } from '@/data/contact'

type Reason = 'lezione' | 'booking' | 'altro'

export function ContactSection() {
  const [reason, setReason] = useState<Reason>('lezione')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Placeholder — collegare a servizio reale (Resend, Formspree, ecc.)
    setSent(true)
  }

  return (
    <section id="contatti" className="py-24 bg-[var(--color-surface-card)]">
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
            Contatti
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">
            SCRIVIMI
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
          >
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <span className="text-4xl">✅</span>
                <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                  MESSAGGIO INVIATO
                </h3>
                <p className="text-body-md text-[var(--color-text-muted)]">
                  Grazie per avermi scritto! Ti risponderò al più presto.
                </p>
                <Button variant="ghost" onClick={() => setSent(false)}>Invia un altro messaggio</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Tipo richiesta */}
                <div className="flex gap-2 flex-wrap">
                  {([
                    { id: 'lezione', label: 'Lezione privata' },
                    { id: 'booking', label: 'Booking / Tour' },
                    { id: 'altro', label: 'Altro' },
                  ] as { id: Reason; label: string }[]).map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setReason(r.id)}
                      className={`px-4 py-1.5 rounded-pill text-label text-xs border transition-colors ${
                        reason === r.id
                          ? 'bg-[var(--color-primary)] text-black border-[var(--color-primary)]'
                          : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/50'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    name="nome"
                    placeholder="Nome"
                    className="h-12 rounded-[var(--radius-md)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-4 text-body-md text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                  <input
                    required
                    name="cognome"
                    placeholder="Cognome"
                    className="h-12 rounded-[var(--radius-md)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-4 text-body-md text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-12 rounded-[var(--radius-md)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-4 text-body-md text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
                <textarea
                  required
                  name="messaggio"
                  placeholder="Il tuo messaggio..."
                  rows={5}
                  className="rounded-[var(--radius-md)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-4 py-3 text-body-md text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                />
                <Button type="submit" variant="primary" size="lg" className="self-start">
                  Invia messaggio
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info contatti */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 32 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' as const }}
            className="flex flex-col gap-8"
          >
            {/* Diretti */}
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                CONTATTI DIRETTI
              </h3>
              {[
                { icon: '✉️', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: '📞', label: 'Telefono', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors group"
                >
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-label text-xs text-[var(--color-text-muted)]">{c.label}</p>
                    <p className="text-body-md text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                SOCIAL
              </h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: 'Instagram', value: CONTACT.instagram, href: '#' },
                  { label: 'YouTube', value: CONTACT.youtube, href: '#' },
                  { label: 'Spotify', value: CONTACT.spotify, href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="px-4 py-2 rounded-pill border border-[var(--color-border)] text-label text-xs text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Studio */}
            <div className="flex flex-col gap-3">
              <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                STUDIO
              </h3>
              <p className="text-body-md text-[var(--color-text-muted)]">
                {CONTACT.studio.name}<br />
                {CONTACT.studio.address}<br />
                {CONTACT.studio.city}
              </p>
              <a
                href={CONTACT.studio.mapsUrl}
                className="text-label text-xs text-[var(--color-primary)] hover:underline"
              >
                Apri in Google Maps →
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
