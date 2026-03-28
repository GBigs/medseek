# MedSeek Landing (Next.js)

Landing page institucional em **Next.js (App Router + TypeScript)** com arquitetura modular para evolucao continua.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS global com design tokens
- Lucide React (icones)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de producao

```bash
npm run build
npm run start
```

## Estrutura de pastas

```txt
app/
  globals.css
  layout.tsx
  page.tsx
src/
  components/
    landing/
      header.tsx
      landing-page.tsx
    shared/
      button.tsx
      container.tsx
      section-heading.tsx
  content/
    landing-content.ts
  lib/
    cn.ts
  types/
    landing.ts
docs/
  stitch-export/
    code.html
    screen.png
```

## Padroes adotados

- Conteudo textual centralizado em `src/content/landing-content.ts`.
- Componentes reutilizaveis em `src/components/shared`.
- Secoes da landing desacopladas do conteudo para facilitar manutencao.
- Tokens de design e responsividade centralizados em `app/globals.css`.
- Imagens remotas configuradas no `next.config.mjs`.

