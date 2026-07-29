@AGENTS.md

# ENZO — Sito Musicista Rock/Pop

Sito per Enzo, musicista e insegnante Rock/Pop. Stack: Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, Framer Motion 12.

## Stack tecnologico

- **Framework**: Next.js 16 (App Router), TypeScript strict + noUncheckedIndexedAccess, Node.js 20 LTS
- **Styling**: Tailwind CSS v4 (`@theme` CSS-first, no tailwind.config.js), clsx + tailwind-merge
- **Animazioni**: Framer Motion 12
- **Font**: Da definire nella spec 001

## Spec-Driven Development

Le feature si implementano sempre seguendo una spec in `specs/`. Il flusso è:
1. Definire spec in `specs/NNN-nome/spec.md`
2. Implementare step by step seguendo i task in `specs/NNN-nome/tasks.md`
3. Aggiornare questo CLAUDE.md con le tecnologie e struttura usate

## Struttura progetto

```
src/
├── app/
│   ├── globals.css     ← @theme Tailwind v4: design token
│   ├── layout.tsx      ← Root layout: font, Navbar, Footer
│   └── page.tsx        ← Homepage Hero
├── components/
│   ├── ui/             ← Componenti base (Button, Card, Container…)
│   ├── sections/       ← Sezioni pagina (Navbar, Hero, Footer…)
│   └── shapes/         ← Elementi decorativi SVG
└── data/               ← Dati statici tipizzati
specs/
└── 001-design-system/  ← Prima spec: palette, font, token
spec-kit/               ← Framework spec-driven (riferimento)
```

## Comandi

```bash
npm run dev      # dev server http://localhost:3000
npm run build    # build produzione
npm run lint     # ESLint
npx tsc --noEmit # type check
```

## Design System (da spec 001)

- Stile: Rock/Pop moderno, energico, dark-first
- Palette, font e token definiti in specs/001-design-system/contracts/design-tokens.md
