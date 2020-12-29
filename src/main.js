import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import axios from "@/axios/axios";
import store from "@/store/store";
import echarts from "echarts";
import components from "@/components/components";
import i18n from "@/language/index";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "@/assets/css/main.less";

Vue.use(antd);

// 注册全局组件
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

Vue.prototype.$echarts = echarts;

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
