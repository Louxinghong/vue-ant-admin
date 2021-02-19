<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <transition
        mode="out-in"
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"
      >
        <router-view></router-view>
      </transition>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
export default {
  name: "App",
  data() {
    return {
      enterClass: "",
      leaveClass: "",
      zh_CN,
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.level > from.meta.level) {
        //设置动画名称
        this.enterClass = "animated fadeInRight";
        this.leaveClass = "animated fadeOut";
      }
      if (to.meta.level < from.meta.level) {
        this.enterClass = "animated fadeIn";
        this.leaveClass = "animated fadeOutRight";
      }
      if (to.meta.level === from.meta.level) {
        this.enterClass = "";
        this.leaveClass = "";
      }
    },
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
