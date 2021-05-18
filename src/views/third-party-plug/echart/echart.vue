<template>
  <div class="echart-container">
    <e-charts class="chart-one" :option="chartData"></e-charts>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import { pieOption } from "./data";

export default {
  name: "EChart",
  data() {
    return {
      chartData: {},
    };
  },
  mounted() {
    this.chartData = cloneDeep(pieOption);
    this.chartData.series[0].data = [
      {
        name: "测试一号",
        value: 2333,
      },
      {
        name: "测试二号",
        value: 3222,
      },
    ];
  },
};
</script>

<style scoped>
.chart-one {
  height: 200px;
  height: 200px;
}
</style>
