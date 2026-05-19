import { ArrowRight, BadgeCheck } from 'lucide-react';
import { services } from '../data/services.js';
import { getWhatsAppUrl } from '../data/contact.js';

export function Services() {
  return (
    <section className="services section-shell" id="servicos">
      <div className="section-heading">
        <p className="eyebrow">Serviços</p>
        <h2>Atendimento especializado para cada etapa</h2>
        <p>
          Da escolha do equipamento ao suporte do dia a dia, a Wings 3D ajuda você a tirar mais resultado
          da impressão 3D.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const message = `Olá, vim pelo site da Wings 3D e gostaria de solicitar orçamento para: ${service.title}.`;

          return (
            <article className="service-card" key={service.title}>
              <BadgeCheck size={24} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                Solicitar orçamento
                <ArrowRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
