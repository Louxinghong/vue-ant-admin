import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import axios from "@/axios/axios";
import store from "./store/store";
import echarts from "echarts";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "@/assets/css/main.less";

Vue.use(antd);

Vue.prototype.$echarts = echarts;

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
