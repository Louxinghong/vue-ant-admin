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

export const routes = [
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
        meta: { title: "首页", icon: "home" },
      },
    ],
  },
  {
    path: "/component-package",
    redirect: "/component-package/form-package",
    name: "ComponentPackage",
    component: Layout,
    isShowFirstLevel: true,
    meta: { title: "公共组件库", icon: "deployment-unit" },
    children: [
      {
        path: "form-package",
        name: "ComponentPackageFormPackage",
        component: () =>
          import(
            /** webpackChunkName: 'group-component-package' */ "@/views/component-package/form-package/form-package.vue"
          ),
        meta: { title: "表格组件", icon: "" },
      },
    ],
  },
  {
    path: "/test",
    redirect: "/test/test-first/test-second",
    name: "Test",
    component: Layout,
    isShowFirstLevel: true,
    meta: { title: "多层级测试", icon: "cluster" },
    children: [
      {
        path: "test-first",
        redirect: "/test/test-first/test-second",
        name: "TestFirst",
        component: () =>
          import(
            /** webpackChunkName: 'group-test' */ "@/views/test-father/father.vue"
          ),
        meta: { title: "第一层级", icon: "" },
        children: [
          {
            path: "test-second",
            name: "TestFirstTestSecond",
            component: () =>
              import(
                /** webpackChunkName: 'group-test' */ "@/views/test-father/test-son/son.vue"
              ),
            meta: { title: "第二层级", icon: "" },
          },
        ],
      },
    ],
  },
];

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes,
});
