<template>
  <div class="echart-container">
    <e-charts class="chart-one" :option="chartData"></e-charts>

    <div id="china-map" class="china-map"></div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import { pieOption } from "./data";
import * as echarts from "echarts";
// import "echarts-gl";
import china from "@/assets/js/china.json";

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

    echarts.registerMap("china", china);
    this.onDrawChinaMap();
  },
  methods: {
    onDrawChinaMap() {
      const myChart = echarts.init(document.getElementById("china-map"));
      const option = {
        tooltip: {
          show: false, // 不显示提示标签
          formatter: "{b}", // 提示标签格式
          backgroundColor: "#4BADE8", // 提示标签背景颜色
          textStyle: { color: "#fff" }, // 提示标签字体颜色
        },
        series: [
          {
            type: "map",
            mapType: "china",
            label: {
              normal: {
                show: false, // 显示省份标签
                textStyle: { color: "#c71585" }, // 省份标签字体颜色
              },
              emphasis: {
                // 对应的鼠标悬浮效果
                show: true,
                textStyle: { color: "#800080" },
              },
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#009fe8", // 区域边框颜色
                areaColor: "rgb(179, 211, 253, 0.1)", // 区域颜色
              },
              emphasis: {
                borderWidth: 0.5,
                borderColor: "#4b0082",
                areaColor: "#B3D3FD",
              },
            },
            data: this.china,
          },
        ],
      };

      myChart.setOption(option);
      myChart.on("mousedown", function(params) {
        // var dataIndex = params.dataIndex
        console.log(params);
      });
    },
  },
};
</script>

<style scoped>
.chart-one {
  height: 200px;
  height: 200px;
}

.china-map {
  width: 1000px;
  height: 500px;
}
</style>
