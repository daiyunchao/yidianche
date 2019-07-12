<template>
  <div class="asset_item">
    <div class="img_con">
      <div v-if="isVideo">
        <div class="mask">
          <img class="content_img" :src="img" alt />
          <div class="vid">
            <img src="../images/vid.png" alt />
          </div>
        </div>
      </div>
      <div v-if="!isVideo">
        <img class="content_img" :src="img" alt />
      </div>
    </div>
    <div class="img_name">{{name}}</div>
    <div class="btns flexCenter">
      <div>编辑</div>
      <div>删除</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["img", "name", "isVideo"],
  name: "AssetItem"
});
</script>

<style scoped>
.asset_item {
  width: 220px;
  height: 300px;
  text-align: center;
  margin: 10px 20px 10px 0;
}
.img_con {
  width: 217px;
  height: 217px;
  line-height: 217px;
  background: #f3f4f9;
}
.content_img {
  width: 100%;
  vertical-align: middle;
}
.img_name {
  margin-top: 10px;
  font-size: 16px;
}
.btns {
  height: 40px;
  margin-top: 10px;
}
.btns > div {
  width: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  border: 1px solid #ddd;
  transition: color 0.3s;
  cursor: pointer;
}
.btns > div:hover {
  color: #ff5f5f;
}
.btns > div:nth-child(1) {
  border-right: 0px;
}
.mask {
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-color: #000;
  position: relative;
}
.mask:hover {
  opacity: 1;
}
.vid {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  cursor: pointer;
}
.vid img {
  width: 100%;
  float: left;
}
</style>