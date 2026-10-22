import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Rutas relativas: la web funciona tanto en la raíz de un dominio como en una subcarpeta.
  base: './',
  build: {
    // SINGLE=1 genera una versión de un solo archivo (útil para compartirla como página independiente).
    assetsInlineLimit: process.env.SINGLE ? 100_000_000 : 4096,
  },
});
