// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://raul-profesor.github.io',
  // Si el repo se llama igual que el usuario (raul-profesor.github.io), base es '/'.
  // Si fuera un repo secundario como 'mi-repo', sería base: '/mi-repo/'
  base: '/',
  output: 'static',
});
