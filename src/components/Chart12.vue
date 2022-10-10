<template>
  <div class="案发街道统计-饼图">
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
        center: ["50%", "35%"], // 横轴移动，纵轴移动
        radius: ["0%", "60%"], //第一个参数决定饼图中间多大空隙，第二个参数是决定整体有多大
        startAngle: -20,
        type: "pie",
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: { show: false, length: 0 }, //让标签线消失
        // roseType: "area", // 让饼图每一部分的长度和大小不一样
        itemStyle: {
          shadowBlur: px(200),
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        data: [
          { value: 0.08, name: "东岗路" },
          { value: 0.06, name: "段家滩" },
          { value: 0.11, name: "雁北" },
          { value: 0.09, name: "五泉山" },
          { value: 0.12, name: "中山路" },
          { value: 0.06, name: "庆阳路" },
          { value: 0.08, name: "武都路" },
          { value: 0.08, name: "酒泉路" },
          { value: 0.08, name: "天水路" },
        ],
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.案发街道统计-饼图 {
  width: px(300);
  display: flex;
}
</style>
