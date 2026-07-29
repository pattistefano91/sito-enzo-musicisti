export interface Lesson {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
}

export interface StudioInfo {
  name: string
  address: string
  city: string
  note: string
}

export const LESSONS: Lesson[] = [
  {
    id: 'principianti',
    title: 'Principianti',
    description: 'Per chi muove i primi passi. Postura, coordinazione, rudimenti e ritmi base nel Rock/Pop.',
    details: ['Lezioni da 45 o 60 min', 'Studio privato attrezzato', 'Materiale didattico incluso'],
    icon: '🥁',
  },
  {
    id: 'intermedio',
    title: 'Livello Intermedio',
    description: 'Per batteristi già avviati che vogliono consolidare tecnica, groove e dinamiche.',
    details: ['Analisi dei propri punti deboli', 'Studio di playback e metronomia', 'Repertorio Rock/Pop'],
    icon: '🎵',
  },
  {
    id: 'avanzato',
    title: 'Avanzato / Pro',
    description: 'Per musicisti che vogliono raggiungere un livello professionale — tecnica, band playing, studio.',
    details: ['Preparazione concerti e audizioni', 'Session drumming e registrazioni', 'Mentoring carriera'],
    icon: '⚡',
  },
  {
    id: 'online',
    title: 'Lezioni Online',
    description: 'La stessa qualità del live, ovunque tu sia. Via Zoom o Google Meet.',
    details: ['Flessibilità oraria', 'Registrazione lezioni disponibile', 'Per allievi in tutta Italia'],
    icon: '🌐',
  },
]

export const STUDIO: StudioInfo = {
  name: 'Studio Boscarino',
  address: '[Indirizzo da aggiornare]',
  city: '[Città da aggiornare]',
  note: 'Parcheggio disponibile. Batteria acustica e elettronica a disposizione.',
}
