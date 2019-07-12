<template>
  <div class="datatable">
    <div class="data_item data_item_header flexCenter">
      <div v-for="(cloumn) in data.rows" :key="cloumn.key">{{cloumn.name}}</div>
    </div>
    <div class="data_item flexCenter" v-for="(rowData) in data.rowDatas" :key="rowData.id">
      <div v-for="(cloumn) in data.rows" :key="`item_${cloumn.key}`">{{getValue(cloumn,rowData)}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"],
  name: "DataTable",
  methods: {
    getValue(cloumn, rowData) {
      if (cloumn["render"]) {
        return cloumn["render"](rowData);
      } else {
        return rowData[cloumn["key"]];
      }
    }
  }
});
</script>

<style scoped>
.datatable {
  width: 100%;
  /* border: 1px solid #ddd; */
}
.data_item_header {
  font-weight: 600;
  /* border-top: 0px; */
}
.data_item_header > div {
  background-color: #edf7ff;
}
.data_item_header > div:hover {
  background: #edf7ff !important;
}

.data_item {
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #ddd;
  border-top: 0px;
}

.data_item > div {
  flex: 1;
  border-right: 1px solid #ddd;
}
.data_item > div:last-child {
  border-right: 0px;
}
.data_item > div:hover {
  background: #ddd;
}
</style>