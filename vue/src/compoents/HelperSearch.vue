<template>
  <div class="helpersearch mgt40">
    <input class="search_text" type="text" placeholder="请输入关键字搜索" />
    <div class="search_btn">搜索</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelperSearch"
});
</script>

<style scoped>
.helpersearch {
  position: relative;
  box-sizing: border-box;
}
.search_text {
  width: 92%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  padding-left: 10px;
  outline: none;
}
.search_btn {
  position: absolute;
  display: inline-block;
  right: 0px;
  width: 8%;
  height: 40px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;
}
</style>