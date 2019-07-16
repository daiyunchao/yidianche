<template>
  <div>
    <Nav></Nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Nav from "./Nav.vue";
export default Vue.extend({
  data() {
    return {
      isShowLoginPage: true,
      isShowMainPage: false,
      isShowHelperPage: false
    };
  },
  components: {
    Nav
  }
});
</script>

