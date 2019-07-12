<template>
  <div class="contentdata">
    <div class="header">
      <OverView :data="overviews" />
    </div>
    <div class="ads mgt20">
      <SwiperAds :adImgs="adImgs" />
    </div>
    <div class="chartCon mgt20">
      <EChart name="整体统计"/>
    </div>
    <div class="dataDetail flexBetween">
      <div>数据明细</div>
      <div class="exportExcel">导出Excel</div>
    </div>
    <DataTable :data="dataTable" />
    <div class="mgt40">
      <Pagin />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OverView from "../compoents/OverviewData.vue";
import { IOverviewItem, ITableData } from "../store/Itype";
import SwiperAds from "../compoents/SwiperAds.vue";
import DataTable from "../compoents/DataTable.vue";
import Pagin from "../compoents/Pagin.vue";
import EChart from '../compoents/EChartData.vue'
export default Vue.extend({
  components: {
    OverView,
    SwiperAds,
    DataTable,
    Pagin,
    EChart
  },
  name: "ContentData",
  
  data() {
    let overviews: Array<IOverviewItem> = [
      {
        name: "总订阅",
        count: 1400
      },
      {
        name: "昨日新增",
        count: 100
      },
      {
        name: "昨日推荐",
        count: 258
      }
    ];

    let dataTable: ITableData = {
      rows: [
        {
          name: "发布日期",
          key: "date",
          render(row) {
            return row.date;
          }
        },
        {
          name: "阅读",
          key: "ydCount"
        },
        {
          name: "推荐",
          key: "tjCount"
        },
        {
          name: "跟贴",
          key: "gtCount"
        },
        {
          name: "分享",
          key: "fxCount"
        }
      ],
      rowDatas: [
        {
          id: "001",
          date: "2018-05-20",
          ydCount: 1000,
          tjCount: 1200,
          gtCount: 333,
          fxCount: 567
        },
        {
          id: "002",
          date: "2018-05-21",
          ydCount: 1400,
          tjCount: 1100,
          gtCount: 353,
          fxCount: 597
        },
        {
          id: "003",
          date: "2018-05-22",
          ydCount: 1100,
          tjCount: 1400,
          gtCount: 597,
          fxCount: 353
        },
        {
          id: "004",
          date: "2018-05-23",
          ydCount: 1400,
          tjCount: 1100,
          gtCount: 353,
          fxCount: 597
        },
        {
          id: "005",
          date: "2018-05-24",
          ydCount: 1000,
          tjCount: 1200,
          gtCount: 333,
          fxCount: 567
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