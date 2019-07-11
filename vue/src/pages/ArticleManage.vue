<template>
  <div class="article_manage">
    <ContentManage :tabs="tabs">
      <div slot="content_manage">
        <div class="content_search">
          <div class="search_types">
            <select name id class="search_select">
              <option value>全部类型</option>
            </select>
            <select name id class="search_select">
              <option value>全部状态</option>
            </select>
          </div>
          <div class="search_txt">
            <input type="text" />
            <button>搜索</button>
          </div>
        </div>
        <div class="total_count_info pdl20 mgt40">
          共
          <span class="theme_color">9</span>条内容
        </div>

        <div class="articleList mgt40">
          <ArticleItem v-for="(item) in articles" :content="item" :key="item.title"></ArticleItem>
        </div>
        <div class="pagion mgt40">
          <Pagin></Pagin>
        </div>
        <div class="ads mgt40">
          <SwiperAds :adImgs="adImgs" />
        </div>
      </div>
    </ContentManage>
    <div style="display:none">
      <img src="../images/ad1.jpg" alt />
      <img src="../images/ad2.jpg" alt />
      <img src="../images/ad3.jpg" alt />
      <img src="../images/img-ad1.jpg" alt />
      <img src="../images/img-ad2.jpg" alt />
      <img src="../images/img-ad3.jpg" alt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ITab, IArticleItem } from "../store/Itype";
import ContentManage from "../compoents/ContentManage.vue";
import ArticleItem from "../compoents/ArticleItem.vue";
import Pagin from "../compoents/Pagin.vue";
import SwiperAds from "../compoents/SwiperAds.vue";
export default Vue.extend({
  data() {
    let contentManage: ITab = {
      name: "内容管理",
      isActive: true,
      slotName: "content_manage"
    };
    let articles: Array<IArticleItem> = [];
    let articleItem_1: IArticleItem = {
      title: "锤子R1价格赶超苹果iPhoneX，顶配骁龙845+1T卖到8848元你入手吗",
      img: "../images/img-ad1.jpg",
      isPass: false,
      publishTime: "2018-05-15 23:37:33",
      tjCount: 10,
      ydCount: 100,
      fxCount: 9
    };
    let articleItem_2: IArticleItem = {
      title: "在国内为什么丰田阿尔法加价那么厉害还是会有人买？",
      img: "../images/img-ad2.jpg",
      isPass: true,
      publishTime: "2018-05-15 23:37:33",
      tjCount: 100,
      ydCount: 1000,
      fxCount: 90
    };
    let articleItem_3: IArticleItem = {
      title: "大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！",
      img: "../images/img-ad3.jpg",
      isPass: true,
      publishTime: "2018-05-15 23:37:33",
      tjCount: 20,
      ydCount: 300,
      fxCount: 19
    };
    articles.push(articleItem_1);
    articles.push(articleItem_2);
    articles.push(articleItem_3);
    return {
      tabs: {
        contentManage
      },
      articles,
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"]
    };
  },
  components: {
    ContentManage,
    ArticleItem,
    Pagin,
    SwiperAds
  }
});
</script>

<style scoped>
.article_manage {
  color: #666;
}
.content_search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search_types {
  flex: 2;
}

.search_txt {
  text-align: right;
  flex: 3.5;
}
.search_txt > input {
  width: 84%;
  height: 40px;
  color: #666;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
}
.search_txt > button {
  width: 80px;
  height: 40px;
  outline: none;
  float: right;
  font-size: 16px;
  background: #f4f4f4 !important;
  border: 1px solid #ddd;
  border-left-width: 0px;
}
.search_select {
  width: 150px;
  height: 40px;
  border: 1px solid #d0d0d0;
  margin-right: 10px;
  color: #666;
}
</style>