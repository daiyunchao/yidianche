<template>
  <div class="register">
    <Header></Header>
    <div class="register_main">
      <div class="process_bar flexCenter">
        <div class="quan">
          <div class="quan_ms qun_active">登录邮箱账号</div>
        </div>
        <div :class="isShowSelectType||isShowInputMediaInfo?'tiao tiao_active':'tiao'"></div>
        <div class="quan">
          <div :class="isShowSelectType||isShowInputMediaInfo?'quan_ms qun_active':'quan_ms'">选择帐号类别</div>
        </div>
        <div :class="isShowInputMediaInfo?'tiao tiao_active':'tiao'"></div>
        <div class="quan">
          <div :class="isShowInputMediaInfo?'quan_ms qun_active':'quan_ms'">填写媒体信息</div>
        </div>
      </div>
      <div class="register_inputs mgt80" v-if="isShowLogin">
        <div class="user_email flexStart">
          <span class="tag">邮箱账号:</span>
          <input type="text" placeholder="通行证/账号" class="register_input" />
          <span class="register_info">
            请填写账号邮箱，作为登录帐号。
            <br />没有账号邮箱？
            <span class="forget">立即注册>></span>
          </span>
        </div>
        <div class="register_pwd flexStart">
          <span class="tag">密码:</span>
          <input type="text" placeholder="密码" class="register_input" />
          <span class="register_info">
            <span class="forget">忘记密码？</span>
          </span>
        </div>
        <div class="register_btn mgt20 flexStart">
          <div class="theme_btn divcenter" @click="loginIn">登录</div>
        </div>
      </div>

      <div class="register_select_type mgt80" v-if="isShowSelectType">
        <div class="flexCenter w800 divcenter">
          <div
            :class="mediaActive?'media select_item flex1 select_item_active':'media select_item flex1 '"
            @click="selectItem('media')"
          >
            <div class="select_item_img_con">
              <div class="select_item_img">
                <img src="../images/mt1.png" alt srcset />
                <div class="checked"></div>
              </div>
              <div class="media_name textCenter mgt20">媒体</div>
              <div class="media_detail">
                <span class="media_detail_text">适合报纸、杂志、电视台、网站等以内容生产为主，有国家新闻出版广电总局认可资质的媒体机构申请。</span>
              </div>
            </div>
          </div>
          <div
            :class="mediaSelfActive?'mediaself select_item flex1 select_item_active':'mediaself select_item flex1 '"
            @click="selectItem('media_self')"
          >
            <div class="select_item_img_con">
              <div class="select_item_img">
                <img src="../images/mt2.png" alt srcset />
                <div class="checked"></div>
              </div>
              <div class="media_name textCenter mgt20">自媒体</div>
              <div class="media_detail">
                <span class="media_detail_text">适合垂直领域专家、意见领袖、评论家等个人创作者或以内容生产为主的自媒体公司/机构申请。</span>
              </div>
            </div>
          </div>
          <div
            :class="orgActive?'org select_item flex1 select_item_active':'org select_item flex1 '"
            @click="selectItem('org')"
          >
            <div class="select_item_img_con">
              <div class="select_item_img">
                <img src="../images/mt3.png" alt srcset />
                <div class="checked"></div>
              </div>
              <div class="media_name textCenter mgt20">组织机构</div>
              <div class="media_detail">
                <span class="media_detail_text">适合党政机关、事业单位和各类公共场馆、公益机构、学校/培训机构、民间组织等申请。</span>
              </div>
            </div>
          </div>
          <div
            :class="companyActive?'company select_item flex1 select_item_active':'company select_item flex1 '"
            @click="selectItem('company')"
          >
            <div class="select_item_img_con">
              <div class="select_item_img">
                <img src="../images/mt4.png" alt srcset />
                <div class="checked"></div>
              </div>
              <div class="media_name textCenter mgt20">企业</div>
              <div class="media_detail">
                <span class="media_detail_text">适合企业、公司及其分支机构、旗下品牌等申请，品牌宣传，主要用于商业品牌推广等申请。</span>
              </div>
            </div>
          </div>
        </div>
        <div class="register_btn mgt20 flexStart">
          <div class="theme_btn divcenter" @click="selectTypeComplte">下一步</div>
        </div>
      </div>

      <div class="register_input_info mgt80" v-if="isShowInputMediaInfo">
        <AccountRow :isEdit="isEdit">
          <div slot="left">帐号名称:</div>
          <div slot="right">
            <input type="text" class="input" v-model="name" />
            <div class="item_info">请输入2至14字的帐号名称</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">账号简介:</div>
          <div slot="right">
            <input type="text" class="input input_desc" v-model="desc" />
            <div class="item_info">请输入2至14字的帐号简介</div>
          </div>
        </AccountRow>

        <AccountRow :isEdit="isEdit">
          <div slot="left">账号分类:</div>
          <div slot="right">
            <select name id class="input">
              <option value="娱乐">娱乐</option>
              <option value="汽车">汽车</option>
              <option value="情感">情感</option>
              <option value="美食">美食</option>
              <option value="时尚">时尚</option>
            </select>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">账号图标:</div>
          <div slot="right">
            <input type="file" name id style="margin-top:10px" autocomplete="off" />
            <div class="item_info">选取至少160*160尺寸的图片。请勿上传二维码或其他推广性质图片作为图标。</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">账号描述:</div>
          <div slot="right">
            <textarea name class="input input_texaare" id cols="30" rows="10"></textarea>
            <div class="item_info">请输入2至14字的帐号描述。</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">已有内容渠道及链接:</div>
          <div slot="right">
            <input type="text" class="input input_desc" v-model="desc" />
            <div class="item_info">例如已发布文章的网站地址、博客地址、微信号等，方便我们作为审核参考。</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">已有内容渠道截图:</div>
          <div slot="right">
            <input type="file" name id style="margin-top:10px" autocomplete="off" />
            <div class="item_info">截图中必须包含个人账号名或昵称等信息,支持.jpg.png格式，大小不超过5M。</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">姓名:</div>
          <div slot="right">
            <input type="text" class="input input_desc" v-model="user_name" />
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">身份证号:</div>
          <div slot="right">
            <input type="text" class="input input_desc" v-model="user_idnumber" />
            <div class="item_info">帐号信息填写需真实有效，如发现虚假以及非个人真实信息导致帐号收益无法提取，责任由帐号个人承担</div>
            <div class="ex_info">
              <p>提交本页信息后，使用当前账号登录客户端3.0版本</p>
              <p>点击「我的」-「实名认证」进行实名认证。</p>
            </div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">所在城市:</div>
          <div slot="right">
            <select name id class="input">
              <option value="北京">北京</option>
              <option value="北京">北京</option>
            </select>
            <select name id class="input">
              <option value="海淀区">海淀区</option>
              <option value="海淀区">海淀区</option>
            </select>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">联系手机:</div>
          <div slot="right">
            <input type="text" class="input" v-model="user_phone" />
            <div class="theme_btn" style="display:inline-block;">获取验证码</div>
            <div class="item_info">请输入手机号并验证</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">邮箱:</div>
          <div slot="right">
            <input type="text" class="input" v-model="user_email" />
            <div class="item_info">请使用自己日常使用邮箱便于接受相关信息</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">QQ/微信号:</div>
          <div slot="right">
            <input type="text" class="input" v-model="user_contact" />
            <div class="item_info">请输入常用QQ/微信号方便联系沟通</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left">推荐人:</div>
          <div slot="right">
            <input type="text" class="input" v-model="user_tj" />
            <div class="item_info">选填，若有网易员工推荐您入驻，请填写相应推荐码。</div>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left"></div>
          <div slot="right">
            <input type="checkbox" checked />
            <span>我已经阅读并同意</span>
            <span class="theme_color">
              <a href class="theme_color link">《车讯号媒体开放平台注册协议》</a>
            </span>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left"></div>
          <div slot="right" class="btns flexStart">
            <div class="white_btn mrt10" @click="goBack">上一步</div>
            <div class="theme_btn" @click="postRequest">提交申请</div>
          </div>
        </AccountRow>
      </div>
      <div class="mgt40 divcenter ads">
        <SwiperAds :adImgs="adImgs"></SwiperAds>
      </div>
    </div>
    <Footer></Footer>
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
import Header from "../compoents/Header.vue";
import Footer from "../compoents/Footer.vue";
import SwiperAds from "../compoents/SwiperAds.vue";
import AccountRow from "../compoents/AccountRow.vue";
export default Vue.extend({
  name: "Register",
  components: {
    Footer,
    Header,
    SwiperAds,
    AccountRow
  },
  data() {
    return {
      isEdit: true,
      isShowLogin: true,
      isShowSelectType: false,
      isShowInputMediaInfo: false,
      adImgs: ["../images/ad1.jpg", "../images/ad2.jpg", "../images/ad3.jpg"],
      name: "",
      desc: "",
      user_name: "",
      user_idnumber: "",
      user_phone: "",
      user_email: "",
      user_contact: "",
      user_tj: "",

      mediaActive: false,
      mediaSelfActive: false,
      orgActive: false,
      companyActive: false
    };
  },
  methods: {
    loginIn() {
      this.isShowLogin = false;
      this.isShowSelectType = true;
      this.isShowInputMediaInfo = false;
    },
    selectItem(typeName) {
      console.log("===>", typeName);

      this.mediaActive = false;
      this.mediaSelfActive = false;
      this.companyActive = false;
      this.orgActive = false;
      if (typeName == "media") {
        this.mediaActive = true;
      }
      if (typeName == "media_self") {
        this.mediaSelfActive = true;
      }
      if (typeName == "org") {
        this.orgActive = true;
      }
      if (typeName == "company") {
        this.companyActive = true;
      }
    },
    selectTypeComplte() {
      this.isShowLogin = false;
      this.isShowSelectType = false;
      this.isShowInputMediaInfo = true;
    },
    goBack(){
      this.loginIn();
    },
    postRequest(){
      this.$router.push({path:"/"})
    }
  }
});
</script>

<style scoped>
.mult_row {
  vertical-align: middle;
}

.ads {
  width: 900px;
  margin-top: 40px !important;
  padding-bottom: 40px !important;
}
.sing_row {
  line-height: 40px;
}

.select_item_img_con {
  margin-top: 20px;
}
.media_detail_text {
  font-size: 12px;
  color: #a1a1a1;
}
.media_name {
  font-size: 16px;
  color: #636363;
  margin-bottom: 20px;
}
.media_detail {
  padding-left: 10px;
  padding-right: 10px;
}
.checked {
  width: 26px;
  height: 26px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: url("../images/input-unchecked.png") center no-repeat;
  background-position: center;
  background-size: cover;
}
.select_item_img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: relative;
}
.select_item_img img {
  width: 100%;
}
.tag {
  display: inline-block;
  width: 200px;
  text-align: right;
  padding-right: 20px;
  color: #333;
  font-size: 16px;
}
.select_item {
  text-align: center;
  width: 175px;
  height: 240px;
  margin: 0 15px;
}
.select_item_active {
  background: rgb(248, 224, 227);
}
.select_item:hover {
  background: rgb(248, 224, 227);
}
.register_info {
  margin-left: 20px;
  display: inline-block;
  font-size: 12px !important;
  color: #a1a1a1;
}
.user_email {
  margin-bottom: 30px;
  line-height: 1.5;
}
.register_pwd {
  line-height: 1.5;
}

.forget {
  color: #29adeb;
  font-size: 12px !important;
  cursor: pointer;
}
.register_input {
  width: 320px;
  height: 40px;
  font-size: 14px;
  outline: none;
  padding-left: 10px;
  border: 1px solid #ccc;
  transition: border 0.5s;
}
.register_input:focus,
.register_input:hover {
  border: 1px solid #ff6980;
}
.register_inputs {
  width: 800px;
  margin: 0 auto;
  margin-top: 80px;
}
.register_inputs span {
  font-size: 16px;
}
.register_main {
  width: 1000px;
  min-height: 600px;
  margin: 20px auto;
  background: #f4f4f4;
}
.process_bar {
  width: 500px;
  margin: 0 auto;
  padding-top: 100px;
  position: relative;
}
.quan {
  width: 15px;
  height: 15px;
  border: 10px solid #f4f4f4;
  z-index: 5;
  margin-right: -15px;
  margin-left: -15px;
  border-radius: 50%;
  background: #ff6a81;
  position: relative;
}

.quan_ms {
  font-size: 16px;
  position: absolute;
  top: 40px;
  width: 100px;
  left: -50px;
  text-align: center;
  color: rgba(226, 80, 80, 0.3);
  font-weight: 100;
}
.qun_active {
  color: #ff6a81;
}
.tiao {
  margin-left: 5px;
  margin-right: 5px;
  background: #ffcacb;
  position: relative;
  height: 15px;
  width: 225px;
  transition: all 0.5s;
}
.tiao_active {
  background: #ff6a81;
}
.input {
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  padding-left: 10px;
  outline: none;
}
.item_info {
  margin-top: 10px;
  font-size: 12px;
  color: #a1a1a1;
}
.input_desc {
  width: 320px;
}

.input_texaare {
  width: 500px;
  height: 175px;
}
.ex_info {
  width: 350px;
  font-size: 12px;
  background: #fceded;
  padding: 10px 20px;
  margin-top: 20px;
  line-height: 2.2;
}
</style>