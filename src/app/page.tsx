import { Button, Badge, Container } from '@/components/ui'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-1 items-center justify-center min-h-screen py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            <Badge variant="primary">Musicista &amp; Insegnante Rock/Pop</Badge>
            <h1 className="text-hero text-[var(--color-text-primary)]">
              ENZO
            </h1>
            <p className="text-body-lg text-[var(--color-text-muted)] max-w-xl">
              Musicista professionista e insegnante di chitarra Rock/Pop.
              Lezioni private, concerti ed eventi su tutto il territorio.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="lg">Prenota una lezione</Button>
              <Button variant="secondary" size="lg">Scopri di più</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
