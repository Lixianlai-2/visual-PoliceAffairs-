<template>
  <div class="bordered 案件破获排名">
    <h2>案件破获排名</h2>
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
  var myChart = echarts.init(chart.value); //

  myChart.setOption({
    legend: {
      top: px(10), //说明部分放图表上面
      // bottom: 0,
      itemHeight: px(15), // 设置说明图例高度
      itemWidth: px(20), // 设置说明图例宽度
      itemGap: px(10), // 设置说明图例的间距
      textStyle: {
        fontSize: px(12), //修改说明文字的大小
        color: "#fbe4ae",
        padding: [0, 0, 0, -3], //设置文字跟说明图例之间的距离
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
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: {
        fontSize: px(12),
      },
      // 移除x轴上面的白色横线
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: [
        "城关区公安局",
        "七里河区公安局",
        "西固区公安局",
        "安宁区公安局",
        "红古区公安局",
        "永登县公安局",
        "皋兰县公安局",
        "榆中县公安局",
        "新区公安局",
      ],
      axisLabel: {
        fontSize: px(12),
        formatter(val) {
          // y轴字体换行
          return val.replace("公安局", "\n公安局");
        },
      },
    },
    series: [
      {
        name: "案件排名1",
        type: "bar",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
      {
        name: "案件排名2",
        type: "bar",
        data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "#b82be8",
            },
            {
              offset: 1,
              color: "#6670e2",
            },
          ]),
        },
      },
    ],
  });
};
// 重新渲染页面时滚动到顶部
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.案件破获排名 {
  height: px(425);
}
</style>
