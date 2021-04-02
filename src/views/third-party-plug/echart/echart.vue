<template>
  <div class="echart-container">
    <div id="chart" style="width: 100%;height: 35vh;margin-top: 30px;"></div>
  </div>
</template>

<script>
export default {
  name: "EChart",
  data() {
    return {
      purchaseChart: null,
    };
  },
  mounted() {
    this.purchaseChart = this.echarts.init(document.getElementById("chart"));
    this.onDrawLine();
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onDrawLine() {
      // 绘制图表
      this.purchaseChart.setOption({
        visualMap: {
          // 不显示 visualMap 组件，只用于明暗度的映射
          show: false,
          // 映射的最小值为 80
          min: 80,
          // 映射的最大值为 600
          max: 600,
          inRange: {
            // 明暗度的范围是 1 到 0
            colorLightness: [1, 0],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            roseType: "angle",
            data: [
              {
                value: 235,
                name: "视频广告",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                value: 274,
                name: "联盟广告",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                value: 310,
                name: "邮件营销",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                value: 335,
                name: "直接访问",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                value: 400,
                name: "搜索引擎",
                itemStyle: {
                  color: "#c23531",
                },
              },
            ],
          },
        ],
      });
    },
    onResize() {
      this.purchaseChart.resize();
    },
  },
};
</script>
