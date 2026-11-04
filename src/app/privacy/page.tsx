import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { CONTACT, VAT_NUMBER } from '@/data/contact'

export const metadata: Metadata = {
  title: 'Privacy — Enzo Boscarino',
  description: 'Informativa sulla privacy del sito di Enzo Boscarino.',
  alternates: { canonical: '/privacy' },
}

const UPDATED = '4 novembre 2026'

export default function PrivacyPage() {
  return (
    <main className="py-24 bg-[var(--color-surface-page)]">
      <Container>
        <div className="max-w-3xl flex flex-col gap-8">
          <div>
            <span className="text-label text-[var(--color-primary)] text-xs tracking-widest">Informativa</span>
            <h1 className="text-heading-1 text-[var(--color-text-primary)] mt-2">PRIVACY</h1>
            <p className="text-caption mt-2">Ultimo aggiornamento: {UPDATED}</p>
          </div>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>TITOLARE DEL TRATTAMENTO</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Enzo Boscarino, {CONTACT.studio.address}
              {VAT_NUMBER && <>, P.IVA {VAT_NUMBER}</>}.
              {' '}Email: <a className="text-[var(--color-primary)] hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>COOKIE E TRACCIAMENTO</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Questo sito non utilizza cookie di profilazione, strumenti di analisi statistica né pixel pubblicitari, e non
              contiene moduli di raccolta dati. Per questo non è presente alcun banner cookie.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>DATI DI NAVIGAZIONE</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Il sito è ospitato da Vercel Inc. Come per ogni servizio web, i server registrano temporaneamente dati tecnici
              (come l&apos;indirizzo IP e l&apos;ora della richiesta) necessari al funzionamento e alla sicurezza del servizio.
              Questi dati non vengono usati per identificare i visitatori.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>VIDEO YOUTUBE</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              I video sono mostrati con un&apos;anteprima salvata sul sito: YouTube (Google) viene contattato solo se premi
              play, e a quel punto si applica l&apos;informativa di Google. Fino ad allora non viene inviato alcun dato
              a terzi.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>CONTATTI</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Se scrivi via email, WhatsApp o telefono, i dati che condividi (nome, recapito, contenuto del messaggio) sono
              usati solo per risponderti e per organizzare lezioni, consulenze o collaborazioni, e conservati per il tempo
              necessario a tale scopo. Il trattamento si basa sulla tua richiesta e sull&apos;esecuzione di misure
              precontrattuali. I dati non vengono ceduti a terzi. Le conversazioni su WhatsApp sono gestite
              da WhatsApp/Meta secondo la loro informativa.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>LINK A SITI ESTERNI</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Il sito contiene link a YouTube, Instagram, Facebook, Spotify, Google Maps, WhatsApp e ai siti dei marchi
              partner. Aprendo questi link lasci il sito, e ciascun servizio tratta i dati secondo la propria informativa.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-heading-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>I TUOI DIRITTI</h2>
            <p className="text-body-md text-[var(--color-text-muted)] leading-relaxed">
              Puoi chiedere in qualsiasi momento accesso, rettifica o cancellazione dei tuoi dati, la limitazione del
              trattamento e l&apos;opposizione, scrivendo a {CONTACT.email}. Hai inoltre il diritto di proporre reclamo al
              Garante per la protezione dei dati personali (garanteprivacy.it).
            </p>
          </section>

          <Link href="/" className="text-label text-xs text-[var(--color-primary)] hover:underline w-fit">← Torna al sito</Link>
        </div>
      </Container>
    </main>
  )
}
