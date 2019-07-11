<template>
  <div>
    <div class="public_type">
      <div class="type_cons">
        <ul class="type_ul">
          <li
            v-for="(info,index) in tabs"
            :class="info.isActive?'type_active':''"
            :key="index"
            @click="changeTab(index)"
          >{{info.name}}</li>
        </ul>
        <slot :name="extSoltName"></slot>
      </div>
    </div>
    <div class="contents">
      <div v-for="(item,key) in tabs" :key="key" v-show="item.isActive">
        <slot :name="item.slotName"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["tabs", "extSoltName", "changeHeaderTab"],
  methods: {
    changeTab(key) {
      console.log("key==>", key);
      if (this.$props.changeHeaderTab) {
        this.$props.changeHeaderTab(key);
      }
    }
  },
  computed: {
    contentSlotName() {
      let resName = "";
      for (const key in this.$props.tabs) {
        console.log("in contentSlotName key==>", key, this.$props.tabs);
        let info = this.$props.tabs[key];
        console.log("info==============>", info);

        if (info.isActive) {
          resName = info.slotName;
          break;
        }
      }
      console.log("resName==>", resName);

      return resName;
    }
  }
});
</script>

<style scoped>
.type_cons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d0d0d0;
  margin-bottom: 20px;
}
.type_info {
  color: #999;
}
.type_ul {
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.type_ul li {
  list-style: none;
  display: inline-block;
  height: 47px;
  line-height: 47px;
  padding: 0px 30px;
  font-size: 16px;
  color: #666;
  z-index: 2;
  cursor: pointer;
}
.type_active {
  border-bottom: 2px solid #ff5f5f;
}
</style>