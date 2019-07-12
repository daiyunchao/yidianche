<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.btn {
  width: 140px;
  height: 35px;
  color: white;
  background: #ff5f5f;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #888888;
  text-align: center;
  line-height: 35px;
}
</style>