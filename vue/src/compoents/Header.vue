<template>
  <div class="header">
    <div class="my_center">
      <div class="logo">
        <img src="../images/ydc-logo.png" alt />
      </div>
      <div class="user_info">
        <div class="user_info_base">
          <div class="user_info_head_pic">
            <img src="../images/photo.png" alt />
          </div>
          <div>
            <div class="user_info_nickname">张三</div>
            <div>
              <span class="user_info_account_status">账号审核中</span>
              <span>
                <i class="ydc-icon ydc-icon-mail user_info_mail"></i>12
              </span>
              <span class="user_info_exit">退出</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 70px;
  background: #2b2b2b;
}
.my_center {
  width: 1180px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 130px;
}
.logo img {
  width: 100%;
}
.user_info_nickname{
  font-size: 16px;
  padding-bottom: 5px;
}
.user_info_base {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
.user_info_head_pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
.user_info_head_pic img {
  width: 100%;
  border-radius: 50%;
}
.user_info_account_status {
  display: inline-block;
  font-size: 12px;
  padding: 2px 6px;
  background: #ff6565;
}
.user_info_mail {
  height: 12px;
}
.user_info_exit{
  display: inline-block;
  position: relative;
  margin-left: 10px;
}
.user_info_exit::before{
  content: '';
  position: absolute;
  left: -5px;
  width: 10px;
  height: 10px;
  bottom: 4px;
  border-left:1px solid #707070;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header"
});
</script>


