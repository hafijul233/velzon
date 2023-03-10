import {defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({command, mode}) => {
    return {
        transpileDependencies: ["@vueform"],
        plugins: [
            vue(),
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
        ],
        resolve: {
            alias: {
                '@': "./resources"
            }
        },
        //load laravel environment to vue
        define : loadEnv(mode, process.cwd(), '')
    }
});
