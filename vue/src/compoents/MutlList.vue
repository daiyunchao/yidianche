<template>
  <div class="list">
    <div class="header">
      <div
        v-for="(value,key) in contents"
        :key="key"
        :class="value.isActive?'header-item active':'header-item'"
        @click="changeHeader(key)"
      >{{value.name}}</div>
    </div>
    <div class="content">
      <div class="content_list" v-for="(tab,key) in contents" :key="key" v-show="tab.isActive">
        <div class="content_item" v-for="content in tab.list" :key="content.title">
          <div>
            {{content.title}}
            <i class="content_new" v-show="content.isNew">NEW</i>
          </div>
          <div>{{content.time}}</div>
        </div>
      </div>
      <Pagin />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pagin from "./Pagin.vue";
export default Vue.extend({
  props: ["contents", "changeTab"],
  name: "MulList",

  data() {
    return {
      //headerCls:"header-item"
    };
  },
  methods: {
    changeHeader(key) {
      this.$props.changeTab(key);
    }
  },
  components: {
    Pagin
  }
});
</script>

<style lang="less" scoped>
@header_height: 45px;
.header {
  width: 100%;
  height: @header_height;
  background: #eaeaea;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #d0d0d0;
}
.header-item {
  width: 110px;
  height: 100%;
  text-align: center;
  line-height: @header_height;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.active {
  background: #ff5f5f;
}
.content {
  width: 100%;
  border: 1px solid #d0d0d0;
  border-top: 0px;
  min-height: 100px;
  padding-top: 10px;
}
.content_item {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  overflow: hidden;
  color: #333;
  cursor: pointer;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: color 0.3s;
}
.content_new {
  font-style: oblique;
  font-size: 12px;
  color: #ff5f5f;
}
.content_item:hover {
  background: #e6e6e6;
  color: #ff5f5f;
}
</style>