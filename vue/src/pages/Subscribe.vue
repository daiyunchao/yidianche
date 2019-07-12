<template>
  <div class="subscribe">
    <div class="header">
      <OverView :data="overviews" />
    </div>
    <div class="ads mgt20">
      <SwiperAds :adImgs="adImgs" />
    </div>
    <div class="chartCon mgt20">
      <div class="chartHeader">
        详细数据
        <span>7天</span>|
        <span>14天</span>|
        <span>30天</span>
      </div>
      <div id="echartContainer"></div>
    </div>
    <div class="dataDetail flexBetween">
      <div>数据明细</div>
      <div class="exportExcel">导出Excel</div>
    </div>
    <DataTable :data="dataTable" />
    <div class="mgt40">
      <Pagin/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OverView from "../compoents/OverviewData.vue";
import { IOverviewItem } from "../store/Itype";
import SwiperAds from "../compoents/SwiperAds.vue";
import DataTable from "../compoents/DataTable.vue";
import {ITableData} from '../store/Itype';
import Pagin from '../compoents/Pagin.vue';
let echarts = require("echarts");
export default Vue.extend({
  name: "Subscribe",
  components: {
    OverView,
    SwiperAds,
    DataTable,
    Pagin
  },
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
  },
  data() {
    let overviews: Array<IOverviewItem> = [
      {
        name: "总订阅",
        count: 100
      },
      {
        name: "昨日新增",
        count: 10
      }
    ];

    let dataTable:ITableData = {
      rows: [
        {
          name: "日期",
          key: "date",
          render(row) {
            return row.date;
          }
        },
        {
          name: "新增订阅",
          key: "addCount",
          render(row) {
            return row.addCount;
          }
        }
      ],
      rowDatas: [
        {
          id:"001",
          date: "2018-05-20",
          addCount: 1000
        },
        {
          id:"002",
          date: "2018-05-21",
          addCount: 2000
        },
        {
          id:"003",
          date: "2018-05-22",
          addCount: 5000
        },
        {
          id:"004",
          date: "2018-05-23",
          addCount: 6000
        },
        {
          id:"005",
          date: "2018-05-24",
          addCount: 10
        }
      ]
    };
    return {
      overviews,
      dataTable,
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"]
    };
  }
});
</script>

<style scoped>
.subscribe {
  color: #666;
}
.header {
  width: 100%;
  background: #f4f4f4;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chartCon {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #ddd;
}
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
  cursor: pointer;
}
.chartHeader > span:first-child {
  margin-left: 10px;
}
#echartContainer {
  width: 100%;
  height: 500px;
}
.dataDetail {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #f8f8f8;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: 0px;
}
.dataDetail > div {
  padding: 0 20px;
  font-size: 14px;
}
.exportExcel {
  color: #29adeb;
  cursor: pointer;
}
</style>