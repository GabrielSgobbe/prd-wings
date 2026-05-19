import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact.js';

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Wings 3D no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
