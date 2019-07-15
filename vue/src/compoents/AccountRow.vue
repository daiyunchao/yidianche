<template>
  <div class="flexBetween">
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
  name: "AccountRow"
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