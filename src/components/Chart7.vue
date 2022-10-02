<template>
  <div class="年龄段-图1">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import px from "../shared/px";
// import china from "../assets/china.json";
import "../assets/china";

// 模板引用
const chart = ref(null);

onMounted(() => {
  initEcharts();
});

const initEcharts = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);
  // 注册地图
  // echarts.registerMap("CN", china);

  const colors = { 青海省: "#BB31F7", 甘肃省: "#15B8FD", 四川省: "#06E1EE" };

  // 配置地图
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.年龄段-图1 {
  // border: 1px solid red;
  height: px(20);
}

h2 {
  background: #00051a;
}
</style>
