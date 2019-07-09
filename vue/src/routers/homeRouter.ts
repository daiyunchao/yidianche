import Vue from 'vue';
import VueRoter from 'vue-router';
import Home from '../pages/Home.vue';

export default new VueRoter({
  routes:[
    {
      path:'/',
      name:'index',
      component:Home
    }
  ]
})