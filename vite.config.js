import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Para site de usuário (SEU-USUARIO.github.io), deixe '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
});
