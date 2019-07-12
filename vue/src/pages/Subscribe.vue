<template>
  <div class="subscribe">
    <div class="header">
      <OverView :data="overviews" />
    </div>
    <div class="ads mgt20">
      <SwiperAds :adImgs="adImgs" />
    </div>
    <div class="chartCon mgt20">
      <EChart name="详情数据"/>
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
import { IOverviewItem,ITableData } from "../store/Itype";
import SwiperAds from "../compoents/SwiperAds.vue";
import DataTable from "../compoents/DataTable.vue";
import Pagin from '../compoents/Pagin.vue';
import EChart from '../compoents/EChartData.vue';
let echarts = require("echarts");
export default Vue.extend({
  name: "Subscribe",
  components: {
    OverView,
    SwiperAds,
    DataTable,
    Pagin,
    EChart
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