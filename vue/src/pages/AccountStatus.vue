<template>
  <div class="accountstatus">
    <ContentManage :tabs="tabs">
      <div slot="accountStatus" class="mgt40">
        <CommonTable :data="tableData"></CommonTable>
        <div class="pagion mgt40">
          <Pagin></Pagin>
        </div>
        <div class="ads mgt40">
          <SwiperAds :adImgs="adImgs" />
        </div>
      </div>
    </ContentManage>
    <div style="display:none">
      <img src="../images/x2.png" alt />
      <img src="../images/x1.png" alt />
      <img src="../images/ad1.jpg" alt />
      <img src="../images/ad2.jpg" alt />
      <img src="../images/ad3.jpg" alt />
      <img src="../images/img-ad1.jpg" alt />
      <img src="../images/img-ad2.jpg" alt />
      <img src="../images/img-ad3.jpg" alt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentManage from "../compoents/ContentManage.vue";
import CommonTable from "../compoents/CommonTable.vue";
import Pagin from "../compoents/Pagin.vue";
import SwiperAds from "../compoents/SwiperAds.vue";
import { ITab, ITableData } from "../store/Itype";

export default Vue.extend({
  name: "AccountStatus",
  components: {
    ContentManage,
    CommonTable,
    Pagin,
    SwiperAds
  },
  data() {
    let tabs: Array<ITab> = [
      {
        name: "账号状态",
        isActive: true,
        slotName: "accountStatus"
      }
    ];
    let tableData: ITableData = {
      rows: [
        {
          name: "特权",
          key: "tequan"
        },
        {
          name: "状态",
          key: "zhuangtai"
        },
        {
          name: "所属星级",
          key: "xingji",
          render: row => {
            switch (row.xingji) {
              case 1:
                return "<div class='flexCenter stars'><img src='../images/x2.png'><img src='../images/x1.png'><img src='../images/x1.png'><img src='../images/x1.png'><img src='../images/x1.png'></div>";
                break;
              case 2:
                return "<div class='flexCenter stars'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x1.png'><img src='../images/x1.png'><img src='../images/x1.png'></div>";
                break;
              case 3:
                return "<div class='flexCenter stars'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x1.png'><img src='../images/x1.png'></div>";
                break;
              case 4:
                return "<div class='flexCenter stars'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x1.png'></div>";
                break;
              default:
                return "<div class='flexCenter stars'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'><img src='../images/x2.png'></div>";
                break;
            }
          }
        }
      ],
      rowDatas: [
        {
          id: "001",
          tequan: "跟帖",
          zhuangtai: "未开通",
          xingji: 1
        },
        {
          id: "002",
          tequan: "功能实验室",
          zhuangtai: "未开通",
          xingji: 2
        },
        {
          id: "003",
          tequan: "分享",
          zhuangtai: "未开通",
          xingji: 3
        },
        {
          id: "004",
          tequan: "问吧",
          zhuangtai: "未开通",
          xingji: 4
        },
        {
          id: "005",
          tequan: "跟贴置顶",
          zhuangtai: "未开通",
          xingji: 5
        }
      ]
    };
    return {
      tabs,
      tableData,
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"]
    };
  }
});
</script>

<style scoped>
</style>