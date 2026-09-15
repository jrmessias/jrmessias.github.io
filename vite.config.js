import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Para site de usuário (SEU-USUARIO.github.io), deixe '/'.
export default defineConfig({
  plugins: [
    react(),
    // GitHub Pages resolves /cartao to cartao.html on its own; the dev server
    // needs to be told.
    {
      name: 'extensionless-html',
      configureServer(server) {
        // No return value: Vite calls whatever configureServer returns as a
        // post hook, and connect's use() returns the app itself.
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/cartao' || req.url === '/cartao/') req.url = '/cartao.html';
          next();
        });
      },
    },
  ],
  base: './',
  // Vite has no PORT env support of its own; the preview harness assigns one.
  // host: true binds every interface, so other devices on the LAN can open it.
  server: { host: true, port: Number(process.env.PORT) || 5173 },
  // Two entry points: the CV at / and the contact card at /contato/.
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        // cartao.html (not cartao/index.html) so GitHub Pages serves /cartao
        // directly, with no redirect to a trailing slash.
        cartao: resolve(import.meta.dirname, 'cartao.html'),
      },
    },
  },
});
