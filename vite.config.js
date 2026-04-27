import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Altere `base` para o nome do seu repositório no GitHub Pages (ex: '/curriculo/').
// Para site de usuário (SEU-USUARIO.github.io), deixe '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
});
