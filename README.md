# Mais Prevenção Web

Site institucional da Mais Prevenção, empresa de segurança e medicina do
trabalho em São Paulo.

## Stack

- React 18
- TypeScript
- Vite
- Material UI
- styled-components
- EmailJS
- Zod

## Rodando localmente

```bash
npm ci
npm run dev
```

## Validações

```bash
npm run lint
npm run build
```

## Deploy

O deploy é feito pelo GitHub Pages via `.github/workflows/static.yml`.

O workflow instala as dependências, executa `npm run build`, cria `dist/404.html`
como fallback para rotas do React Router e publica a pasta `dist/`.

## SEO e indexação

O projeto publica os arquivos técnicos usados por crawlers:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/CNAME`

O `index.html` inclui canonical, metas para Googlebot, Open Graph, Twitter Card,
hreflang e JSON-LD com `Organization`, `LocalBusiness`, `ProfessionalService`,
`WebSite` e `WebPage`.

Os dados estruturados usam apenas informações já presentes no projeto. Telefone,
rua, CEP, horários e perfis oficiais da empresa devem ser adicionados quando
forem confirmados.

## Configuração de email

O envio do formulário usa EmailJS. A configuração pública fica em
`public/config.js` e é carregada em runtime por `src/service/mailService.ts`.

O formulário tem validação com Zod e uma verificação matemática simples no
frontend. Para proteção anti-spam mais forte, adicione uma validação server-side
ou uma integração de captcha com chave própria.
