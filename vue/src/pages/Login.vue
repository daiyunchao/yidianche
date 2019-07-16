<template>
  <div class="login">
    <div class="login_mask"></div>
    <div class="logo">
      <img src="../images/ydc-logo.png" alt />
    </div>
    <div class="login_con">
      <div class="login_header">登录</div>
      <div class="login_row flexCenter">
        <div>
          <img src="../images/ph.png" alt />
        </div>
        <input type="text" placeholder="请输入邮箱账号" />
      </div>
      <div class="login_row flexCenter">
        <div>
          <img src="../images/pad.png" alt />
        </div>
        <input type="text" placeholder="请输入密码" />
      </div>
      <div class="ext_info">为了您的账号安全，请勿在公共电脑登录</div>
      <div class="ext_info flexBetween" style="margin-top:20px;">
        <div class="flexCenter login_opt">
          <input type="checkbox" checked class="marginR5" />十天内免登录
        </div>
        <div>忘记密码</div>
      </div>
      <div class="ext_info flexCenter">
        <div class="login_btn">登录</div>
      </div>
      <div class="flexCenter mgt40 question"><a class="link" @click="gotoRegister">立即注册</a> | <a href="" class="link">常见问题</a></div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "../compoents/Footer.vue";
export default Vue.extend({
  name: "Login",
  components: {
    Footer
  },
  methods:{
gotoRegister(){
  this.$router.push({path:"/register"});
}
  },
  computed: {}
});
</script>

<style scoped>
.login {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
.login_opt {
  color: #666;
}
.login_btn {
  width: 100%;
  margin-top: 20px;
  height: 40px;
  background: #ff3c5b;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: white;
}
.question, .question a{
  font-size: 12px;
  color: #999;
  padding: 0 10px;
}
.login_header {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 25px 0px;
}
.ext_info {
  font-size: 14px;
  width: 80%;
  margin: 0 auto;
  color: #666;
}
.login_row {
  position: relative;
  width: 80%;
  height: 40px;
  border: 1px solid #c5cddb;
  margin: 20px auto;
  box-sizing: border-box;
}
.login_row > div {
  width: 40px;
  height: 100%;
  border-right: 1px solid #c5cddb;
  text-align: center;
  vertical-align: middle;
  line-height: 47px;
}
.login_row img {
  width: 20px;
}
.login_row input {
  height: 37px;
  padding-left: 10px;
  border: 0px;
  flex-grow: 1;
  outline: none;
}
.login_mask {
  flex: 1;
  background: url("../images/body.jpg") center no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.login_con {
  width: 360px;
  height: 400px;
  position: absolute;
  right: 10%;
  top: 10%;
  background: #fff;
  border-radius: 5px;
}
.footer {
  position: absolute;
  bottom: 20px;
  width: 1000px;
  margin: 0 auto;
  left: 50%;
  margin-left: -500px;
  text-align: center;
  color: white !important;
}
.logo {
  width: 130px;
  height: 65px;
  position: absolute;
  top: 10%;
  left: 10%;
}
.logo > img {
  width: 100%;
}
</style>