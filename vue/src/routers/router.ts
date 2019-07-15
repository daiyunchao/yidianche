import Vue from 'vue';
import VueRoter from 'vue-router';
import Index from '../pages/Index.vue';
import Login from '../pages/Login.vue';
import NavHelper from '../pages/NavHelper.vue';
Vue.use(VueRoter);

export default new VueRoter({
  routes:[
    {
      path:'/',
      name:'index',
      component:Index
    },
    {
      path:'/login',
      name:"login",
      component:Login
    },
    {
      path:"/helper",
      name:"helper",
      component:NavHelper
    }
  ]
})