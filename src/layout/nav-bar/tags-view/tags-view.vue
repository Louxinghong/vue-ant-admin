<template>
  <div class="tags-view">
    <div class="left-operation">
      <a-button
        :disabled="btnDisabled"
        icon="left"
        @click="onHandleScroll(-120)"
      ></a-button>
    </div>
    <div class="tags">
      <div
        class="tags-content"
        ref="tagsContent"
        @DOMMouseScroll="onMouseScroll"
        @mousewheel="onMouseScroll"
      >
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
    </div>
    <div class="right-operation">
      <a-button
        :disabled="btnDisabled"
        icon="right"
        @click="onHandleScroll(120)"
      ></a-button>
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
      btnDisabled: false,
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
    onMouseScroll(e) {
      if (e.type === "mousewheel" || e.type === "DOMMouseScroll") {
        if (this.$refs.tagsContent.scrollLeft + e.wheelDelta > 0) {
          this.$refs.tagsContent.scrollLeft += e.wheelDelta;
        } else {
          this.$refs.tagsContent.scrollLeft = 0;
        }
      }
    },
    onHandleScroll(offset) {
      this.btnDisabled = true;
      let fragment = offset / 40;
      let index = 1;
      let timer = setInterval(() => {
        if (this.$refs.tagsContent.scrollLeft + fragment > 0) {
          this.$refs.tagsContent.scrollLeft += fragment;
        } else {
          this.$refs.tagsContent.scrollLeft = 0;
          clearInterval(timer);
        }
        if (index < 40) {
          index++;
        } else {
          clearInterval(timer);
        }

        this.btnDisabled = false;
      }, 5);
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
  background: #e6e5e5;

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
    position: relative;
    height: 38px;
    width: calc(100% - 50px);
    padding: 2px 5px;

    .tags-content {
      position: relative;
      width: 100%;
      height: 34px;
      line-height: 34px;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      background: #f0f0f0;

      &::-webkit-scrollbar {
        /* 滚动条样式 */
        width: 0; /* 高宽分别对应横竖滚动条的尺寸 */
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

      .tag {
        position: relative;
        display: inline-block;
        height: 34px;
        line-height: 34px;
        padding: 0 5px;
        background: #fff;
        border-radius: 3px;

        &:not(:last-child) {
          margin-right: 5px;
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
}
</style>
