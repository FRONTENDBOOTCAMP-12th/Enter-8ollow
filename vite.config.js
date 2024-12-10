import { defineConfig } from 'vite';

const config = defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});

export default config;
