import Vue from 'vue';
import VueRoter from 'vue-router';
import Home from '../pages/Home.vue';
import Publish from '../pages/Publish.vue';
export default new VueRoter({
  routes:[
    {
      path:'/',
      name:'index',
      component:Publish
    }
  ]
})