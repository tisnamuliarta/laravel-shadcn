import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
            // @ts-ignore
            postcss: [
                tailwindcss(),
                autoprefixer(),
            ],
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
