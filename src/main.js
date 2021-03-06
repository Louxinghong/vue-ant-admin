import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import axios from "@/axios/axios";
import store from "@/store/store";
import components from "@/components/components";
import i18n from "@/language/index";
import BaiduMap from "vue-baidu-map";
import animate from "animate.css";
import Antd from "ant-design-vue";
import "@/assets/css/main.less";

// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

Vue.prototype.axios = axios;

Vue.use(Antd);

Vue.use(BaiduMap, {
  ak: "MGyhho5QP6ZGwn1Y7XMtBlI1w4LHDATu",
});

Vue.use(animate);

if (process.env.NODE_ENV !== "production") {
  // 禁用生产环境提示
  Vue.config.productionTip = false;

  // 引入开发环境模块
  require("./devModule");
}

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
