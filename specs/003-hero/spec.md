# Feature Specification: Hero

**Feature Branch**: `003-hero`
**Created**: 2026-07-29
**Status**: Draft

## Contesto

Sezione hero fullscreen che introduce Enzo Boscarino. Prima cosa che il visitatore vede — deve comunicare energia, professionalità e il doppio profilo (live touring + insegnante). Foto placeholder fino a materiale reale.

## User Scenarios

### User Story 1 — Impatto immediato (P1)
Un booking agent o un allievo apre il sito e in 3 secondi capisce chi è Enzo e cosa fa.

**Acceptance Scenarios**:
1. **Given** la pagina si carica, **When** il visitatore la vede, **Then** vede foto/immagine di Enzo, nome, ruolo e due CTA chiare
2. **Given** mobile, **When** la hero si carica, **Then** è leggibile senza scroll orizzontale

### User Story 2 — Animazione d'entrata (P2)
Il contenuto entra con una animazione fluida che dà senso di movimento/energia.

## Requirements

- **FR-001**: Foto hero fullscreen con overlay scuro per leggibilità testo
- **FR-002**: Nome "ENZO BOSCARINO" prominente in Bebas Neue
- **FR-003**: Tagline che comunica entrambe le identità (touring + lezioni)
- **FR-004**: Due CTA: "Scopri i concerti" e "Prenota una lezione"
- **FR-005**: Animazione entrata con Framer Motion
- **FR-006**: Scroll indicator animato in basso
- **FR-007**: Placeholder foto fino a materiale reale da cliente
