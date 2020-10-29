<template>
  <div class="purchase-demand" :style="{ height: height + 'px' }">
    <a-form :form="formEChart" layout="inline">
      <a-form-item label="类别">
        <a-radio-group default-value="a" button-style="solid">
          <a-radio-button value="a">
            全部
          </a-radio-button>
          <a-radio-button value="b">
            最近一周
          </a-radio-button>
          <a-radio-button value="c">
            最近一月
          </a-radio-button>
          <a-radio-button value="d">
            最近一年
          </a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="开始时间">
        <a-date-picker placeholder="请选择开始时间" />
      </a-form-item>
      <a-form-item label="结束时间">
        <a-date-picker placeholder="请选择结束时间" />
      </a-form-item>
      <a-form-item label="状态">
        <a-select placeholder="请选择状态" style="width: 160px" allowClear>
          <a-select-option
            v-for="(item, index) in 2"
            :value="item"
            :key="index"
          >
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          :loading="loading"
          icon="search"
          @click="onSearchEChart"
          >搜索</a-button
        >
      </a-form-item>
    </a-form>
    <div class="buttonBread">
      <a-button type="primary" icon="download" :loading="loading"
        >导出</a-button
      >
    </div>

    <div
      id="purchaseChart"
      style="width: 80%;height: 35vh;margin-top: 30px;"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      loading: false,
      formEChart: this.$form.createForm(this, { name: "searchEChart" }),
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
    this.drawLine();
  },
  methods: {
    onSearchEChart() {},
    drawLine() {
      // 每月制成率
      let purchaseChart = this.$echarts.init(
        document.getElementById("purchaseChart")
      );
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
          text: "采购需求",
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

<style scoped>
.purchase-demand >>> .ant-input {
  width: 160px;
}
.purchase-demand >>> .ant-calendar-picker-input {
  width: 160px;
}
.purchase-demand >>> .ant-select {
  width: 160px;
}
</style>
