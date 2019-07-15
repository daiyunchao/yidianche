<template>
  <div>
    <div v-if="isShowLoginPage">this is login page</div>
    <Nav v-if="isShowMainPage"></Nav>
    <NavHelper v-if="isShowHelperPage"></NavHelper>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Nav from "./Nav.vue";
import NavHelper from "./NavHelper.vue";
export default Vue.extend({
  data() {
    return {
      isShowLoginPage: false,
      isShowMainPage: false,
      isShowHelperPage: true
    };
  },
  components: {
    Nav,NavHelper
  }
});
</script>

