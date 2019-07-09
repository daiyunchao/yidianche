<template>
  <div>
    <Header />
    <div class="main">
      <div class="main_menu">
        <Menu></Menu>
      </div>
      <div class="main_content">
        <Home></Home>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../compoents/Header.vue";
import Menu from "../compoents/Menu.vue";
import Footer from "../compoents/Footer.vue";
import Home from "./Home.vue";
export default Vue.extend({
  name: "Nav",
  components: {
    Header,
    Home,
    Menu,
    Footer
  }
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
.main_menu {
  flex: 2;
  background: #f4f4f4;
}
.main_content {
  flex: 8;
  margin-left: 20px;
}
</style>


