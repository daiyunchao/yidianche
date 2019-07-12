<template>
  <!-- 素材中心 -->
  <div class="arrets">
    <ContentManage :tabs="tabs" :changeHeaderTab="changeHeaderTab">
      <div slot="assetImgs">
        <Toast>搜索标题以及描述</Toast>
        <RowSearch placeholder="请输入关键词进行搜索"></RowSearch>
        <div class="countInfo flexBetween mgt20">
          <span>
            共&nbsp;
            <i class="theme_color">28</i>&nbsp;条内容
          </span>
          <Btn140>上传图片</Btn140>
        </div>
        <div class="list mgt40 flexStart">
          <AssetItem img="../images/img-ad0.jpg" name="cropper_image_152639"></AssetItem>
          <AssetItem img="../images/img-ad1.jpg" name="cropper_image_152639001"></AssetItem>
          <AssetItem img="../images/img-ad2.jpg" name="cropper_image_152639002"></AssetItem>
          <AssetItem img="../images/img-ad3.jpg" name="cropper_image_152639003"></AssetItem>
          <AssetItem img="../images/img-ad0.jpg" name="cropper_image_152639004"></AssetItem>
        </div>
        <div class="mgt40">
          <Pagin></Pagin>
        </div>
      </div>
      <div slot="assetVideos">
        <Toast>搜索视频标题以及描述</Toast>
        <RowSearch placeholder="请输入关键词进行搜索"></RowSearch>
        <div class="countInfo flexBetween mgt20">
          <span>
            共&nbsp;
            <i class="theme_color">7</i>&nbsp;条内容
          </span>
          <Btn140>上传视频</Btn140>
        </div>
        <div class="list mgt40 flexStart">
          <AssetItem :isVideo="true" img="../images/img-ad0.jpg" name="cropper_image_152639"></AssetItem>
          <AssetItem :isVideo="true" img="../images/img-ad1.jpg" name="cropper_image_152639001"></AssetItem>
          <AssetItem :isVideo="true" img="../images/img-ad2.jpg" name="cropper_image_152639002"></AssetItem>
          <AssetItem :isVideo="true" img="../images/img-ad3.jpg" name="cropper_image_152639003"></AssetItem>
          <AssetItem :isVideo="true" img="../images/img-ad0.jpg" name="cropper_image_152639004"></AssetItem>
        </div>
        <div class="mgt40">
          <Pagin></Pagin>
        </div>
      </div>
      <div style="display:none">
        <img src="../images/img-ad0.jpg" alt />
        <img src="../images/img-ad1.jpg" alt />
        <img src="../images/img-ad2.jpg" alt />
        <img src="../images/img-ad3.jpg" alt />
      </div>
    </ContentManage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ITab } from "../store/Itype";
import Toast from "../compoents/Toast.vue";
import ContentManage from "../compoents/ContentManage.vue";
import RowSearch from "../compoents/RowSearch.vue";
import Btn140 from "../compoents/Btn140.vue";
import AssetItem from "../compoents/AssetItem.vue";
import Pagin from "../compoents/Pagin.vue";
export default Vue.extend({
  components: {
    ContentManage,
    Toast,
    RowSearch,
    Btn140,
    AssetItem,
    Pagin
  },
  methods:{
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
    },
  },
  data() {
    let assetImgs: ITab = {
      name: "图片素材",
      isActive: true,
      slotName: "assetImgs"
    };

    let assetVideos: ITab = {
      name: "视频素材",
      isActive: false,
      slotName: "assetVideos"
    };
    return {
      tabs: {
        assetImgs,
        assetVideos
      }
    };
  }
});
</script>

<style scoped>
.arrets {
  color: #666;
}
.countInfo span {
  padding: 0 20px;
  font-size: 14px;
}
.list {
  flex-wrap: wrap;
  width: 110%;
}
</style>