<template>
  <div class="side-bar">
    <a-menu
      :default-selected-keys="[activedName]"
      :selected-keys="[activedName]"
      mode="inline"
      theme="dark"
      :inline-collapsed="isCollapse"
    >
      <a-menu-item class="side-bar-logo">
        <a-icon
          type="appstore"
          theme="filled"
          :style="{ color: 'rgb(18, 150, 219)' }"
        />
        <span>测试后台</span>
      </a-menu-item>
      <template v-for="item in routes">
        <a-menu-item
          v-if="!item.isShowFirstLevel && !item.hidden"
          :key="item.children[0].name"
        >
          <router-link :to="item.path">
            <a-icon
              v-if="item.children[0].meta.icon"
              :type="item.children[0].meta.icon"
            />
            <span>{{ item.children[0].meta.title }}</span>
          </router-link>
        </a-menu-item>
        <template v-else-if="item.isShowFirstLevel">
          <sub-menu
            :key="item.name"
            :menu-info="item"
            :base-path="item.path"
          ></sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from "ant-design-vue";
import { routes } from "@/router/router";
const SubMenu = {
  template: `
              <a-sub-menu v-if="!menuInfo.hidden" :key="menuInfo.name" v-bind="$props" v-on="$listeners">
                <span class="slot-title" slot="title">
                  <a-icon v-if="menuInfo.meta.icon" :type="menuInfo.meta.icon" />
                  <span>{{ menuInfo.meta.title }}</span>
                </span>
                <template v-for="itemSon in menuInfo.children">
                  <a-menu-item v-if="!itemSon.children && !itemSon.hidden" :key="itemSon.name">
                    <router-link :to="basePath + '/' + itemSon.path">
                      <a-icon v-if="itemSon.meta.icon" :type="itemSon.meta.icon" />
                      <span>{{ itemSon.meta.title }}</span>
                    </router-link>
                  </a-menu-item>
                  <sub-menu v-else :key="itemSon.name" :menu-info="itemSon" :base-path="basePath + '/' + itemSon.path"></sub-menu>
                </template>
              </a-sub-menu>
            `,
  name: "SubMenu",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    basePath: {
      type: String,
      default: "",
    },
  },
};

export default {
  name: "SideBar",
  components: {
    SubMenu,
  },
  data() {
    return {
      routes,
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.status.isCollapse;
    },
    activedName() {
      const { name } = this.$route;
      return name;
    },
  },
};
</script>

<style lang="less">
.side-bar {
  &::-webkit-scrollbar {
    /* 滚动条样式 */
    width: 6px; /* 高宽分别对应横竖滚动条的尺寸 */
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条滑块 */
    border-radius: 6px;
    /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
    background: rgba(195, 195, 196, 0.5);
  }
  &::-webkit-scrollbar-track {
    /* 滚动槽 */
    /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
    border-radius: 5px;
    background: transparent;
  }

  .side-bar-logo {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-color: #012b53;

    i {
      margin-right: 10px;
      font-size: 24px;
    }

    span {
      color: #fff;
      font-size: 22px !important;
      font-weight: bold;
    }
    &:hover {
      background-color: #012b53 !important;
    }
  }

  .ant-menu {
    .ant-menu-item,
    .ant-menu-submenu-title {
      display: flex;
      align-items: center;
      height: 52px !important;
      margin: 0 !important;

      i {
        margin-right: 10px;
        font-size: 20px;
      }

      span {
        font-size: 15px;
      }
    }

    .ant-menu-submenu-title {
      .slot-title {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
