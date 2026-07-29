export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Concerti', href: '#concerti' },
  { label: 'Contatti', href: '#contatti' },
]

export const ARTIST = {
  firstName: 'ENZO',
  lastName: 'BOSCARINO',
  role: 'Batterista',
} as const
