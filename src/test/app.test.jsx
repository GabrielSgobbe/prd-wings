import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';
import { products } from '../data/products.js';

describe('App', () => {
  it('renderiza sem quebrar e mostra o catálogo completo', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText(products[0].name)).toBeInTheDocument();
  });

  it('filtro de categoria limita os produtos exibidos', () => {
    const { container } = render(<App />);
    const filtros = within(container.querySelector('.filter-bar'));
    fireEvent.click(filtros.getByRole('button', { name: 'Creality' }));
    const grade = within(container.querySelector('.product-grid'));
    expect(grade.queryByText('Bambu Lab A1 Combo')).not.toBeInTheDocument();
    expect(grade.getByText('Creality K1 Max')).toBeInTheDocument();
  });
});
