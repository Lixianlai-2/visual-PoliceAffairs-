<template>
  <div class="案发类型统计-饼图">
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

const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];

const initEcharts = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);

  myChart.setOption({
    color: colors,
    xAxis: { show: false },
    yAxis: { show: false },
    legend: {
      bottom: px(0),
      itemHeight: px(15), // 设置说明图例高度
      itemWidth: px(20), // 设置说明图例宽度
      itemGap: px(10), // 设置说明图例的间距
      textStyle: {
        fontSize: px(12), //修改说明文字的大小
        color: "#fbe4ae",
        padding: [0, 0, 0, -3], //设置文字跟说明图例之间的距离
      },
    },
    series: [
      {
        center: ["50%", "40%"], // 横轴移动，纵轴移动
        startAngle: -20,
        type: "pie",
        radius: ["20%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
          color: "white",
          fontSize: px(20),
          distanceToLabelLine: 0,
          formatter(options) {
            return options.value * 100 + "%";
          },
        },
        labelLine: { show: true, length: 0 },
        roseType: "area",
        itemStyle: {
          shadowBlur: px(200),
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        data: [
          { value: 0.36, name: "刑事案件" },
          { value: 0.2, name: "民事案件" },
          { value: 0.18, name: "经济案件" },
          { value: 0.24, name: "其他案件" },
        ],
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.案发类型统计-饼图 {
  width: px(300);
  display: flex;
}
</style>
