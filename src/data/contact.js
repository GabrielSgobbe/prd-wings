export const contact = {
  company: 'Wings 3D',
  whatsapp: '5516996029770',
  whatsappDisplay: '(16) 99602-9770',
  whatsappMessage:
    'Olá, vim pelo site da Wings 3D e gostaria de saber mais sobre os produtos e serviços.',
  email: 'winngs3d@gmail.com',
  instagram: 'https://www.instagram.com/wings3d_/',
  instagramDisplay: '@wings3d_',
};

export function getWhatsAppUrl(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
