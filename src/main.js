import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import axios from "@/axios/axios";
import store from "@/store/store";
import Echarts from "echarts";
import components from "@/components/components";
import i18n from "@/language/index";
import BaiduMap from "vue-baidu-map";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "@/assets/css/main.less";

// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

Vue.prototype.$echarts = Echarts;

Vue.prototype.axios = axios;

Vue.use(Antd);

Vue.use(BaiduMap, {
  ak: "MGyhho5QP6ZGwn1Y7XMtBlI1w4LHDATu",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
