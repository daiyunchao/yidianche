<template>
  <div>
    <Header />
    <div class="main">
      <div class="main_menu">
        <Menu></Menu>
      </div>
      <div class="main_content">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../compoents/Header.vue";
import Menu from "../compoents/MenuHelper.vue";
import Footer from "../compoents/Footer.vue";
import HelperRouter from "../routers/helperRouter";
export default Vue.extend({
  name: "Nav",
  components: {
    Header,
    Menu,
    Footer
  },
  router: HelperRouter
});
</script>
<style scoped>
.main {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.main::-webkit-scrollbar{
  display: none;
}
.main_menu {
  flex: 2;
  border-radius: 3px;
}
.main_content {
  flex: 8;
  margin-left: 20px;
}
</style>


