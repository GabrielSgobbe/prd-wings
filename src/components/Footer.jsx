import { contact } from '../data/contact.js';

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Wings 3D</span>
      <span>Catálogo digital sem venda online.</span>
      <a href={contact.instagram} target="_blank" rel="noreferrer">
        {contact.instagramDisplay}
      </a>
    </footer>
  );
}
