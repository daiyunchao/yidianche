import Vue from 'vue';
import VueRoter from 'vue-router';
import Index from '../pages/Index.vue';
Vue.use(VueRoter);

export default new VueRoter({
  routes:[
    {
      path:'/',
      name:'index',
      component:Index
    }
  ]
})