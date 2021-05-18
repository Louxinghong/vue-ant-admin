<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ECharts",
  global: true,
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (this.chart) {
          newVal ? this.chart.setOption(newVal) : this.chart.setOption(oldVal);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.onInitChart();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onInitChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
    },
    onResize() {
      this.chart.resize();
    },
  },
};
</script>
