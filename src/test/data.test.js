import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { categories, products } from '../data/products.js';
import { inspirations } from '../data/inspirations.js';
import { contact, getWhatsAppUrl } from '../data/contact.js';

const publicFile = (path) => existsSync(`public${path}`);

describe('dados do catálogo', () => {
  it('produtos têm ids únicos e campos obrigatórios', () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of products) {
      expect(p.name, p.id).toBeTruthy();
      expect(p.description, p.id).toBeTruthy();
    }
  });

  it('toda categoria de produto existe na lista de filtros', () => {
    for (const p of products) expect(categories, p.id).toContain(p.category);
  });

  it('imagens de produtos e inspirações existem em public/', () => {
    for (const p of products) expect(publicFile(p.image), p.image).toBe(true);
    for (const i of inspirations) expect(publicFile(i.image), i.image).toBe(true);
  });
});

describe('contato', () => {
  it('link do WhatsApp aponta para o número da loja com a mensagem', () => {
    const url = getWhatsAppUrl();
    expect(url).toContain(`https://wa.me/${contact.whatsapp}?text=`);
    expect(url).toContain(encodeURIComponent(contact.whatsappMessage));
  });
});
