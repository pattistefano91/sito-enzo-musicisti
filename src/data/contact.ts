export const CONTACT = {
  email: 'enzoboscarinodrummer@gmail.com',
  phone: '+39 329 543 2713',
  studio: {
    name: 'EB Studio',
    address: 'Quartiere Madonnina, Casalmaiocco (LO)',
    note: 'a 10 minuti da Milano',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Quartiere+Madonnina+Casalmaiocco+LO',
  },
} as const

const WHATSAPP_MESSAGE =
  'Ciao Enzo, ho visto il tuo sito e vorrei avere maggiori informazioni sulle lezioni di batteria o sulla consulenza online. Grazie!'

const EMAIL_SUBJECT = 'Richiesta informazioni lezioni di batteria'
const EMAIL_BODY =
  'Ciao Enzo,\n\nho visto il tuo sito e vorrei avere maggiori informazioni sulle lezioni di batteria o sulla consulenza online.\n\nNome:\nLivello / obiettivi:\n\nGrazie!'

export const MAILTO_URL = `mailto:${CONTACT.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`

export const WHATSAPP_URL =`https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Dati legali mostrati nel footer e nella pagina Privacy
export const LEGAL = {
  fiscalCode: 'BSCVCN89A19I754W',
  billingEntity: 'FeaTuring S.r.l.',
} as const
