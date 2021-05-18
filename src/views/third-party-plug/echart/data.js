export const customizedPieOption = {
  visualMap: {
    // 不显示 visualMap 组件，只用于明暗度的映射
    show: false,
    // 映射的最小值为 80
    min: 80,
    // 映射的最大值为 600
    max: 600,
    inRange: {
      // 明暗度的范围是 1 到 0
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "55%",
      roseType: "angle",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: "#c23531",
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      data: [],
    },
  ],
};

// 饼图
export const pieOption = {
  title: {
    text: "",
    left: "center",
    textStyle: {
      color: "rgb(45, 175, 226)",
    },
  },
  tooltip: {
    show: false,
    trigger: "item",
  },
  color: [],
  legend: { bottom: "0", left: "center", color: "#ffffff" },
  series: [
    {
      name: "",
      type: "pie",
      label: {
        normal: {
          show: true,
          position: "outside",
          textStyle: {
            fontWeight: "normal",
            fontSize: "20px",
            color: "red",
          },
          formatter: function(p) {
            return p.percent + "%";
          },
        },
      },
      labelLine: {
        length: 5,
        length2: 20,
        show: true,
        color: "#ffffff",
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "32",
          fontWeight: "bold",
          color: "#ffffff",
        },
      },
      data: [],
    },
  ],
};

// 漏斗图
export const pyramidsOption = {
  title: {
    text: "",
    left: "center",
    textStyle: {
      color: "rgb(45, 175, 226)",
    },
  },
  color: [],
  series: [
    {
      zlevel: 1,
      name: "漏斗图",
      type: "funnel",
      left: "0",
      top: "20%",
      width: "100%",
      height: "100%",
      min: 0,
      max: 1000,
      minSize: "0%",
      maxSize: "100%",
      sort: "ascending",
      gap: 2,
      label: {
        show: true,
        rich: {
          a: {
            color: "#ffffff",
            fontSize: 20,
          },
        },
        position: "right",
        width: "200px",
        align: "right",
        formatter: "{a|{b}}",
      },
      labelLine: {
        length: 30,
        lineStyle: {
          width: 1,
          type: "solid",
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 8,
        },
      },
      data: [],
    },
  ],
};

// 雷达图
export const radarOptions = {
  title: {
    text: "",
    left: "center",
    textStyle: {
      color: "rgb(45, 175, 226)",
    },
  },
  backgroundColor: "",
  tooltip: {
    trigger: "item",
    backgroundColor: "rgb(45, 175, 226)",
  },
  grid: {
    // 控制图的大小，调整下面这些值就可以，
    x: 40,
    x2: 100,
    y2: 150, // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
  },
  radar: {
    indicator: [],
    radius: "70%",
    splitLine: {
      show: true,
      lineStyle: {
        color: "#2a3c84", // 分隔线颜色
        width: 2,
        opacity: 0.3, // 分隔线线宽
      },
    },
    nameGap: 3,
    splitNumber: 5,
    splitArea: {
      // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: {
        // 分隔区域的样式设置。
        color: [
          "rgb(45, 175, 226, 0.25)",
          "rgb(45, 175, 226, 0.3)",
          "rgb(45, 175, 226, 0.4)",
          "rgb(45, 175, 226, 0.5)",
          "rgb(45, 175, 226, 0.25)",
        ], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      },
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: "#C0C0C0",
        width: 1,
        opacity: 0.3,
      },
    },
    axisLabel: {
      rotate: 30,
    },
    name: {
      // (圆外的标签)雷达图每个指示器名称的配置项。
      formatter: "{value}",
      textStyle: {
        fontSize: 24,
        color: "#ffffff",
      },
    },
  },
  series: [],
};
