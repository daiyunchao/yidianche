import Vue from 'vue';
import App from './App.vue';
import routers from './routers/router';
import './css/icon.css';
import './css/main.css';
new Vue({
  el: '#root',
  router: routers,
  components: {
    App
  },
  template: '<App/>'
})