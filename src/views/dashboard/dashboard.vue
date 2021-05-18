<template>
  <div :style="{ height: height + 'px' }">
    <clock></clock>
    <todo-list></todo-list>
  </div>
</template>

<script>
import Clock from "./components/clock.vue";
import TodoList from "./components/todo-list.vue";

export default {
  name: "Dashboard",
  components: {
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
      120;
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.height =
          (document.documentElement.clientHeight ||
            document.body.clientHeight) - 120;
      })();
    };
  },
};
</script>
