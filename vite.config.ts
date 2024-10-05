import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

import Package from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		// cssInjectedByJsPlugin(),
		viteSingleFile()
	],
	define: {
		__APP_VERSION__: `"${Package.version}"`
	},
	build: {
		rollupOptions: {
			context: 'svelte-ext',
			output: {
				format: 'commonjs',
				entryFileNames: 'app.js',
				manualChunks: undefined,
				dir: 'docs',
			}
		}
	}
});
