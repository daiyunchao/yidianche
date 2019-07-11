<template>
  <div class="article_item flexStart">
    <div class="item_img">
      <img :src="content.img" alt />
    </div>
    <div class="item_title_con flexBetween">
      <div class="item_content">
        <div class="item_title">
          <span class="item_title_span">{{content.title}}</span>
          <span class="item_status">{{content.isPass?"已发布":"未通过"}}</span>
        </div>
        <div class="item_tj">
          <span class="time">{{content.publishTime}}</span>&nbsp;|
          <span class="tj">推荐：{{content.tjCount}}&nbsp;|</span>
          <span class="yd">阅读：{{content.ydCount}}&nbsp;|</span>
          <span class="fx">分享：{{content.fxCount}}</span>
        </div>
      </div>
      <div class="article_down" v-if="content.isPass">下线</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["content"],
  name: "ArticleItem"
});
</script>

<style scoped>
.article_item {
  color: #666;
  padding: 20px;
  border: 1px solid #ddd;
  border-bottom: 0px;
}
.article_item:nth-last-child(1){
  border-bottom: 1px solid #ddd;
}
.item_img {
  width: 135px;
  height: 95px;
  margin-right: 20px;
}

.item_img img {
  width: 100%;
}
.item_title_con {
  flex-grow: 1;
}
.item_title {
  padding: 10px 0;
}
.item_title_span {
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}
.item_title_span:hover {
  color: #ff5f5f;
}
.item_status {
  font-size: 12px;
  margin-left: 20px;
  padding: 2px 5px;
  border: 1px solid #3b77be;
  border-radius: 2px;
  color: #3b77be;
}
.item_tj {
  font-size: 10px;
  color: #a5a5a5;
  margin-top: 10px;
}
.article_down {
  margin-right: 20px;
  color: #3b77be;
  cursor: pointer;
  font-size: 14px;
}
</style>