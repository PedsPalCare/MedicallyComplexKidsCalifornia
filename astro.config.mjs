import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pedspalcare.github.io',
  base: '/MedicallyComplexKidsCalifornia',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
