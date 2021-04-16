import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/layout.vue";

Vue.use(VueRouter);

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

/**
* path: '',
* redirect: noredirect,           设为 noredirect 则该路由在 breadcrumb 上点击不会跳转
* name:'router-name',             设置名称以便路由被 <keep-alive> 缓存，必须设置
* componet: () => import(),       需引入的组件
* hidden: true,                   设为 true 则该路由不会显示在 sidebar，默认为 false
* isShowFirstLevel: true,               设为 true 则根路由会一直显示, 无论子路由的多少；没有设置的话, 则只会显示子路由
* meta : {
    title: 'title'               用来在 sidebar 和 breadcrumb 上显示标题，建议设置
    icon: 'icon class'           用来在 sidebar 上显示图标
  }
**/

export const routes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () =>
      import(/** webpackChunkName: 'group-login' */ "@/views/login/login.vue"),
    meta: { level: 1 },
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    isShowFirstLevel: false,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /** webpackChunkName: 'group-dashboard' */ "@/views/dashboard/dashboard.vue"
          ),
        meta: { title: "首页", icon: "home", level: 2 },
      },
    ],
  },
  {
    path: "/component-package",
    redirect: "/component-package/form-package",
    name: "ComponentPackage",
    component: Layout,
    isShowFirstLevel: true,
    meta: { title: "公共组件库", icon: "deployment-unit", level: 2 },
    children: [
      {
        path: "form-package",
        name: "ComponentPackageFormPackage",
        component: () =>
          import(
            /** webpackChunkName: 'group-component-package' */ "@/views/component-package/form-package/form-package.vue"
          ),
        meta: { title: "表格组件", icon: "", level: 2 },
      },
      {
        path: "message-code",
        name: "ComponentMessageCode",
        component: () =>
          import(
            /** webpackChunkName: 'group-component-package' */ "@/views/component-package/message-code/message-code.vue"
          ),
        meta: { title: "短信验证", icon: "", level: 2 },
      },
    ],
  },
  {
    path: "/test",
    redirect: "/test/test-first/test-second",
    name: "Test",
    component: Layout,
    isShowFirstLevel: true,
    meta: { title: "多层级测试", icon: "cluster", level: 2 },
    children: [
      {
        path: "test-first",
        redirect: "/test/test-first/test-second",
        name: "TestFirst",
        component: () =>
          import(
            /** webpackChunkName: 'group-test' */ "@/views/test-father/father.vue"
          ),
        meta: { title: "第一层级", icon: "", level: 2 },
        children: [
          {
            path: "test-second",
            name: "TestFirstTestSecond",
            component: () =>
              import(
                /** webpackChunkName: 'group-test' */ "@/views/test-father/test-son/son.vue"
              ),
            meta: { title: "第二层级", icon: "", level: 2 },
          },
        ],
      },
    ],
  },
  {
    path: "/third-party-plug",
    redirect: "/third-party-plug/map",
    name: "ThirdPartyPlug",
    component: Layout,
    isShowFirstLevel: true,
    meta: { title: "第三方插件库", icon: "share-alt", level: 2 },
    children: [
      {
        path: "map",
        name: "ThirdPartyPlugMap",
        component: () =>
          import(
            /** webpackChunkName: 'group-third-party-plug' */ "@/views/third-party-plug/map/map.vue"
          ),
        meta: { title: "百度地图插件", icon: "", level: 2 },
      },
      {
        path: "echart",
        name: "ThirdPartyPlugEChart",
        component: () =>
          import(
            /** webpackChunkName: 'group-third-party-plug' */ "@/views/third-party-plug/echart/echart.vue"
          ),
        meta: { title: "图表插件", icon: "", level: 2 },
      },
      {
        path: "count",
        name: "ThirdPartyPlugCount",
        component: () =>
          import(
            /** webpackChunkName: 'group-third-party-plug' */ "@/views/third-party-plug/count/count.vue"
          ),
        meta: { title: "数字滚动", icon: "", level: 2 },
      },
    ],
  },
];

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes,
});
