# Design Tokens — Enzo Rock/Pop

## Palette — ispirata Moto Guzzi Stelvio 2026

| Token | Valore | Uso |
|---|---|---|
| `--color-primary` | `#D4FF00` | Giallo fluo — CTA, accenti, highlights |
| `--color-primary-hover` | `#BFEA00` | Stato hover CTA |
| `--color-secondary` | `#A8C900` | Giallo-verde, variante secondaria |
| `--color-surface-page` | `#080808` | Nero profondo — sfondo pagina |
| `--color-surface-card` | `#131313` | Nero card |
| `--color-surface-elevated` | `#2A2A2A` | Grigio antracite — navbar, sezioni elevate |
| `--color-text-primary` | `#F0F0F0` | Bianco freddo — testo principale |
| `--color-text-muted` | `#6B7280` | Grigio medio — testo secondario |
| `--color-border` | `#2A2A2A` | Bordi antracite |

## Tipografia

| Token | Font | Uso |
|---|---|---|
| `--font-display` | Bebas Neue | Titoli H1–H3, hero text |
| `--font-body` | Inter | Corpo testo, UI, label |

### Scale tipografica

| Classe | Font | Size | Weight |
|---|---|---|---|
| `.text-hero` | display | 5rem / 80px | 400 |
| `.text-heading-1` | display | 3.5rem / 56px | 400 |
| `.text-heading-2` | display | 2.5rem / 40px | 400 |
| `.text-heading-3` | display | 1.75rem / 28px | 400 |
| `.text-body-lg` | body | 1.125rem / 18px | 400 |
| `.text-body-md` | body | 1rem / 16px | 400 |
| `.text-label` | body | 0.875rem / 14px | 500 |
| `.text-caption` | body | 0.75rem / 12px | 400 |

## Spaziature

Tailwind v4 usa la scale di default. Token custom:

| Token | Valore |
|---|---|
| `--spacing-section` | `6rem` (96px) — padding sezioni |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `16px` |
| `--radius-pill` | `9999px` |

## Import

```ts
import { Button, Card, Badge, Container, Divider } from '@/components/ui'
```
