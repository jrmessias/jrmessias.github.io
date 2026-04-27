# Currículo — Israel Messias Júnior

Site de currículo pessoal construído com React 19, Vite 8, Tailwind CSS 4 e PostCSS.

## Tecnologias

- **React 19** — biblioteca UI
- **Vite 8** — build tool rápido
- **Tailwind CSS 4** + PostCSS — estilização utilitária
- **Inter** e **JetBrains Mono** — tipografia (Google Fonts)

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

1. Faça push para a branch `main`.
2. Em **Settings → Pages → Source**, selecione **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` faz o build e deploy automaticamente.
4. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

> O `vite.config.js` já usa `base: './'` (caminho relativo), compatível com a maioria dos casos.

## Estrutura

```
src/
├── main.jsx              # entrada
├── App.jsx               # composição das seções
├── index.css             # Tailwind + estilos globais + impressão
├── data.js               # conteúdo do currículo (CV_DATA + COPY)
├── components/
│   ├── Header.jsx        # navegação + toggles de idioma/tema
│   ├── Footer.jsx
│   ├── Section.jsx       # wrapper padrão de seção
│   ├── Reveal.jsx        # animação de entrada ao rolar
│   └── Icon.jsx          # ícones SVG inline
└── sections/
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Education.jsx
    ├── Courses.jsx
    ├── Projects.jsx
    ├── Events.jsx
    └── Contact.jsx
```

Para editar o conteúdo, altere apenas `src/data.js`. O site é bilíngue (pt-BR / EN) e possui tema claro/escuro.
