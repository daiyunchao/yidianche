import Vue from 'vue';
import App from './App.vue';
import routers from './routers/router';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css';
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