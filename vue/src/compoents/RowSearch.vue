<template>
  <div class="row_search flexCenter mgt20">
    <input class="search_txt" type="text" :placeholder="placeholder" />
    <button>搜索</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["placeholder"]
});
</script>

<style scoped>
.row_search {
  display: flex;
  justify-content: center;
  
}
.search_txt {
  flex-grow: 1;
  width: 100%;
  height: 40px;
  color: #666;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
}
button {
  width: 80px;
  height: 40px;
  outline: none;
  float: right;
  font-size: 16px;
  background: #f4f4f4 !important;
  border: 1px solid #ddd;
  border-left-width: 0px;
}
</style>