<template>
  <div class="menu">
    <ul v-for="menu in menus" :key="menu.key" :class="menu.name">
      <li
        v-for="item in menu.items"
        :class="item.isActive?'active':''"
        :key="item.cnName"
        :style="item.isDisabled?{color:'#999',cursor:'auto'}:''"
        @click="goPage(item,item.routerName)"
        @mousemove="changeActive(item.cnName)"
        @mouseout="changeActiveLeave(item.cnName)"
      >
        <i :class="item.icon"></i>
        {{item.cnName}}
      </li>
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
          name: "menu_index",
          key: "index",
          items: [
            {
              cnName: "首页",
              icon: "ydc-icon ydc-icon-home fl",
              isActive: true,
              isCur: true,
              isDisabled: false,
              routerName: "/admin/home"
            },
            {
              cnName: "发布",
              icon: "ydc-icon ydc-icon-find fl",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/publish"
            }
          ]
        },
        {
          name: "meun_manage",
          key: "manage",
          items: [
            {
              cnName: "管理",
              icon: "ydc-icon ydc-icon-file fl",
              isActive: false,
              isDisabled: true
            },
            {
              cnName: "内容管理",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/articlemanage"
            },
            {
              cnName: "内容同步",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/articlesync"
            },
            {
              cnName: "素材管理",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/assets"
            }
          ]
        },
        {
          name: "meun_manage",
          key: "data",
          items: [
            {
              cnName: "数据",
              icon: "ydc-icon ydc-icon-record fl",
              isActive: false,
              isDisabled: true
            },
            {
              cnName: "订阅数据",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/subscribe"
            },
            {
              cnName: "内容数据",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/contentdata"
            },
            {
              cnName: "指数星级",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/starlevel"
            }
          ]
        },
        {
          name: "meun_manage",
          key: "setting",
          items: [
            {
              cnName: "设置",
              icon: "ydc-icon ydc-icon-set fl",
              isActive: false,
              isDisabled: true
            },
            {
              cnName: "账号信息",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/accountinfo"
            },
            {
              cnName: "账号状态",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/admin/accountstatus"
            }
          ]
        },
        {
          name: "meun_manage",
          key: "kefu",
          items: [
            {
              cnName: "客服",
              icon: "ydc-icon ydc-icon-customer fl",
              isActive: false,
              isDisabled: true
            },
            {
              cnName: "在线客服",
              icon: "",
              isActive: false,
              isDisabled: false,
              routerName: "/helper/index"
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeActive(name) {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        for (let j = 0; j < menu.items.length; j++) {
          const item = menu.items[j];

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
      }
    },
    removeCur() {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        for (let j = 0; j < menu.items.length; j++) {
          const item = menu.items[j];
          item.isCur = false;
        }
      }
    },
    changeActiveLeave() {
      for (let index = 0; index < this.menus.length; index++) {
        const menu = this.menus[index];
        for (let j = 0; j < menu.items.length; j++) {
          const item = menu.items[j];
          if (!item.isCur) {
            item.isActive = false;
          }
        }
      }
    },
    goPage(menuItem, routerName) {
      console.log("this.$router===>", this.$router);

      if (menuItem.isDisabled) {
        return;
      }
      if (`/helper/index`==routerName) {
        this.$root_router.push(`/helper/index`);
      } else {
        this.removeCur();
        menuItem.isCur = true;
        this.$router.push(routerName);
      }
    }
  }
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
.menu_index {
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
  translate: 1s;
  cursor: pointer;
  transition: color 0.5s;
}

.active {
  background: #ff6565;
  color: white;
}
</style>
