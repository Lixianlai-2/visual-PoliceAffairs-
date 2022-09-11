<template>
  <div class="bordered 案发趋势分析">
    <h2>案发趋势分析</h2>
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
  const scrollToTop = () => {
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (sTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, sTop - sTop / 8);
    }
  };

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value); //

  myChart.setOption({
    legend: {
      bottom: 0, //说明文字部分放表格下面
      textStyle: {
        color: "white",
        fontSize: px(12), //设置说明文字的大小
      },
      // 说明部分图表的宽高
      itemWidth: px(30),
      itemHeight: px(16),
    },
    xAxis: {
      //   type: "category",
      boundaryGap: false, // 删除掉不必要的间隔
      data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      splitLine: { show: true, lineStyle: { color: "#073E78" } }, //添加表格的竖线
      axisTick: { show: false }, //除去表格的x轴的凸起线
      axisLine: { show: false }, //除去表格的x轴的基本线
      axisLabel: {
        fontSize: px(12), //设置x轴文字的大小
      },
    },
    yAxis: {
      type: "value",
      splitLine: { lineStyle: { color: "#073E78" } }, //设置y轴线的颜色
      axisLabel: {
        formatter(val) {
          return val * 100 + "%";
        }, //增加y轴说明文字的%
        fontSize: px(12), //设置y轴的文字动态大小
      },
    },
    series: [
      {
        name: "抢劫",
        type: "line", //折线图
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse(),
        symbol: "circle", // 数据点的形式
        symbolSize: px(12), //数据点的大小
        lineStyle: { width: px(2) },
      },
      {
        name: "醉驾",
        type: "line",
        data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1].reverse(),
        symbol: "circle",
        symbolSize: px(12),
        lineStyle: { width: px(2) },
      },
      {
        name: "盗窃",
        type: "line",
        data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11].reverse(),
        symbol: "circle",
        symbolSize: px(12),
        lineStyle: { width: px(2) },
      },
      {
        name: "故意杀人",
        type: "line",
        data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12].reverse(),
        symbol: "circle",
        symbolSize: px(12),
        lineStyle: { width: px(2) },
      },
      {
        name: "故意伤人",
        type: "line",
        data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13].reverse(),
        symbol: "circle",
        symbolSize: px(12),
        lineStyle: { width: px(2) },
      },
    ],
    // 去除表格的多余空间
    grid: {
      x: px(20),
      x2: px(20),
      y: px(20),
      y2: px(70),
      containLabel: true, //避免挤压导致的表格变形
    },
  });
};
</script>

<style lang="scss">
@import "../shared/helper.scss";

.案发趋势分析 {
  height: px(415);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
