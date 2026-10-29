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

// I 4 video più visti del canale https://www.youtube.com/@EnzoBoscarino (ottobre 2026)
export const VIDEOS: MediaVideo[] = [
  {
    id: 'v1',
    title: 'Laurea in Batteria — Conservatorio Verdi Milano',
    youtubeId: 'JxCghXOhpVg',
    description: 'Recital dedicato a Pino Daniele — 66K visualizzazioni',
  },
  {
    id: 'v2',
    title: 'Un amore da favola — Lucrezia Germano',
    youtubeId: '1FPxChmUNm8',
    description: 'Lucrezia Germano ed Enzo Boscarino — 3,3K visualizzazioni',
  },
  {
    id: 'v3',
    title: 'SixPack Groove',
    youtubeId: 'guvuM3LJttk',
    description: 'Enzo Boscarino — 3,1K visualizzazioni',
  },
  {
    id: 'v4',
    title: 'Nessun Rimpianto — Live with Maxmania',
    youtubeId: 'IIE_wbVNhBQ',
    description: 'Enzo Boscarino live — 2,7K visualizzazioni',
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
