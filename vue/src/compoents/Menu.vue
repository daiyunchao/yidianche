<template>
  <div class="menu">
    <ul class="menu_index">
      <li class="active">
        <i class="ydc-icon ydc-icon-home fl"></i>首页
      </li>
      <li>
        <i class="ydc-icon ydc-icon-find fl"></i>发布
      </li>
    </ul>
    <ul class="meun_manage">
      <li style="color:#999">
        <i class="ydc-icon ydc-icon-file fl"></i>管理
      </li>
      <li>内容管理</li>
      <li>内容同步</li>
      <li>素材管理</li>
    </ul>
    <ul class="meun_manage">
      <li style="color:#999">
        <i class="ydc-icon ydc-icon-record fl"></i>数据
      </li>
      <li>订阅数据</li>
      <li>内容数据</li>
      <li>指数星级</li>
    </ul>
    <ul class="meun_manage">
      <li style="color:#999">
        <i class="ydc-icon ydc-icon-set fl"></i>设置
      </li>
      <li>账号信息</li>
      <li>账号状态</li>
    </ul>
    <ul class="meun_manage">
      <li style="color:#999">
        <i class="ydc-icon ydc-icon-customer fl"></i>客服
      </li>
      <li>在线客服</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Menu"
});
</script>

<style scope>
.menu {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #666;
  font-size: 14px;
  padding-top: 20px;
}
.menu_index{
  border-top: 0px !important;
}
.menu ul {
  padding: 15px 0 15px;
  border-top: 1px solid #ddd;
}
.menu li {
  list-style: none;
  height: 40px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
}

.active {
  background: #ff6565;
  color: white;
}
</style>
