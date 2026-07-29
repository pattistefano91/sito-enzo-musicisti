# Tasks — 001 Design System

## Checkpoint A — Fondamenta (globals.css + font)

- [ ] A1: Sostituire `globals.css` con tema dark-first e `@theme` Tailwind v4
- [ ] A2: Installare e configurare Bebas Neue + Inter via `next/font/google` in `src/lib/fonts.ts`
- [ ] A3: Aggiornare `layout.tsx` con variabili font e sfondo dark
- [ ] A4: Verificare dev server: sfondo nero, font corretti

## Checkpoint B — Componenti UI base

- [ ] B1: Creare `src/components/ui/Container.tsx`
- [ ] B2: Creare `src/components/ui/Button.tsx` (primary/secondary/ghost + loading)
- [ ] B3: Creare `src/components/ui/Card.tsx` (default/elevated/accent)
- [ ] B4: Creare `src/components/ui/Badge.tsx`
- [ ] B5: Creare `src/components/ui/Divider.tsx`
- [ ] B6: Creare `src/components/ui/index.ts` (barrel export)

## Checkpoint C — Homepage placeholder

- [ ] C1: Aggiornare `page.tsx` con Hero placeholder che usa i componenti UI
- [ ] C2: Type check: `npx tsc --noEmit` passa
- [ ] C3: Build: `npm run build` passa

## Checkpoint D — Commit e push

- [ ] D1: Commit con messaggio `feat: 001-design-system`
- [ ] D2: Push su GitHub
