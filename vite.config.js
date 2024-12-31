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
        board: resolve(__dirname, 'src/pages/Board/index.html'),
        exchange: resolve(__dirname, 'src/pages/main/Exchange/index.html'),
        exchangedetail: resolve(
          __dirname,
          'src/pages/main/ExchangeDetail/index.html'
        ),

        profile: resolve(__dirname, 'src/pages/Profile/index.html'),
        profileDetail: resolve(__dirname, 'src/pages/ProfileDetail/index.html'),

        seniordetail: resolve(
          __dirname,
          'src/pages/main/SeniorDetail/index.html'
        ),

        exchageDetail: resolve(
          __dirname,
          'src/pages/main/ExchangeDetail/index.html'
        ),

        BoardDetail: resolve(__dirname, 'src/pages/BoardDetail/index.html'),

        qnadetail: resolve(__dirname, 'src/pages/qnaBoard/index.html'),
        writeQna: resolve(__dirname, 'src/pages/writeQna/writeQna.html'),
      },
    },
  },
});

export default config;
