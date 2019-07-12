<template>
  <div class="echart_con">
    <div class="chartHeader">
        {{name}}
        <span class="chart_active">7天</span>|
        <span>14天</span>|
        <span>30天</span>
      </div>
      <div id="echartContainer"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
let echarts = require("echarts");
export default Vue.extend({
  props:["name"],
  name: "EChart",
  mounted() {
    var myChart = echarts.init(document.getElementById("echartContainer"));
    // 绘制图表
    myChart.setOption({
      title: { text: "数据展示" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
});
</script>

<style scoped>
.chartHeader {
  width: 100%;
  height: 50px;
  background: #f8f8f8;
  line-height: 50px;
  padding-left: 20px;
  color: #666;
  font-size: 16px;
  box-sizing: border-box;
}
.chartHeader span {
  font-size: 14px;
  margin-right: 10px;
  color: #29adeb;
  cursor: pointer;
}
.chart_active {
  color: #ff5f5f !important;
}
.chartHeader > span:first-child {
  margin-left: 10px;
}
#echartContainer {
  width: 100%;
  height: 500px;
}
</style>