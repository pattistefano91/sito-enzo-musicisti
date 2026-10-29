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
    src: '/images/foto/studio-01.jpg',
    alt: 'Regia dello studio — Studio Boscarino',
    caption: 'Regia — monitor e console',
  },
  {
    id: 'p2',
    src: '/images/foto/studio-02.jpg',
    alt: 'Regia e sala di registrazione — Studio Boscarino',
    caption: 'Regia con vista sulla sala',
  },
  {
    id: 'p3',
    src: '/images/foto/studio-03.jpg',
    alt: 'Regia dello studio — Studio Boscarino',
    caption: 'Postazione di mix',
  },
  {
    id: 'p4',
    src: '/images/foto/studio-04.jpg',
    alt: 'Regia dello studio — Studio Boscarino',
    caption: 'Regia — console e monitor',
  },
  {
    id: 'p5',
    src: '/images/foto/studio-05.jpg',
    alt: 'Regia dello studio — Studio Boscarino',
    caption: 'Regia',
  },
  {
    id: 'p6',
    src: '/images/foto/studio-06.jpg',
    alt: 'Regia dello studio — Studio Boscarino',
    caption: 'Regia — pannelli acustici EB',
  },
  {
    id: 'p7',
    src: '/images/foto/studio-07.jpg',
    alt: 'Regia e sala di registrazione — Studio Boscarino',
    caption: 'Regia con vetrata sulla sala',
  },
  {
    id: 'p8',
    src: '/images/foto/studio-08.jpg',
    alt: 'Area relax dello studio — Studio Boscarino',
    caption: 'Area relax con vista sulla sala batteria',
  },
  {
    id: 'p9',
    src: '/images/foto/studio-09.jpg',
    alt: 'Area relax dello studio — Studio Boscarino',
    caption: 'Area relax',
  },
  {
    id: 'p10',
    src: '/images/foto/studio-10.jpg',
    alt: 'Batteria e piatti — Studio Boscarino',
    caption: 'Sala batteria — dettaglio',
  },
  {
    id: 'p11',
    src: '/images/foto/studio-11.jpg',
    alt: 'Sala batteria — Studio Boscarino',
    caption: 'Sala batteria — Ludwig',
  },
  {
    id: 'p12',
    src: '/images/foto/studio-12.jpg',
    alt: 'Sala batteria — Studio Boscarino',
    caption: 'Sala di registrazione batteria',
  },
]
