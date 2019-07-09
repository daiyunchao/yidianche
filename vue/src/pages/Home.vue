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
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../images/ad1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/ad2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/ad3.jpg" alt />
        </swiper-slide>
      </swiper>
    </div>
    <div class="home_list"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default Vue.extend({
  name: "Home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay:true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600 
      }
    };
  },

  methods: {}
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
  transition: background-image 1s ease-in-out;
}
.home_ads img {
  width: 100%;
}
</style>

