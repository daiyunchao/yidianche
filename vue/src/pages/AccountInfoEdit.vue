<template>
  <div class="accountinfoedit">
    <ContentManage :tabs="tabs">
      <div slot="accountInfo">
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
              <a href class="theme_color link" >《车讯号媒体开放平台注册协议》</a>
            </span>
          </div>
        </AccountRow>
        <AccountRow :isEdit="isEdit">
          <div slot="left"></div>
          <div slot="right">
            <div class="theme_btn">保存</div>
          </div>
        </AccountRow>
      </div>
    </ContentManage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentManage from "../compoents/ContentManage.vue";
import AccountRow from "../compoents/AccountRow.vue";
import { ITab } from "../store/Itype";
export default Vue.extend({
  name: "AccountInfoEdit",
  components: {
    ContentManage,
    AccountRow
  },
  data() {
    let tabs: Array<ITab> = [
      {
        name: "帐号设置",
        isActive: true,
        slotName: "accountInfo"
      }
    ];
    return {
      tabs,
      isEdit: true,
      name: "一点车",
      desc: "一点车,让你更懂一点车",
      user_name: "李嘉华",
      user_idnumber: "411424199108070665",
      user_phone: "13980002336",
      user_email: "aui_cn@163.com",
      user_contact: "super_storm",
      user_tj: "大屁股"
    };
  }
});
</script>

<style scoped>
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
.select {
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