
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
          
            refresh: true,
            // 1. Desactiva la detección de PHP aquí
            detectPhp: false, 
        }),
        tailwindcss(),
        // 2. Comenta o elimina Wayfinder temporalmente si sigue dando error, 
        // ya que suele requerir PHP para generar las rutas.
        // wayfinder({
        //    formVariants: true,
        // }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});