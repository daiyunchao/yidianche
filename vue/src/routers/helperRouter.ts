import Vue from 'vue';
import VueRoter from 'vue-router';
import HelperHotQuestion from '../pages/HelperHotQuestion.vue'
import HelperAccountQuestion from '../pages/HelperAccountQuestion.vue'
import HelperRuzhuwenti from '../pages/HelperRuzhuwenti.vue';
import HelperHezuoqiantan from '../pages/HelperHezuoqiantan.vue';
import HelperNeirongjubao from '../pages/HelperNeirongjubao.vue';
import HelperNeirongshenhe from '../pages/HelperNeirongshenhe.vue';
import HelperWeiguichufa from '../pages/HelperWeiguichufa.vue';
import HelperWenzhangjiesuo from '../pages/HelperWenzhangjiesuo.vue';
import HelperXiangguanquanyi from '../pages/HelperXiangguanquanyi.vue';
import HelperXingjidengji from '../pages/HelperXingjidengji.vue';
import HelperZhanghaochongming from '../pages/HelperZhanghaochongming.vue';
import HelperZhanghaojiedong from '../pages/HelperZhanghaojiedong.vue';
import HelperZhanghaoxinyu from '../pages/HelperZhanghaoxinyu.vue';
import HelperZhiliaoxiugai from '../pages/HelperZhiliaoxiugai.vue';
import HelperZhutixiugai from '../pages/HelperZhutixiugai.vue';
export default new VueRoter({
  routes: [
    {
      path: '/helper/',
      name: 'index',
      component: HelperHotQuestion
    },
    {
      path: '/helper/index',
      name: 'index',
      component: HelperHotQuestion
    },
    {
      path: '/helper/accountquestion',
      name: 'accountquestion',
      component: HelperAccountQuestion
    },
    {
      path: '/helper/ruzhuwenti',
      name: 'ruzhuwenti',
      component: HelperRuzhuwenti
    },
    {
      path: '/helper/hezuoqiantan',
      name: 'hezuoqiantan',
      component: HelperHezuoqiantan
    },
    {
      path: '/helper/neirongjubao',
      name: 'neirongjubao',
      component: HelperNeirongjubao
    },
    {
      path: '/helper/neirongshenhe',
      name: 'neirongshenhe',
      component: HelperNeirongshenhe
    },
    {
      path: '/helper/weiguichufa',
      name: 'weiguichufa',
      component: HelperWeiguichufa
    },
    {
      path: '/helper/wenzhangjiesuo',
      name: 'wenzhangjiesuo',
      component: HelperWenzhangjiesuo
    },
    {
      path: '/helper/xiangguanquanyi',
      name: 'xiangguanquanyi',
      component: HelperXiangguanquanyi
    },
    {
      path: '/helper/xingjidengji',
      name: 'xingjidengji',
      component: HelperXingjidengji
    },
    {
      path: '/helper/zhanghaochongming',
      name: 'zhanghaochongming',
      component: HelperZhanghaochongming
    },
    {
      path: '/helper/zhanghaojiedong',
      name: 'zhanghaojiedong',
      component: HelperZhanghaojiedong
    },
    {
      path: '/helper/zhanghaoxinyu',
      name: 'zhanghaoxinyu',
      component: HelperZhanghaoxinyu
    },
    {
      path: '/helper/zhiliaoxiugai',
      name: 'zhiliaoxiugai',
      component: HelperZhiliaoxiugai
    },
    {
      path: '/helper/zhutixiugai',
      name: 'zhutixiugai',
      component: HelperZhutixiugai
    },
  ]
})