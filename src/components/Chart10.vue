<template>
  <div class="案发类型统计-表格">
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

  myChart.setOption({
    // textStyle: {
    //   fontSize: px(12),
    // },
    xAxis: {
      data: [
        "入室抢劫",
        "当街偷盗",
        "团伙诈骗",
        "刑事案件",
        "民事案件",
        "入室抢劫",
      ],
      axisLabel: {
        fontSize: px(12),
        formatter(val) {
          if (val.length > 2) {
            const arr = val.split("");
            arr.splice(2, 0, "\n");
            return arr.join("");
          } else {
            return val;
          }
        },
      },
    },
    yAxis: {
      axisLabel: {
        fontSize: px(12),
      },
      // 去除折线图的分割线
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "销量",
        type: "bar",
        data: [40, 22, 20, 18, 32],
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

.案发类型统计-表格 {
  width: px(300);
  display: flex;
}
</style>
