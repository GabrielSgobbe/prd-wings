import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Impressoras', href: '#catalogo' },
  { label: 'Produtos', href: '#catalogo' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Wings 3D">
        <span className="brand-mark">
          <img src="/wings3d-logo.png" alt="" />
        </span>
        <span>Wings 3D</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
