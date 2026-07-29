export interface Concert {
  id: string
  date: string
  venue: string
  city: string
  country: string
  artist: string
  flag: string
  ticketUrl?: string
}

export interface PastCollaboration {
  artist: string
  description: string
  years: string
}

export const UPCOMING_CONCERTS: Concert[] = [
  {
    id: 'c1',
    date: '[Data da aggiornare]',
    venue: '[Venue da aggiornare]',
    city: '[Città]',
    country: 'Italia',
    artist: '[Artista / Band]',
    flag: '🇮🇹',
  },
  {
    id: 'c2',
    date: '[Data da aggiornare]',
    venue: '[Venue da aggiornare]',
    city: '[Città]',
    country: 'Germania',
    artist: '[Artista / Band]',
    flag: '🇩🇪',
  },
  {
    id: 'c3',
    date: '[Data da aggiornare]',
    venue: '[Venue da aggiornare]',
    city: '[Città]',
    country: 'UK',
    artist: '[Artista / Band]',
    flag: '🇬🇧',
  },
]

export const PAST_COLLABORATIONS: PastCollaboration[] = [
  {
    artist: '[Artista 1 da aggiornare]',
    description: 'Tour europeo, [N] date in [N] paesi',
    years: '[Anno]',
  },
  {
    artist: '[Artista 2 da aggiornare]',
    description: 'Registrazione album + tour nazionale',
    years: '[Anno]',
  },
  {
    artist: '[Artista 3 da aggiornare]',
    description: 'Session drummer — EP e live',
    years: '[Anno]',
  },
  {
    artist: '[Artista 4 da aggiornare]',
    description: 'Tour mondiale, [N]+ date',
    years: '[Anno]',
  },
]

export const TOUR_STATS = {
  countries: '[N]+',
  shows: '[N]+',
  continents: '[N]',
}
