<template>
  <div class="accountinfo">
    <ContentManage :tabs="tabs">
      <div slot="accountInfo">
        <AccountRow>
          <div slot="left">帐号名称</div>
          <div slot="right">一点车</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">帐号类别</div>
          <div slot="right">自媒体</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">分类</div>
          <div slot="right">汽车</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">帐号图标</div>
          <div slot="right">
            <img src="../images/user-logo.png" style="width:150px;height:150px;" alt />
          </div>
        </AccountRow>
        <AccountRow>
          <div slot="left">帐号简介</div>
          <div slot="right">一点车，让您多懂一点车。</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">帐号详情</div>
          <div slot="right">
            一点车，让您多懂一点车的常识，在这里，
            您会看到汽车相关的知识，汽车日常保养，汽车多用小知识，汽车简单维修以及清洗保养等等。
          </div>
        </AccountRow>
        <AccountRow>
          <div slot="left">帐号背景图</div>
          <div slot="right">默认</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">类型</div>
          <div slot="right">个人</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">姓名</div>
          <div slot="right">李嘉桦</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">所在城市</div>
          <div slot="right">北京 － 北京</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">身份证号</div>
          <div slot="right">411424**********31</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">身份证照片</div>
          <div slot="right">已提交</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">联系手机</div>
          <div slot="right">185****2894 已验证</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">邮箱</div>
          <div slot="right">aui_cn@163.com</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">QQ/微信</div>
          <div slot="right">lizy_1025</div>
        </AccountRow>
        <AccountRow>
          <div slot="left">已有内容发布渠道</div>
          <div slot="right">https://weibo.com/525135676</div>
        </AccountRow>
        <AccountRow>
          <div slot="left"></div>
          <div slot="right" style="margin-top:30px">
            <div class="theme_btn">修改</div>
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
  name: "AccountInfo",
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
      isEdit: true
    };
  }
});
</script>

<style scoped>
.accountinfo {
  color: #666;
}
.account {
}
.account_int {
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  padding-left: 10px;
  color: #333;
}
</style>