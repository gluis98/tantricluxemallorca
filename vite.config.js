import { cpSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

/** Copia build a public_html/build (Laragon / hosting que usa esa carpeta como raíz). */
function copyBuildToPublicHtml() {
    const src = resolve(__dirname, 'public/build');
    const dest = resolve(__dirname, 'public_html/build');
    if (!existsSync(src)) {
        return;
    }
    mkdirSync(resolve(__dirname, 'public_html'), { recursive: true });
    cpSync(src, dest, { recursive: true });
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            publicDirectory: 'public',
            buildDirectory: 'build',
            refresh: true,
        }),
        {
            name: 'copy-build-to-public-html',
            closeBundle() {
                copyBuildToPublicHtml();
            },
        },
    ],
});
