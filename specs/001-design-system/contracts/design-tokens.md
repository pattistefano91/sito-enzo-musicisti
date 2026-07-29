# Design Tokens — Enzo Rock/Pop

## Palette

| Token | Valore | Uso |
|---|---|---|
| `--color-primary` | `#E63946` | CTA, accenti principali, hover |
| `--color-secondary` | `#F4A261` | Accenti caldi, badge, highlights |
| `--color-surface-page` | `#0D0D0D` | Sfondo pagina |
| `--color-surface-card` | `#1A1A1A` | Sfondo card |
| `--color-surface-elevated` | `#242424` | Navbar, elementi elevati |
| `--color-text-primary` | `#F5F5F5` | Testo principale |
| `--color-text-muted` | `#9CA3AF` | Testo secondario, caption |
| `--color-border` | `#2E2E2E` | Bordi sottili |

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
