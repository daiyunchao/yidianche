<template>
  <div class="pagion flexCenter">
    <div class="pagion_left flexCenter">
      <div class="pagin_btn disabled">上一页</div>
      <div class="pagin_pgindex active">1</div>
      <div class="pagin_pgindex">2</div>
      <div class="pagin_btn">下一页</div>
    </div>
    <div class="pagion_right flexCenter">
      <span class="pagin_text">第</span>
      <input class="pagin_txt" type="number" aria-invalid="false" />
      <span class="pagin_text">页</span>
      <div class="pagin_btn">跳转</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:['totalCount','pagChange','goPage']
});
</script>

<style scoped>
.pagion {
  width: 80%;
  margin: 25px auto;
}
.pagion_left {
  flex: 3;
}
.pagion_right {
  flex: 2;
}
.pagin_btn {
  width: 65px;
  height: 30px;
  border: 1px solid #d7dde4;
  background: #f2f2f2;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  color: #324050;
  font-size: 14px;
  margin: 5px;
  cursor: pointer;
  transition: all .5s;
}
.pagin_btn:hover {
  border-color: #ff5f5f;
}
.pagin_pgindex {
  margin: 5px;
  border-radius: 5px;
  background: #f2f2f2;
  border: 1px solid #d7dde4;
  text-align: center;
  line-height: 30px;
  min-width: 30px;
  cursor: pointer;
}
.pagin_text {
  font-size: 14px;
  display: inline-block;
  margin: 5px;
  color: #324050;
}
.pagin_txt {
  width: 80px;
  height: 30px;
  border: 1px solid #d7dde4;
  border-radius: 5px;
  outline: none;
}
.active {
  background: #ff5f5f;
  color: white;
}
</style>