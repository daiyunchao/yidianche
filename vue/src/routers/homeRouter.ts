import Vue from 'vue';
import VueRoter from 'vue-router';
import Home from '../pages/Home.vue';
import Publish from '../pages/Publish.vue';
import ArticleManage from '../pages/ArticleManage.vue';
import ArticleSync from '../pages/ArticleSync.vue';
export default new VueRoter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ArticleSync
    }
  ]
})