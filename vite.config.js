import data from './data.json';
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [handlebars({
      context : data 

    })],
  };