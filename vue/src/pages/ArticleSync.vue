<template>
  <div class="article_manage">
    <ContentManage :tabs="tabs">
      <div slot="content_manage">
        <div class="content_search">
          <div class="sync_types">
            <select name id class="sync_select">
              <option>请选择同步链接的类型</option>
              <option>RSS或文章列表页</option>
              <option>微信</option>
              <option>头条</option>
            </select>
          </div>
          <div class="search_txt">
            <input type="text" placeholder="请输入同步链接，请您务必确保对提交的内容源拥有版权" />
            <button>确定</button>
          </div>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ITab } from "../store/Itype";
import ContentManage from "../compoents/ContentManage.vue";
import SwiperAds from "../compoents/SwiperAds.vue";
export default Vue.extend({
  data() {
    let contentManage: ITab = {
      name: "内容同步",
      isActive: true,
      slotName: "content_manage"
    };
    return {
      tabs: {
        contentManage
      },
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"]
    };
  },
  components: {
    ContentManage,
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
.sync_types {
  flex: 1;
}

.search_txt {
  text-align: right;
  flex: 5.5;
}
.search_txt > input {
  width: 88%;
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
.sync_select {
  width: 160px;
  height: 40px;
  border: 1px solid #d0d0d0;
  margin-right: 10px;
  color: #666;
  font-size: 12px;
}
</style>