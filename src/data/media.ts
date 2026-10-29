export interface MediaVideo {
  id: string
  title: string
  youtubeId: string
  start?: number // secondi
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
    title: 'Footsteps in the Dark — Jarrod Lawson',
    youtubeId: '6sGI1aWtNV8',
    description: 'Enzo Boscarino',
  },
  {
    id: 'v2',
    title: 'S-Quantized Heart — Ludwig Neusonic',
    youtubeId: 'v1TVT6LpZL8',
    description: 'Enzo Boscarino & Ludwig Neusonic',
  },
  {
    id: 'v3',
    title: 'Concerto con Al Bano Carrisi',
    youtubeId: 'gzWb0NLB0ZM',
    start: 3522,
    description: 'Festa San Francesco da Paola, lungomare — 28/4/2025',
  },
  {
    id: 'v4',
    title: 'On and On — Ole Børud',
    youtubeId: '6WzIvEOo27k',
    description: 'Drum cover — Enzo Boscarino',
  },
]

export const PHOTOS: MediaPhoto[] = [
  {
    id: 'p1',
    src: '/images/foto/studio-01.jpg',
    alt: 'Regia dello studio — EB Studio',
    caption: 'Regia — monitor e console',
  },
  {
    id: 'p2',
    src: '/images/foto/studio-02.jpg',
    alt: 'Regia e sala di registrazione — EB Studio',
    caption: 'Regia con vista sulla sala',
  },
  {
    id: 'p3',
    src: '/images/foto/studio-03.jpg',
    alt: 'Regia dello studio — EB Studio',
    caption: 'Postazione di mix',
  },
  {
    id: 'p4',
    src: '/images/foto/studio-04.jpg',
    alt: 'Regia dello studio — EB Studio',
    caption: 'Regia — console e monitor',
  },
  {
    id: 'p5',
    src: '/images/foto/studio-05.jpg',
    alt: 'Regia dello studio — EB Studio',
    caption: 'Regia',
  },
  {
    id: 'p6',
    src: '/images/foto/studio-06.jpg',
    alt: 'Regia dello studio — EB Studio',
    caption: 'Regia — pannelli acustici EB',
  },
  {
    id: 'p7',
    src: '/images/foto/studio-07.jpg',
    alt: 'Regia e sala di registrazione — EB Studio',
    caption: 'Regia con vetrata sulla sala',
  },
  {
    id: 'p8',
    src: '/images/foto/studio-08.jpg',
    alt: 'Area relax dello studio — EB Studio',
    caption: 'Area relax con vista sulla sala batteria',
  },
  {
    id: 'p9',
    src: '/images/foto/studio-09.jpg',
    alt: 'Area relax dello studio — EB Studio',
    caption: 'Area relax',
  },
  {
    id: 'p10',
    src: '/images/foto/studio-10.jpg',
    alt: 'Batteria e piatti — EB Studio',
    caption: 'Sala batteria — dettaglio',
  },
  {
    id: 'p11',
    src: '/images/foto/studio-11.jpg',
    alt: 'Sala batteria — EB Studio',
    caption: 'Sala batteria — Ludwig',
  },
  {
    id: 'p12',
    src: '/images/foto/studio-12.jpg',
    alt: 'Sala batteria — EB Studio',
    caption: 'Sala di registrazione batteria',
  },
]
