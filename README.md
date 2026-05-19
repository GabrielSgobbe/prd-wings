# Wings 3D - Catálogo Digital

Website responsivo em React + Vite para catálogo digital da Wings 3D, com produtos, serviços e contato via WhatsApp, e-mail e Instagram.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Estrutura principal

- `src/data/products.js`: produtos, categorias, descrições, links oficiais e imagens.
- `src/data/services.js`: serviços exibidos no site.
- `src/data/contact.js`: WhatsApp, e-mail, Instagram e mensagem automática.
- `src/components`: componentes reutilizáveis da interface.
- `public/wings3d-logo.png`: logo otimizada para uso no site.
- `public/products`: imagens locais dos produtos do catálogo.
- `public/inspirations`: imagens editoriais usadas na seção de aplicações.

## Adicionar produto

Edite `src/data/products.js` e adicione um novo objeto no array `products`:

```js
{
  id: 'modelo-exemplo',
  name: 'Nome do produto',
  brand: 'Marca',
  category: 'Creality',
  type: 'Impressora 3D FDM',
  availability: 'Consultar disponibilidade',
  description: 'Descrição curta e comercial do produto.',
  image: 'https://url-da-imagem-oficial.png',
  sourceUrl: 'https://url-oficial-do-produto'
}
```

Se a categoria for nova, adicione também em `categories`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com).
3. Clique em `Add New Project`.
4. Importe o repositório.
5. Framework: `Vite`.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Clique em `Deploy`.

## Observações

O site não possui carrinho, checkout ou pagamento online. Todos os botões de consulta levam o cliente para o WhatsApp da Wings 3D.

As imagens em `public/inspirations` foram baixadas de páginas públicas do blog oficial da Bambu Lab para compor a primeira versão visual do catálogo. Para uso definitivo em produção, confirme se a Wings 3D tem autorização/licença para uso comercial dessas imagens ou substitua por fotos próprias.

As imagens em `public/products` foram baixadas de páginas públicas oficiais da Bambu Lab e Creality para melhorar a primeira versão do catálogo. Antes de publicar comercialmente, confirme permissões de uso com as marcas/distribuidores ou substitua por imagens próprias/autorizadas.
