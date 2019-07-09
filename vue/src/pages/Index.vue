<template>
  <div>
    <div v-if="!isLogin">this is login page</div>
    <Nav v-if="isLogin"></Nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Nav from "./Nav.vue";
export default Vue.extend({
  data() {
    return {
      isLogin: true
    };
  },
  components: {
    Nav
  }
});
</script>

