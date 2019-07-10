<template>
  <div>
    <div class="home_hz">
      <div class="home_hz_left">
        <div>
          <div>
            <span>总订阅</span>
            <div class="home_number">14</div>
          </div>
        </div>
        <div>
          <div>
            <span>总阅读</span>
            <div class="home_number">1400</div>
          </div>
        </div>
        <div>
          <div>
            <span>昨日阅读</span>
            <div class="home_number">140</div>
          </div>
        </div>
        <div>
          <div>
            <span>总数据指数</span>
            <div class="home_number">459</div>
          </div>
        </div>
      </div>
      <div class="home_hz_right">
        <div>
          <i class="ydc-icon-shu"></i>
          <div>发布</div>
        </div>
      </div>
    </div>
    <div class="home_ads">
      <SwiperAds :adImgs="adImgs" />
    </div>
    <div class="home_list">
      <MutlList :contents="contents" :changeTab="changeTab"></MutlList>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import SwiperAds from "../compoents/SwiperAds.vue";
import MutlList from "../compoents/MutlList.vue";
export default Vue.extend({
  name: "Home",
  components: {
    SwiperAds,
    MutlList
  },
  methods:{
    changeTab(key){
      for (const key in this.contents) {
        if (this.contents.hasOwnProperty(key)) {
          const item = this.contents[key];
          item.isActive=false;
        }
      }
      this.contents[key].isActive=true;
    }
  },
  data() {
    return {
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"],
      contents: {
        gonggao: {
          name: "公告",
          isActive: true,
          list: [
            {
              title:
                "一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）",
              isNew: true,
              time:'2017-04-17 10:00:00'
            },
            {
              title:
                "一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）",
              isNew: false,
              time:'2017-04-17 10:00:00'
            }
          ]
        },
        yidianchezixun: {
          name: "一点车资讯",
          isActive: false,
          list: [
            {
              title:
                "大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！",
              isNew: true,
              time:'2017-04-17 10:00:00'
            },
            {
              title: "在国内为什么丰田阿尔法加价那么厉害还是会有人买？",
              isNew: false,
              time:'2017-04-17 10:00:00'
            }
          ]
        }
      }
    };
  }
});
</script>
<style scoped>
.home_hz {
  width: 100%;
  display: flex;
}
.home_hz_left {
  flex: 5.5;
  background: #f4f4f4;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home_hz_left > div {
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

.home_hz_left > div::after {
  content: "";
  position: absolute;
  right: 0px;
  width: 1px;
  height: 50px;
  background: #ddd;
}
.home_hz_left > div:last-child::after {
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
.home_hz_left span {
  color: #757575;
  display: inline-block;
  padding: 10px 0px;
}
.home_hz_right {
  flex: 1;
  margin-left: 20px;
  background: #ff6565;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.home_ads {
  margin-top: 20px;
  width: 100%;
  height: 120px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.home_list {
  margin-top: 20px;
}
</style>

