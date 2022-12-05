import { defineConfig } from 'vite';

export default defineConfig({
    root: '',
    build: {
        outDir: 'docs',
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: 'globalThis',
            },
        },
    },
});
