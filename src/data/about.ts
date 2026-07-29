export interface Stat {
  value: string
  label: string
}

export interface AboutContent {
  bio: string[]
  stats: Stat[]
  credentials: string[]
  photoPlaceholder: string
}

export const ABOUT: AboutContent = {
  bio: [
    'Enzo Boscarino è un batterista professionista con oltre [N] anni di esperienza sul palco e in studio. La sua carriera lo ha portato a suonare in Italia, Europa e in tutto il mondo, collaborando con artisti di fama nazionale e internazionale.',
    'Nato e cresciuto con la musica rock e pop, Enzo ha sviluppato uno stile solido, dinamico e versatile, capace di adattarsi a ogni contesto live — dai club ai grandi festival.',
    'Parallelamente all\'attività concertistica, Enzo insegna batteria nel suo studio privato, trasmettendo la sua esperienza a batteristi di ogni livello, dai principianti ai musicisti già avviati.',
  ],
  stats: [
    { value: '[N]+', label: 'Anni di esperienza' },
    { value: '[N]+', label: 'Paesi in tour' },
    { value: '[N]+', label: 'Allievi formati' },
  ],
  credentials: [
    'Collaborazioni con artisti italiani e internazionali [da aggiornare]',
    'Tour europei e mondiali [da aggiornare]',
    'Registrazioni in studio — album e EP [da aggiornare]',
    'Docente di batteria Rock/Pop — studio privato',
  ],
  photoPlaceholder: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
}
