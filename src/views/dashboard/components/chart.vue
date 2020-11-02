<template>
  <div id="chart" style="width: 100%;height: 35vh;margin-top: 30px;"></div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 每月制成率
      let purchaseChart = this.$echarts.init(document.getElementById("chart"));
      // 绘制图表
      purchaseChart.setOption({
        color: [
          "#4fa8f9",
          "#6ec71e",
          "#f56e6a",
          "#ffeb3b",
          "#ddd",
          "#5F9EA0",
          "#000000",
        ],
        title: {
          text: "测试需求",
          subtext: "演示数据",
          left: "left",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["需求1", "需求2", "需求3", "需求4"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["24号", "25号", "26号", "27号", "28号", "29号"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "需求1",
            type: "bar",
            barWidth: 30,
            stack: "1天",
            data: [820, 732, 620, 732, 620, 732],
          },
          {
            name: "需求2",
            type: "bar",
            stack: "1天",
            data: [120, 132, 120, 132, 120, 132],
          },
          {
            name: "需求3",
            type: "bar",
            stack: "1天",
            data: [60, 72, 60, 72, 60, 72],
          },
          {
            name: "需求4",
            type: "bar",
            stack: "1天",
            data: [62, 82, 62, 82, 62, 82],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
