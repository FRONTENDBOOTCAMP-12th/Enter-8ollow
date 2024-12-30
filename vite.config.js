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
        category: resolve(__dirname, 'src/pages/Category/index.html'),
        login: resolve(__dirname, 'src/pages/Login/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        main: resolve(__dirname, 'src/pages/main/index.html'),
        board: resolve(__dirname, 'src/pages/board/index.html'),
        exchange: resolve(__dirname, 'src/pages/main/exchange/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        seniordetail: resolve(
          __dirname,
          'src/pages/main/SeniorDetail/index.html'
        ),

        qnadetail: resolve(__dirname, 'src/pages/qnaBoard/index.html'),
      },
    },
  },
});

export default config;
