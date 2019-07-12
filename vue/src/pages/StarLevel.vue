<template>
  <div class="starlevel">
    <ContentManage :tabs="tabs" :changeHeaderTab="changeHeaderTab">
      <div slot="carsign">
        <div class="ads mgt40">
          <SwiperAds :adImgs="adImgs" />
        </div>
        <div class="chartCon mgt20">
          <EChart name="车讯号指数" />
        </div>
        <div class="dataDetail flexBetween">
          <div>数据明细</div>
          <div class="exportExcel">导出Excel</div>
        </div>
        <DataTable :data="tableData" />
        <div class="mgt40">
          <Pagin />
        </div>
      </div>
      <div slot="carstarlevel">
        <div class="dataDetail flexBetween" style="border-top:1px solid #ddd">
          <div>积分明细</div>
          <div class="exportExcel">导出Excel</div>
        </div>
        <DataTable :data="starLevelTableData" />
        <div class="tableBorder">
          <Pagin />
        </div>
      </div>
    </ContentManage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentManage from "../compoents/ContentManage.vue";
import SwiperAds from "../compoents/SwiperAds.vue";
import { ITab, ITableData } from "../store/Itype";
import DataTable from "../compoents/DataTable.vue";
import EChart from "../compoents/EChartData.vue";
import Pagin from "../compoents/Pagin.vue";
export default Vue.extend({
  name: "StarLevel",
  components: {
    ContentManage,
    SwiperAds,
    EChart,
    DataTable,
    Pagin
  },
  methods: {
    changeHeaderTab(keyName) {
      console.log("in changeHeaderTab", keyName);

      for (let key in this.tabs) {
        if (key != keyName) {
          let info = this.tabs[key];
          info.isActive = false;
        } else {
          this.tabs[keyName].isActive = true;
        }
      }

      console.log("this.tabs==>", this.tabs);
    }
  },
  data() {
    let tabs: Array<ITab> = [
      {
        name: "车讯号指数",
        isActive: true,
        slotName: "carsign"
      },
      {
        name: "车讯号星级",
        isActive: false,
        slotName: "carstarlevel"
      }
    ];

    let tableData: ITableData = {
      rows: [
        {
          name: "健康度",
          key: "jiankangdu"
        },
        {
          name: "原创度",
          key: "yuanchuangdu"
        },
        {
          name: "活跃度",
          key: "huoyedu"
        },
        {
          name: "专业度",
          key: "zhuanyedu"
        },
        {
          name: "互动度",
          key: "hudongdu"
        }
      ],
      rowDatas: [
        {
          id: "001",
          jiankangdu: 100,
          yuanchuangdu: 200,
          huoyedu: 250,
          zhuanyedu: 55,
          hudongdu: 550
        },
        {
          id: "002",
          jiankangdu: 100,
          yuanchuangdu: 200,
          huoyedu: 250,
          zhuanyedu: 55,
          hudongdu: 550
        },
        {
          id: "003",
          jiankangdu: 100,
          yuanchuangdu: 200,
          huoyedu: 250,
          zhuanyedu: 55,
          hudongdu: 550
        },
        {
          id: "004",
          jiankangdu: 100,
          yuanchuangdu: 200,
          huoyedu: 250,
          zhuanyedu: 55,
          hudongdu: 550
        }
      ]
    };
    let starLevelTableData: ITableData = {
      rows: [
        {
          name: "日期",
          key: "date"
        },
        {
          name: "积分",
          key: "score"
        },
        {
          name: "详情",
          key: "detail"
        }
      ],
      rowDatas: [
        {
          id: "001",
          date: "2018-05-20",
          score: 100,
          detail: 2011
        },
        {
          id: "002",
          date: "2018-05-21",
          score: 100,
          detail: 2011
        },
        {
          id: "003",
          date: "2018-05-22",
          score: 100,
          detail: 2011
        },
        {
          id: "004",
          date: "2018-05-23",
          score: 100,
          detail: 2011
        },
        {
          id: "005",
          date: "2018-05-24",
          score: 100,
          detail: 2011
        },
        {
          id: "006",
          date: "2018-05-25",
          score: 100,
          detail: 2011
        }
      ]
    };
    return {
      tabs,
      tableData,
      starLevelTableData,
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"]
    };
  }
});
</script>

<style scoped>
.starlevel {
  color: #666;
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
.star_level_con {
  border: 1px solid #ddd;
}
.tableBorder{
  width: 100%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-top: 0px;
  padding-top: 25px;
}
</style>