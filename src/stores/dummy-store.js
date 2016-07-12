import Vue from '../../bower_components/vue/dist/vue.js';

var demo = new Vue({
  el: '#demo',
  data: { 
    title: 'Users',
    todos: [
      {
        first: true,
        first_name: 'Suren',
        last_name: 'Atoyan',
        sure_name: 'Vreji'
      },
      {
        first_name: 'Karen',
        last_name: 'Azganunyan',
        sure_name: 'Hayranuni'
      },
      {
        first_name: 'Aren',
        last_name: 'Amirjanyan',
        sure_name: 'Armeni'
      },
      {
        first_name: 'Vardan',
        last_name: 'Adamyan',
        sure_name: 'Artaki'
      }
    ]
  }
});

export default demo;  