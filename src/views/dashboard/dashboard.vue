<template>
  <div :style="{ height: height + 'px' }">
    <clock></clock>
    <todo-list></todo-list>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./components/chart.vue";
import Clock from "./components/clock.vue";
import TodoList from "./components/todo-list.vue";

export default {
  name: "Dashboard",
  components: {
    Chart,
    Clock,
    TodoList,
  },
  data() {
    return {
      loading: false,
      height: 0,
    };
  },
  created() {
    this.height =
      (document.documentElement.clientHeight || document.body.clientHeight) -
      250;
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.height =
          (document.documentElement.clientHeight ||
            document.body.clientHeight) - 250;
      })();
    };
  },
};
</script>
