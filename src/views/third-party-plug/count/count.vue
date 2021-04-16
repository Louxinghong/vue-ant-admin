<template>
  <div class="count-container">
    <count-to
      :start-val="config.startVal"
      :end-val="config.endVal"
      :duration="config.duration"
      separator=""
      class="count-number"
    />
  </div>
</template>

<script>
import CountTo from "vue-count-to";

export default {
  name: "Count",
  components: {
    CountTo,
  },
  data() {
    return {
      config: {
        startVal: 10001,
        endVal: 10006,
        duration: 10000,
      },
    };
  },
};
</script>

<style scoped>
.count-number {
  display: flex;
  justify-content: center;
  font-size: 28px;
}
</style>
