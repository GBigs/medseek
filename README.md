# MedSeek Landing (Vite)

Landing page institucional em **Vite + React + TypeScript** com arquitetura modular para evolucao continua.

## Stack

- Vite 6
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
npm run preview
```

## Estrutura de pastas

```txt
src/
  App.tsx
  main.tsx
  index.css
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
vite.config.ts
index.html
```

## Padroes adotados

- Conteudo textual centralizado em `src/content/landing-content.ts`.
- Componentes reutilizaveis em `src/components/shared`.
- Secoes da landing desacopladas do conteudo para facilitar manutencao.
- Tokens de design e responsividade centralizados em `src/index.css`.

