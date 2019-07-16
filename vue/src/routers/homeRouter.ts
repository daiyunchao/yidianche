import Vue from 'vue';
import VueRoter from 'vue-router';
import Home from '../pages/Home.vue';
import Publish from '../pages/Publish.vue';
import ArticleManage from '../pages/ArticleManage.vue';
import ArticleSync from '../pages/ArticleSync.vue';
import Assets from '../pages/Asset.vue';
import Subscribe from '../pages/Subscribe.vue'
import ContentData from '../pages/ContentData.vue'
import StarLevel from '../pages/StarLevel.vue'
import AccountInfo from '../pages/AccountInfo.vue'
import AccoutInfoEdit from '../pages/AccountInfoEdit.vue'
import AccountStatus from '../pages/AccountStatus.vue'
import HelperHotQuestion from '../pages/HelperHotQuestion.vue'
export default new VueRoter({
  routes: [
    {
      path: '/admin',
      name: 'index',
      component: Home
    },
    {
      path: '/admin/',
      name: 'index',
      component: Home
    },
    {
      path: '/admin/home',
      name: 'home',
      component: Home
    },
    {
      path: '/admin/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/admin/articlemanage',
      name: 'articlemanage',
      component: ArticleManage
    },
    {
      path: '/admin/articlesync',
      name: 'articlesync',
      component: ArticleSync
    }, {
      path: '/admin/assets',
      name: 'assets',
      component: Assets
    },
    {
      path: '/admin/subscribe',
      name: 'subscribe',
      component: Subscribe
    },
    {
      path: '/admin/contentdata',
      name: 'contentdata',
      component: ContentData
    },
    {
      path: '/admin/starlevel',
      name: 'starlevel',
      component: StarLevel
    },
    {
      path: '/admin/accountinfo',
      name: 'accountinfo',
      component: AccountInfo
    },
    {
      path: '/admin/accoutinfoedit',
      name: 'accoutinfoedit',
      component: AccoutInfoEdit
    },
    {
      path: '/admin/accountstatus',
      name: 'accountstatus',
      component: AccountStatus
    },
    // {
    //   path: '/helper/index',
    //   name: 'helperindex',
    //   component: HelperHotQuestion
    // }
  ]
})