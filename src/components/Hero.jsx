import { ArrowRight, Printer, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact.js';

export function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Catálogo digital de impressão 3D</p>
        <h1>Impressoras, produtos e serviços para imprimir melhor.</h1>
        <p className="hero-description">
          A Wings 3D oferece impressoras 3D, produtos, suporte e serviços especializados para quem quer
          produzir mais e transformar ideias em peças reais.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#catalogo">
            Ver catálogo
            <ArrowRight size={18} />
          </a>
          <a className="button button-secondary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Destaques da Wings 3D">
        <img src="/wings3d-logo.png" alt="" className="hero-logo" />
        <div className="hero-feature">
          <Printer size={22} />
          <span>Impressoras Bambu Lab e Creality</span>
        </div>
        <div className="hero-feature">
          <Sparkles size={22} />
          <span>Impressão, modelagem e consultoria</span>
        </div>
        <div className="hero-feature">
          <ShieldCheck size={22} />
          <span>Suporte técnico e manutenção</span>
        </div>
      </div>
    </section>
  );
}
