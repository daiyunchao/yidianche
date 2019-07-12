<template>
  <div class="overviewCon flexStart">
    <div class="overview" v-for="item in data" :key="item.name">
      <div>
        <span>{{item.name}}</span>
        <div class="home_number">{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"],
  name: "Overview"
});
</script>

<style scoped>
.overviewCon {
  height: 100%;
  width: 100%;
}
.overview {
  flex: 1;
  height: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  position: relative;
  cursor: pointer;
}
.overview::after {
  content: "";
  position: absolute;
  right: 0px;
  width: 1px;
  height: 50px;
  background: #ddd;
}
.overview:last-child::after {
  content: "";
  width: 0px;
}
.home_number {
  font-size: 26px;
  font-weight: 700;
  color: #666;
  transition: color 0.5s;
}
.home_number:hover {
  color: #ff6565;
}

span {
  color: #757575;
  display: inline-block;
  padding: 10px 0px;
}
</style>