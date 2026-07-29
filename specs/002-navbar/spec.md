# Feature Specification: Navbar

**Feature Branch**: `002-navbar`

**Created**: 2026-07-29

**Status**: Draft

## Contesto

Navbar sticky dark per il sito di Enzo Boscarino, batterista Rock/Pop. Deve contenere logo/nome, voci di menu e CTA. Su mobile diventa hamburger menu.

## User Scenarios & Testing

### User Story 1 — Navigazione desktop (Priority: P1)

Un visitatore da desktop vede la navbar in cima, riconosce il nome/logo di Enzo e può navigare alle sezioni principali.

**Acceptance Scenarios**:

1. **Given** la pagina è caricata, **When** il visitatore guarda in alto, **Then** vede navbar con nome Enzo e voci di menu
2. **Given** scroll verso il basso, **When** si scorre, **Then** la navbar rimane visibile (sticky) con sfondo leggermente opaco

### User Story 2 — Navigazione mobile (Priority: P1)

Un visitatore da smartphone tocca l'hamburger e vede il menu a comparsa.

**Acceptance Scenarios**:

1. **Given** schermo mobile, **When** si carica la pagina, **Then** le voci di menu sono nascoste e visibile solo logo + hamburger
2. **Given** hamburger cliccato, **When** si apre il menu, **Then** voci cliccabili e menu si chiude al click su voce

## Requirements

### Functional Requirements

- **FR-001**: Navbar DEVE essere sticky (position fixed in cima)
- **FR-002**: Su mobile (<768px) DEVE mostrare hamburger, nascondere voci
- **FR-003**: Logo/nome cliccabile → torna in cima (href="#" o "/")
- **FR-004**: CTA "Contattami" o "Prenota" visibile sempre (anche mobile)
- **FR-005**: Active state sulla voce corrente
- **FR-006**: Sfondo semi-trasparente con blur quando si scrolla

### Voci di menu

- Chi sono
- Servizi
- Concerti / Eventi
- Contatti

## Success Criteria

- **SC-001**: Navbar visibile e sticky su desktop e mobile
- **SC-002**: Hamburger funzionante su mobile
- **SC-003**: `npx tsc --noEmit` passa senza errori
