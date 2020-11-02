<template>
  <div class="nav-bar">
    <div class="top-content">
      <div class="nav-left">
        <a-icon
          :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
          @click="onChangeCollapse"
        />
        <bread-crumb></bread-crumb>
      </div>
      <div class="nav-right">
        <person-operation></person-operation>
      </div>
    </div>
    <div class="bottom-content">
      <tags-view></tags-view>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "./bread-crumb/bread-crumb.vue";
import PersonOperation from "./person-operation/person-operation.vue";
import TagsView from "./tags-view/tags-view.vue";

export default {
  name: "NavBar",
  components: {
    BreadCrumb,
    PersonOperation,
    TagsView,
  },
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.status.isCollapse;
    },
  },
  methods: {
    onChangeCollapse() {
      this.$store.dispatch("status/changeCollapse");
    },
  },
};
</script>

<style lang="less">
.top-content {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 30px 0 13px;
  box-shadow: 0 2px 6px rgba(0, 21, 41, 0.35);
  z-index: 99;

  i {
    font-size: 18px;
  }

  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
  }

  .nav-left {
    .anticon-menu-fold,
    .anticon-menu-unfold {
      margin-right: 10px;
    }
  }
}

.bottom-content {
  z-index: 10;
}
</style>
