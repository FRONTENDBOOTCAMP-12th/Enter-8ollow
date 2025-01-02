import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

const config = defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),

    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
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

        BoardContent: resolve(
          __dirname,
          'src/pages/Board/BoardContent/index.html'
        ),
        BoardWith: resolve(__dirname, 'src/pages/Board/BoardWith/index.html'),
        SearchActivities: resolve(
          __dirname,
          'src/pages/Board/SearchActivities/index.html'
        ),
        WithWho: resolve(__dirname, 'src/pages/Board/WithWho/index.html'),

        WriteActivities: resolve(
          __dirname,
          'src/pages/Board/WriteActivities/index.html'
        ),

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

        qna: resolve(__dirname, 'src/pages/qna/index.html'),
        qnaBoard: resolve(__dirname, 'src/pages/qnaBoard/index.html'),

        exchageDetail: resolve(
          __dirname,
          'src/pages/main/ExchangeDetail/index.html'
        ),

        BoardDetail: resolve(__dirname, 'src/pages/BoardDetail/index.html'),
        writeQna: resolve(__dirname, 'src/pages/writeQna/writeQna.html'),
      },
    },
  },
});

export default config;
