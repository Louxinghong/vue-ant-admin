<template>
  <div class="layout" :class="{ isCollapse: isCollapse }">
    <div class="left-container">
      <side-bar></side-bar>
    </div>
    <div class="right-container">
      <nav-bar></nav-bar>
      <main-container></main-container>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/side-bar/side-bar.vue";
import NavBar from "./components/nav-bar/nav-bar.vue";
import MainContainer from "./components/main-container/main-container.vue";

export default {
  name: "Layout",
  components: {
    SideBar,
    NavBar,
    MainContainer,
  },
  computed: {
    isCollapse() {
      return this.$store.state.status.isCollapse;
    },
  },
};
</script>

<style lang="less">
@isCollapse: 80px;
@notCollapse: 250px;

.layout {
  width: 100%;
  height: 100%;

  .left-container {
    position: fixed;
    width: @notCollapse;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.3s;
    z-index: 999;

    .side-bar {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background-color: #001529;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

      .ant-menu {
        transition: all 0.3s;
      }
    }
  }

  .right-container {
    position: relative;
    height: 100%;
    margin-left: @notCollapse;
    transition: all 0.3s;

    .nav-bar {
      position: relative;
      width: 100%;
    }

    .main-container {
      position: relative;
      width: 99.7%;
      height: calc(100% - 88px);
      padding: 10px 15px;
    }
  }

  &.isCollapse {
    .left-container {
      width: @isCollapse;

      i {
        &:nth-child(1) {
          font-size: 24px !important;
        }
        &:not(:first-child) {
          font-size: 20px !important;
        }
      }
    }

    .right-container {
      margin-left: @isCollapse;
    }
  }
}
</style>
