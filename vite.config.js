import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/prak9/', // ВАЖЛИВО: Замініть на ім'я ВАШОГО репозиторію GitHub!
});