import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

export default defineConfig({
    base : '/MyResponsive_Webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-boostrap.html',
                materialize: 'index-materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : {
        data
      }
  })]
    
});