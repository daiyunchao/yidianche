<template>
  <div style="height:100%">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./compoents/Header.vue";
export default Vue.extend({
  name: "App",
  components: {
    Header
  }
});
</script>

