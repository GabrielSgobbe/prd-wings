import { ArrowRight } from 'lucide-react';
import { inspirations } from '../data/inspirations.js';
import { getWhatsAppUrl } from '../data/contact.js';

export function Inspiration() {
  return (
    <section className="inspiration section-shell" id="aplicacoes">
      <div className="section-heading">
        <p className="eyebrow">Aplicações</p>
        <h2>Impressão 3D aplicada a ideias reais</h2>
        <p>
          Uma boa impressora 3D não é só equipamento. Ela entra no fluxo de criação, validação, ensino,
          manutenção e produção de peças.
        </p>
      </div>

      <div className="inspiration-layout">
        <article className="inspiration-feature">
          <img src="/inspirations/printcity-models.jpg" alt="Laboratório com impressoras 3D Bambu Lab em operação" />
          <div className="inspiration-feature-copy">
            <span>Do orçamento ao suporte</span>
            <h3>Escolha a solução certa para seu uso.</h3>
            <p>
              A Wings 3D ajuda a escolher impressora, material, acessórios e configuração ideal para cada
              perfil: iniciante, profissional, educacional ou produtivo.
            </p>
            <a
              className="button button-primary"
              href={getWhatsAppUrl('Olá, vim pelo site da Wings 3D e quero ajuda para escolher uma solução de impressão 3D.')}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orientação
              <ArrowRight size={18} />
            </a>
          </div>
        </article>

        <div className="inspiration-grid">
          {inspirations.slice(1).map((item) => (
            <article className="inspiration-card" key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
