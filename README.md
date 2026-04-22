# MedSeek Landing

Projeto institucional idealizado e construido por **Gustavo Bigs**.

> Eu crio interfaces centradas no usuario, nao apenas na tecnologia. Busco entender valores, motivacoes e prioridades para transformar tudo isso em experiencias digitais incriveis.

Site oficial: [gustavobigs.com.br](https://www.gustavobigs.com.br/)

## Tecnologias

- Vite 6
- React 19
- TypeScript
- CSS global com design tokens
- Lucide React

## Como executar

```bash
npm install
npm run dev
```

A aplicacao fica disponivel em `http://localhost:3000`.

## Build de producao

```bash
npm run build
npm run preview
```

## Estrutura principal

```txt
src/
  components/
    landing/
    shared/
  content/
  lib/
  types/
docs/
  stitch-export/
```

## Organizacao do codigo

- Conteudo textual centralizado em `src/content/landing-content.ts`.
- Componentes reutilizaveis em `src/components/shared`.
- Secoes da landing separadas da camada de conteudo para manutencao simples.
- Tokens visuais e responsividade concentrados em `src/index.css`.

