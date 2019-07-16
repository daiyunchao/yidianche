<template>
  <div class="menu_helper">
    <ul>
      <li
        v-for="item in menus"
        :class="item.isActive?'active':''"
        :key="item.cnName"
        @click="goPage(item,item.routerName)"
        :style="item.isDisabled?{color:'#999',cursor:'auto'}:''"
        @mousemove="changeActive(item.cnName)"
        @mouseout="changeActiveLeave(item.cnName)"
      >{{item.cnName}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Menu",
  data() {
    return {
      menus: [
        {
          cnName: "热门问题",
          isActive: true,
          isCur: true,
          isDisabled: false,
          routerName: "/helper/index"
        },
        {
          cnName: "账号问题",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/accountquestion"
        },
        {
          cnName: "入驻审核",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/ruzhuwenti"
        },
        {
          cnName: "主体修改",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/zhutixiugai"
        },
        {
          cnName: "资料修改",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/zhiliaoxiugai"
        },
        {
          cnName: "账号解封与冻结",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/zhanghaojiedong"
        },
        {
          cnName: "账号重名/侵权",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/zhanghaochongming"
        },
        {
          cnName: "文章解锁",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/wenzhangjiesuo"
        },
        {
          cnName: "内容审核",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/neirongshenhe"
        },
        {
          cnName: "内容举报",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/neirongjubao"
        },
        {
          cnName: "违规处罚",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/weiguichufa"
        },
        {
          cnName: "账号信誉度",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/zhanghaoxinyu"
        },
        {
          cnName: "星级等级",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/xingjidengji"
        },
        {
          cnName: "相关权益",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/xiangguanquanyi"
        },
        {
          cnName: "合作洽谈",
          isActive: false,
          isDisabled: false,
          routerName: "/helper/hezuoqiantan"
        }
      ]
    };
  },
  methods: {
    changeActive(name) {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        const item = menu;

        if (item.cnName == name) {
          if (item.isDisabled) {
            break;
            break;
          }
          item.isActive = true;
        } else {
          if (!item.isCur) {
            item.isActive = false;
          }
        }
      }
    },
    removeCur() {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        const item = menu;
        item.isCur = false;
      }
    },
    changeActiveLeave() {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        const item = menu;
        if (!item.isCur) {
          item.isActive = false;
        }
      }
    },
    goPage(menuItem, routerName) {
      console.log("this.$router===>", this.$router);
      if (menuItem.isDisabled) {
        return;
      }
      this.removeCur();
      menuItem.isCur = true;
      this.$router.push(routerName);
    }
  }
});
</script>

<style scope>
.menu_helper {
  background: white;
  width: 215px;
  height: 100%;
  /* text-align: center; */
  color: #666;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.li_content {
  width: 100px;
}
.menu_helper li:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.menu_helper li {
  list-style: none;
  height: 40px;
  line-height: 20px;
  display: flex;
  /* justify-content: center; */
  padding-left: 20px;
  align-items: center;
  padding-right: 15px;
  translate: 1s;
  cursor: pointer;
  transition: color 0.5s;
}

.active {
  background: #ff6565;
  color: white;
}
</style>
