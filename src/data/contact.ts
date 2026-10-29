export const CONTACT = {
  email: 'enzoboscarinodrummer@gmail.com',
  phone: '+39 329 543 2713',
  studio: {
    name: 'EB Studio',
    address: 'Quartiere Madonnina, Casalmaiocco (LO)',
    note: 'a 15 minuti da Milano',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Quartiere+Madonnina+Casalmaiocco+LO',
  },
} as const

const WHATSAPP_MESSAGE =
  'Ciao Enzo, ho visto il tuo sito e vorrei avere maggiori informazioni sulle lezioni di batteria o sulla consulenza online. Grazie!'

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
