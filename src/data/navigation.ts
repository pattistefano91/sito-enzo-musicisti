export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Cosa insegno', href: '#cosa-insegno' },
  { label: 'Come suono', href: '#come-suono' },
  { label: 'Il mio studio', href: '#il-mio-studio' },
  { label: 'I miei riferimenti', href: '#i-miei-riferimenti' },
  { label: 'Dove mi trovi', href: '#dove-mi-trovi' },
]

export const ARTIST = {
  firstName: 'ENZO',
  lastName: 'BOSCARINO',
  role: 'Batterista',
} as const
