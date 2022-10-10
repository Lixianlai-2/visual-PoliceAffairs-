<template>
  <div class="案发街道统计-表格">
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
  var myChart = echarts.init(chart.value);
  const data = [
    { value: 0.08, name: "东岗路" },
    { value: 0.06, name: "段家滩" },
    { value: 0.11, name: "雁北" },
    { value: 0.09, name: "五泉山" },
    { value: 0.12, name: "中山路" },
    { value: 0.06, name: "庆阳路" },
    { value: 0.08, name: "武都路" },
    { value: 0.08, name: "酒泉路" },
    { value: 0.08, name: "天水路" },
  ];

  myChart.setOption({
    // textStyle: {
    //   fontSize: px(12),
    // },
    xAxis: {
      data: [
        "东岗路",
        "段家滩",
        "雁北",
        "五泉山",
        "中山路",
        "庆阳路",
        "武都路",
        "天水路",
      ],
      axisLabel: {
        fontSize: px(10),
        formatter(val) {
          if (val.length > 2) {
            const arr = val.split("");
            arr.splice(2, 0, "\n"); //超过两个字就换行
            return arr.join("");
          } else {
            return val;
          }
        },
      },
    },
    yAxis: {
      // 去除折线图的分割线
      splitLine: {
        show: false,
      },
      axisLabel: {
        fontSize: px(12),
        formatter(value) {
          return (value * 100).toFixed(0) + "%";
        },
      },
    },
    grid: {
      x: px(80),
      y: px(50),
      // 决定x轴的压缩像素，表格往左移动
      x2: px(40), // 表格从右边往左边压缩
      y2: px(60), // 决定表格从下方往上移动
      // containLabel: true,
    },
    series: [
      {
        type: "bar",
        data: data.map((i) => i.value),
        // 给表格设置渐变色
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "#1f36f9",
            },
            {
              offset: 1,
              color: "#059fff",
            },
          ]),
        },
      },
    ],
    // 去除表格的多余空间
    grid: {
      x: px(60),
      y: px(23),
      x2: px(15), // 决定x轴的压缩像素，表格往左移动
      y2: px(70), // 决定y轴的压缩像素，表格往上移动
    },
  });
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.案发街道统计-表格 {
  width: px(300);
  display: flex;
}
</style>
