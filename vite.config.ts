import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	base: './AdminDashboard/',
	plugins: [
		react(),
		compression({
      algorithm: 'gzip',
      filter: (fileName) => /\.(js|css|html|json)$/.test(fileName), 
      threshold: 1024,
		}),
	],
	optimizeDeps: {
		esbuildOptions: {
			plugins: [esbuildCommonjs(['react-calendar', 'react-date-picker'])],
		},
	},
});
