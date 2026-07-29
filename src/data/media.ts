export interface MediaVideo {
  id: string
  title: string
  youtubeId: string
  description: string
}

export interface MediaPhoto {
  id: string
  src: string
  alt: string
  caption: string
}

export const VIDEOS: MediaVideo[] = [
  {
    id: 'v1',
    title: 'Live Session — [Titolo da aggiornare]',
    youtubeId: 'JVGHPgNBz5E', // placeholder — sostituire con video reale di Enzo
    description: 'Estratto live da [venue/evento] — [anno]',
  },
  {
    id: 'v2',
    title: 'Studio Recording — [Titolo da aggiornare]',
    youtubeId: 'YJVmu6yttiw', // placeholder
    description: 'Session in studio per [artista/progetto]',
  },
]

export const PHOTOS: MediaPhoto[] = [
  {
    id: 'p1',
    src: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=800&q=80',
    alt: 'Enzo Boscarino live',
    caption: 'Live @ [Venue] — [Città]',
  },
  {
    id: 'p2',
    src: 'https://images.unsplash.com/photo-1524230616393-e2f6b4c2e1a7?w=800&q=80',
    alt: 'Enzo Boscarino batteria',
    caption: 'Session in studio',
  },
  {
    id: 'p3',
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    alt: 'Enzo Boscarino concerto',
    caption: 'Tour Europa — [Anno]',
  },
  {
    id: 'p4',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    alt: 'Live performance',
    caption: 'Festival [Nome] — [Anno]',
  },
  {
    id: 'p5',
    src: 'https://images.unsplash.com/photo-1468164016595-6108e4c60753?w=800&q=80',
    alt: 'Backstage',
    caption: 'Backstage — [Venue]',
  },
  {
    id: 'p6',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Concerto rock',
    caption: 'Live @ [Venue] — [Anno]',
  },
]
