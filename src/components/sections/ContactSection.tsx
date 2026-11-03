'use client'

import { motion } from 'framer-motion'
import { Container, Divider } from '@/components/ui'
import { CONTACT, MAILTO_URL, WHATSAPP_URL } from '@/data/contact'
import { SOCIALS } from './SocialLinks'

export function ContactSection() {
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

          {/* Scrivimi */}
          <motion.div
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="flex flex-col items-start gap-6"
          >
            <h3 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              PRENOTA UNA LEZIONE O UNA CONSULENZA
            </h3>
            <p className="text-body-md text-[var(--color-text-muted)] max-w-md">
              Lezione privata o consulenza online: scrivimi su WhatsApp o via email, il messaggio è già
              pronto, ti basta inviarlo. Ti rispondo il prima possibile.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 rounded-pill font-body font-medium text-base text-label tracking-widest transition-colors bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-hover)]"
              >
                Scrivimi su WhatsApp
              </a>
              <a
                href={MAILTO_URL}
                className="inline-flex items-center justify-center h-14 px-8 rounded-pill font-body font-medium text-base text-label tracking-widest transition-colors border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
              >
                Scrivimi una email
              </a>
            </div>
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
                { icon: '✉️', label: 'Email', value: CONTACT.email, href: MAILTO_URL },
                { icon: '💬', label: 'WhatsApp', value: CONTACT.phone, href: WHATSAPP_URL },
                { icon: '📞', label: 'Telefono', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-pill border border-[var(--color-border)] text-label text-xs text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {s.icon}
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
                {CONTACT.studio.note}
              </p>
              <a
                href={CONTACT.studio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
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
