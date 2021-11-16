import adapter from '@sveltejs/adapter-static';
import { optimizeCss, optimizeImports } from 'carbon-preprocess-svelte';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), optimizeImports()],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    vite: {
      optimizeDeps: { include: ['@carbon/charts', 'clipboard-copy'] },
      plugins: [production && optimizeCss()]
    }
  }
};

export default config;
