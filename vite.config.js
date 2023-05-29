
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'

export default defineConfig({
   build: {
     rollupOptions: {
       input : {
         main: 'index.html',
         one: 'one.html',
       }
     },
   },
   base: '/vite-hbs/',
   plugins: [handlebars({
       context : {
         title : "Sibu & Thabang",
         fruits : ["apple", "banana", "orange", "pear", "litchi"]
       }
   })]
})