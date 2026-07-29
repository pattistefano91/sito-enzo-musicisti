# Feature Specification: Design System

**Feature Branch**: `001-design-system`

**Created**: 2026-07-29

**Status**: Draft

## Contesto

Enzo è un musicista e insegnante di musica Rock/Pop. Il sito deve comunicare energia, modernità e professionalità. Stile dark-first, con accenti vivaci.

## User Scenarios & Testing

### User Story 1 — Visitatore scopre il sito (Priority: P1)

Un fan o potenziale allievo apre il sito da mobile e percepisce immediatamente l'identità di Enzo come musicista rock/pop serio e professionale.

**Acceptance Scenarios**:

1. **Given** la homepage è aperta, **When** il visitatore la vede, **Then** vede un'identità visiva coerente (colori, font, stile) che comunica rock/pop professionale
2. **Given** uno schermo mobile, **When** il visitatore scorre, **Then** testo e bottoni sono leggibili e cliccabili con il pollice

### User Story 2 — Coerenza visiva su tutte le sezioni (Priority: P2)

I componenti UI (bottoni, card, badge) seguono un design system unificato.

**Acceptance Scenarios**:

1. **Given** qualsiasi pagina, **When** si vedono bottoni e card, **Then** palette, radius e tipografia sono coerenti
2. **Given** dark mode di sistema, **When** il sito si carica, **Then** l'interfaccia è dark-first senza flash di luce

## Requirements

### Functional Requirements

- **FR-001**: Il design system DEVE usare Tailwind CSS v4 con `@theme` CSS-first (no `tailwind.config.js`)
- **FR-002**: I font DEVONO essere caricati con `next/font/google` (GDPR compliant, self-hosted)
- **FR-003**: I design token DEVONO essere definiti come variabili CSS in `globals.css`
- **FR-004**: I componenti base DEVONO essere in `src/components/ui/` con barrel export in `index.ts`
- **FR-005**: Il tema DEVE essere dark-first

### Palette (da implementare)

- **Primary** (accento principale): Rosso elettrico `#E63946` — energia, rock
- **Secondary** (accento caldo): Arancio ambra `#F4A261` — calore, creatività
- **Surface dark**: `#0D0D0D` — sfondo principale
- **Surface card**: `#1A1A1A` — card e sezioni
- **Surface elevated**: `#242424` — elementi elevati
- **Text primary**: `#F5F5F5` — testo principale
- **Text muted**: `#9CA3AF` — testo secondario

### Font (da implementare)

- **Display**: Bebas Neue — titoli, impatto visivo rock
- **Body**: Inter — leggibilità corpo testo

### Componenti da creare

- `Button` — primary / secondary / ghost, loading state
- `Card` — default / elevated / accent
- `Container` — layout wrapper centrato responsive
- `Badge` — pill con varianti
- `Divider` — separatore

## Success Criteria

- **SC-001**: `npm run build` e `npx tsc --noEmit` passano senza errori
- **SC-002**: Tutti i componenti UI sono esportati da `@/components/ui`
- **SC-003**: Design token documentati in `specs/001-design-system/contracts/design-tokens.md`
- **SC-004**: Dev server mostra homepage dark con palette e font corretti
