<template>
  <div class="bordered 籍贯分布地">
    <h2>全市犯罪人员籍贯分布地</h2>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import px from "../shared/px";

// 模板引用
const chart = ref(null);

onMounted(() => {
  initEcharts();
});

const initEcharts = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value); //

  myChart.setOption({
    xAxis: {
      type: "category",
      boundaryGap: false,
      // 添加表格的竖线
      splitLine: { show: true, lineStyle: { color: "#073E78" } }, //添加表格的竖线
      data: [
        "0",
        "2",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14",
        "16",
        "18",
        "20",
        "22",
        "24",
      ],
      axisLabel: {
        fontSize: px(12), //设置x轴文字的大小
      },
      axisTick: { show: false }, //除去表格的x轴的凸起线
      axisLine: { show: false }, //除去表格的x轴的基本线
    },
    yAxis: {
      type: "value",
      splitLine: { show: true, lineStyle: { color: "#073E78" } }, //添加表格的竖线
      axisLabel: {
        fontSize: px(12), //设置x轴文字的大小
      },
    },
    series: [
      {
        data: [
          820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330, 1320,
        ],
        type: "line", // 折线图
        areaStyle: {},
        symbol: "circle", // 数据点的形式
        symbolSize: px(12), //数据点大小
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#30367c", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#181a4c", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    ],
    // 去除表格的多余空间
    grid: {
      x: px(10),
      x2: px(20),
      y: px(30),
      y2: px(30),
      containLabel: true, //避免挤压导致的表格变形
    },
  });
};
</script>

<style lang="scss">
@import "../shared/helper.scss";

.籍贯分布地 {
  height: px(762);
}
</style>
