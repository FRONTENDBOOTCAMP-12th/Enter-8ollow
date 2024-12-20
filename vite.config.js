import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const config = defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        start: resolve(__dirname, 'index.html'),
        cartegory: resolve(__dirname, 'src/pages/cartegory/cartegory.html'),
        login: resolve(__dirname, 'src/pages/Login/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        main: resolve(__dirname, 'src/pages/main/index.html'),
        board: resolve(__dirname, 'src/pages/board/board.html'),
        exchange: resolve(__dirname, 'src/pages/main/exchange/exchange.html'),
      },
    },
  },
});

export default config;
