<template>
  <div class="tags-view">
    <div class="left-operation">
      <a-button icon="left"></a-button>
    </div>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in visitedViews"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="tag.path"
        @click.native="onOpenNowContent"
      >
        <span>{{ tag.meta.title }}</span>
        <a-icon type="close" @click.prevent.stop="onCloseTag(tag)"></a-icon>
      </router-link>
    </div>
    <div class="right-operation">
      <a-button icon="right"></a-button>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router/router";

export default {
  name: "TagsView",
  data() {
    return {
      routes,
      affixTags: [],
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
  },
  watch: {
    $route: {
      handler: function() {
        this.addTags();
      },
    },
  },
  mounted() {
    this.addTags();
  },
  methods: {
    isActive(tag) {
      return tag.path === this.$route.path;
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addVisitedView", this.$route);
      }
    },
    onOpenNowContent() {},
    onCloseTag(tag) {
      this.$store
        .dispatch("tagsView/delVisitedView", tag)
        .then((visitedViews) => {
          if (this.isActive(tag)) {
            this.goToLastView(visitedViews);
          }
        });
    },
    goToLastView(visitedViews) {
      const lastestView = visitedViews.slice(-1)[0];
      if (lastestView) {
        this.$router.push(lastestView);
      } else {
        this.$router.push("/");
        this.$store.dispatch("tagsView/addVisitedView", this.$route);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tags-view {
  display: flex;
  justify-content: space-between;
  height: 38px;
  width: 100%;
  background: #f0f0f0;

  .left-operation,
  .right-operation {
    display: flex;
    align-items: center;

    .ant-btn {
      position: static;
      width: 25px;
      height: 36px;
      border: none;
      border-radius: 2px;

      & /deep/ i {
        font-size: 11px;
      }
    }
  }

  .tags {
    display: flex;
    align-items: center;
    width: calc(100% - 50px);

    .tag {
      position: relative;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      margin-right: 5px;
      padding: 0 5px;
      background: #fff;
      border-radius: 3px;

      &:nth-child(1) {
        margin-left: 5px;
      }

      &::before {
        content: "";
        display: inline-block;
        background: #dfdfdf;
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 50%;
        transition: background-color 0.6s ease;
      }

      &.active {
        &::before {
          background: #2d8cf0;
        }
      }

      i {
        font-size: 10px;
        margin-left: 5px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
