import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { contact, getWhatsAppUrl } from '../data/contact.js';

export function Contact() {
  return (
    <section className="contact section-shell" id="contato">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Atendimento online para produtos, serviços e orçamento</h2>
          <p>
            Fale com a Wings 3D para consultar disponibilidade, tirar dúvidas ou solicitar suporte. O
            atendimento é online por enquanto.
          </p>
        </div>

        <div className="contact-links">
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={21} />
            <span>{contact.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={21} />
            <span>{contact.email}</span>
          </a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <Instagram size={21} />
            <span>{contact.instagramDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
