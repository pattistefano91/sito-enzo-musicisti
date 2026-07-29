import { Container } from '@/components/ui'
import { ARTIST } from '@/data/navigation'
import { CONTACT } from '@/data/contact'

export function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--color-border)] bg-[var(--color-surface-page)]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-heading-3 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[var(--color-text-primary)]">{ARTIST.firstName} </span>
            <span className="text-[var(--color-primary)]">{ARTIST.lastName}</span>
          </span>
          <p className="text-caption text-center">
            © {new Date().getFullYear()} Enzo Boscarino — Tutti i diritti riservati
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-caption text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>
      </Container>
    </footer>
  )
}
