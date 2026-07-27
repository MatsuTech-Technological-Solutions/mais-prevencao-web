# Análise do Projeto — Mais Prevenção Web

## Visão geral

Site institucional (landing page) da empresa "Mais Prevenção" (medicina/segurança do trabalho, SP), construído em **React 18 + TypeScript + Vite**, com Material UI, styled-components, react-router-dom, EmailJS e Zod. Deploy planejado via GitHub Pages (Actions).

**Estrutura:** `App.tsx` → `AppRouter` → `Home` (Header, Carousel, About, Services, Footer com formulário de contato) + rotas `/services/*` para cada área (engenharia, médico, combate a incêndio, desenvolvimento). Código é pequeno (~1000 linhas de componentes), organizado, sem testes.

## 🔴 Problemas críticos

1. **O workflow de deploy (`.github/workflows/static.yml`) não builda o projeto.**
   Ele faz `path: '.'` e publica o repositório inteiro (fonte TS/TSX crua, `package.json`, `dist.zip` etc.) direto no GitHub Pages — nunca roda `npm install` nem `npm run build`. O `index.html` da raiz aponta para `/src/main.tsx` como módulo, que o navegador não consegue compilar sozinho. **Resultado: o site publicado provavelmente não funciona.** Precisa adicionar steps de `setup-node`, `npm ci`, `npm run build` e publicar a pasta `dist/`.

2. **`dist.zip` (5.2MB) está commitado no git**, enquanto `dist/` está no `.gitignore`. É um artefato de build binário parado no histórico — infla o repositório e é redundante/desatualizado a cada novo build. Deveria ser removido e ignorado.

3. **Captcha "de verdade" está morto: só usa uma soma matemática.**
   Existe `react-google-recaptcha` instalado, importado em `src/components/frames/footer/index.tsx` (`ReCAPTCHA from "react-google-recaptcha"`) e o script do Google carregado no `index.html`, mas o componente nunca é renderizado — só existe `captchaToken` guardado no estado e nunca preenchido. A proteção real do formulário é um captcha de soma (`src/utils/captcha.ts`), trivialmente contornável por bots.

## 🟡 Problemas relevantes

4. **Credenciais do EmailJS hardcoded** em `src/service/mailService.ts` (fallback) e em `public/config.js` (Service ID, Template ID, Public Key expostos). Para EmailJS isso é aceitável até certo ponto (a "public key" é feita para ser pública), mas vale confirmar que não há risco de abuso sem captcha real (ver item 3) — a combinação das duas coisas é o risco.

5. **SEO/Schema.org com dados fictícios**: endereço "Seu endereço", CEP "00000-000", lat/long "-23.0000000"/"-46.0000000" no JSON-LD do `index.html`. Deveria ser preenchido com dados reais da empresa antes de ir para produção, ou removido.

6. **Imagens pesadas sem otimização de pipeline**: vários `.png` grandes (`about-us.png` 1.4MB, `background_1.png` 826KB) convivendo com versões `.webp` (parece transição incompleta). Vale garantir que só as versões otimizadas (`.webp`) sejam realmente usadas/importadas.

7. **Nome de arquivo com caracteres especiais/acentos** (`DALL·E ...webp`) em `src/assets/img/` — funciona mas é frágil em alguns ambientes de CI/OS e polui o histórico do git.

## 🟢 Pontos positivos

- Validação de formulário com Zod bem feita (schema claro, mensagens em PT-BR, validação de telefone celular brasileiro).
- Estrutura de pastas organizada por domínio (`components/frames/...`).
- TypeScript configurado corretamente, ESLint presente.
- SEO básico bem cuidado (meta tags, Open Graph, Twitter Card, canonical).

## Recomendação de prioridade

1. Corrigir o workflow do GitHub Actions (build real + deploy do `dist/`) — sem isso o site não funciona em produção.
2. Remover `dist.zip` do git.
3. Decidir: ativar o reCAPTCHA de verdade ou remover a dependência/script morto.
4. Preencher dados reais no Schema.org (endereço/geo).
