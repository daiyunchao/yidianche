<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Toast"
});
</script>

<style scoped>
.toast {
  height: 40px;
  background: #fceded;
  padding: 0 20px;
  line-height: 40px;
  color: #666;
}
</style>