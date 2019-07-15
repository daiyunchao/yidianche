<template>
  <div class="flexBetween" style="align-items:flex-start" :style="row_style" >
    <div class="info">
      <slot name="left" />
    </div>
    <div class="content">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:["isEdit"],
  name: "AccountRow",
  data(){
    let row_style="";
    if (this.$props.isEdit) {
      //如果是编辑状态
      row_style="margin-bottom:40px"
    }
    return {
      row_style
    }
  }
});
</script>

<style scoped>
.info {
  flex: 1;
  text-align: right;
  padding: 15px 20px;
  color: #333;
  
}
.content {
  flex: 2;
  padding-right: 20px;
  color: #a2a2a2;
}
</style>