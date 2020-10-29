<template>
  <div class="bread-crumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadCrumbs" :key="item.path">
        <span v-if="index === breadCrumbs.length - 1">{{
          item.meta.title
        }}</span>
        <a v-else @click="goPath(item.path)">{{ item.meta.title }}</a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadCrumbs: [],
    };
  },
  watch: {
    $route() {
      this.getRoutePath();
    },
  },
  created() {
    this.getRoutePath();
  },
  methods: {
    getRoutePath() {
      let matchedRoutes = this.$route.matched.filter((item) => item.name);
      let firstRoute = matchedRoutes[0];
      if (firstRoute.name !== "Dashboard") {
        matchedRoutes = [{ path: "/", meta: { title: "首页" } }].concat(
          matchedRoutes
        );
      }
      this.breadCrumbs = matchedRoutes;
    },
    goPath(path) {
      this.$router.push(path);
    },
  },
};
</script>
