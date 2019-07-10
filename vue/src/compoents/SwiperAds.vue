<template>
<div>
<swiper :options="swiperOption">
    <swiper-slide v-for="img in adImgs" :key="img">
      <img :src="img" alt />
    </swiper-slide>
  </swiper>
  <!-- 暂时解决devserver加载不到图片的问题 -->
  <div style="display:none">
    <img src="../images/ad1.jpg" alt="">
    <img src="../images/ad2.jpg" alt="">
    <img src="../images/ad3.jpg" alt="">
  </div>
</div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default Vue.extend({
  name: "SwiperAds",
  props: ["adImgs"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600
      }
    };
  }
});
</script>

<style scoped>
img {
  width: 100%;
}
</style>