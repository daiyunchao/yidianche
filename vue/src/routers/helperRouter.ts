import Vue from 'vue';
import VueRoter from 'vue-router';
import HelperHotQuestion from '../pages/HelperHotQuestion.vue'
import HelperAccountQuestion from '../pages/HelperAccountQuestion.vue'
export default new VueRoter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelperAccountQuestion
    }
  ]
})