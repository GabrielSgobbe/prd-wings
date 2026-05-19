import { ExternalLink, MessageCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { categories, products } from '../data/products.js';
import { getWhatsAppUrl } from '../data/contact.js';

function ProductImage({ product }) {
  const [hasImageError, setHasImageError] = useState(false);

  if (product.image && !hasImageError) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setHasImageError(true)}
      />
    );
  }

  return (
    <div className="product-fallback" aria-hidden="true">
      <span>{product.brand}</span>
      <strong>{product.name}</strong>
    </div>
  );
}

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'Todos') {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="catalog section-shell" id="catalogo">
      <div className="section-heading">
        <p className="eyebrow">Catálogo</p>
        <h2>Impressoras 3D, materiais e upgrades</h2>
        <p>
          Consulte disponibilidade, orientação de compra e suporte para escolher o equipamento ou produto
          ideal.
        </p>
      </div>

      <div className="filter-bar" aria-label="Filtrar por categoria">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter-button is-active' : 'filter-button'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => {
          const message = `Olá, vim pelo site da Wings 3D e gostaria de consultar disponibilidade sobre: ${product.name}.`;

          return (
            <article className="product-card" key={product.id}>
              <div className="product-media">
                <ProductImage product={product} />
              </div>
              <div className="product-content">
                <div>
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="product-meta">
                  <span>{product.type}</span>
                  <strong>{product.availability}</strong>
                </div>
                <div className="card-actions">
                  <a className="button button-primary" href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                    <MessageCircle size={17} />
                    Consultar
                  </a>
                  {product.sourceUrl ? (
                    <a className="icon-link" href={product.sourceUrl} target="_blank" rel="noreferrer">
                      Oficial
                      <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
