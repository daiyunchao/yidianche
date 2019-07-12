<template>
  <div class="publish">
    <ContentManage :tabs="tabs" extSoltName="extInfo" :changeHeaderTab="changeHeaderTab">
      <div slot="extInfo">
        <div class="type_info">
          今日发布数量:&nbsp;&nbsp;
          <span class="marginR5 theme_color">0</span>/6
          <span class="theme_color">发文规范</span>
        </div>
      </div>
      <div slot="publish_article">
        <div class="publish_article">
          <Toast>标题字数需在11字到30字之间。</Toast>
          <div class="title_con">
            <input type="text" class="title_txt" placeholder="请输入标题，为了更好的展示效果，建议标题字数在30个汉字以内" />
            <div class="txt_num_ts">
              <span class="theme_color marginR5">0</span>/30
            </div>
          </div>
          <div class="html_editor">
            <Editor />
          </div>
          <div class="article_type">
            <div class="flex_label">分类:</div>
            <div class="flex_content">
              <select name id class="select">
                <option value="01">分类一</option>
              </select>
              <select name id class="select">
                <option value="01">分类二</option>
              </select>
            </div>
          </div>
          <div class="article_img">
            <div class="flex_label">封面:</div>
            <div class="flex_content">
              <div class="img_con">
                <img src="../images/noimg.gif" alt />
              </div>
              <input class="file_upload" type="file" name="img_upload" id="img_upload" />
              <button class="upload_btn" @click="uploadImg">上传图片</button>
              <span class="upload_text">图片尺寸建议：800*400 图片大小不超过1MB</span>
            </div>
          </div>
          <div class="btns">
            <div class="flex_label">&nbsp;</div>
            <div class="flex_content">
              <div class="publish_btn send">发布</div>
              <div class="publish_btn drash">保存草稿</div>
            </div>
          </div>
        </div>
      </div>
      <div slot="publish_imgs">
        <div class="public_imgs">
          <Toast>标题字数需在11字到30字之间。</Toast>
          <div class="cloumn">
            <div class="flex_label">标题</div>
            <div class="flex_content">
              <div class="txt_con">
                <input type="text" class="title_txt" placeholder="请输入标题，为了更好的展示效果，建议标题字数在30个汉字以内" />
                <div class="txt_num_ts">
                  <span class="theme_color marginR5">0</span>/30
                </div>
              </div>
            </div>
          </div>
          <div class="cloumn">
            <div class="flex_label">描述</div>
            <div class="flex_content">
              <div class="txt_con">
                <input type="text" class="title_txt" placeholder="请输入描述，统一描述" />
                <div class="txt_num_ts">
                  <span class="theme_color marginR5">0</span>/30
                </div>
              </div>
            </div>
          </div>
          <div class="article_img">
            <div class="flex_label">封面</div>
            <div class="flex_content">
              <div class="img_con">
                <img src="../images/noimg.gif" alt />
              </div>
              <input class="file_upload" type="file" name="img_upload" id="img_upload" />
              <button class="upload_btn" @click="uploadImg">上传图片</button>
              <span class="upload_text">图片尺寸建议：800*400 图片大小不超过1MB</span>
            </div>
          </div>
          <div class="btns">
            <div class="flex_label">&nbsp;</div>
            <div class="flex_content">
              <div class="publish_btn send">发布</div>
              <div class="publish_btn drash">保存草稿</div>
            </div>
          </div>
        </div>
      </div>
    </ContentManage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Editor from "../compoents/TinyEditor.vue";
import { ITab } from "../store/Itype";
import ContentManage from "../compoents/ContentManage.vue";
import Toast from "../compoents/Toast.vue";
export default Vue.extend({
  data() {
    let publish_article: ITab = {
      name: "发布文章",
      isActive: true,
      slotName: "publish_article"
    };

    let publish_imgs: ITab = {
      name: "发布图集",
      isActive: false,
      slotName: "publish_imgs"
    };
    return {
      tabs: {
        publish_article,
        publish_imgs
      }
    };
  },
  components: {
    Editor,
    ContentManage,
    Toast
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
    },
    uploadImg() {
      document.getElementById("img_upload").click();
    }
  }
});
</script>

<style scoped>
.type_cons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d0d0d0;
}
.type_info {
  color: #999;
}
.type_ul {
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.type_ul li {
  list-style: none;
  display: inline-block;
  height: 47px;
  line-height: 47px;
  padding: 0px 30px;
  font-size: 16px;
  color: #666;
  z-index: 2;
  cursor: pointer;
}
.title_con {
  width: 100%;
  margin-top: 15px;
  position: relative;
}
.txt_con {
  width: 100%;
  position: relative;
}
.title_txt {
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: all 0.5s;
}
.title_txt:focus {
  border-color: #ff5f5f;
}
.txt_num_ts {
  position: absolute;
  right: 5px;
  top: 0px;
  height: 38px;
  line-height: 38px;
  color: #999;
}
.type_active {
  border-bottom: 2px solid #ff5f5f;
}
.contents {
  margin-top: 20px;
}
.html_editor {
  margin-top: 20px;
  width: 100%;
  height: 500px;
}
.article_type {
  height: 35px;
  line-height: 35px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flex_label {
  flex: 1;
  color: #666;
  font-size: 16px;
  padding-left: 20px;
}
.flex_content {
  flex: 9;
}
.article_select {
  width: 115px;
  height: 35px;
  border: 1px solid #d0d0d0;
  margin-right: 10px;
  border-radius: 5px;
}
.article_img {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.img_con {
  width: 200px;
  height: 152px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
}
.file_upload {
  position: absolute;
  top: -100px;
}
.upload_btn {
  margin-top: 20px;
  width: 75px;
  height: 30px;
  color: #666;
  background: rgb(240, 240, 240);
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  outline: none;
  font-size: 12px;
  box-shadow: 2px 1px 1px #888888;
  cursor: pointer;
}
.upload_text {
  color: #999;
  margin-left: 10px;
}
.btns {
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.publish_btn {
  width: 140px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ff5f5f;
  text-align: center;
  line-height: 30px;
  display: inline-block;
}
.send {
  background: #ff5f5f;
  color: white;
  margin-right: 30px;
}
.drash {
  background: white;
  color: #ff5f5f;
}
.cloumn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
</style>