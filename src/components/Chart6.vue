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
    backgroundColor: "#00051a", // 整个容器的背景颜色
    geo: {
      type: "map",
      map: "china",
    },

    series: [
      {
        type: "map",
        map: "china", // 自定义扩展图表类型
        data: [{ name: "甘肃省", value: 1 }],
        label: { show: false, color: "white" },
        itemStyle: {
          areaColor: "#0c0d2e", // 默认状态的，地图背景颜色
          borderColor: "#01A7F7",
          shadowColor: "white",
          emphasis: {
            label: { color: "white" }, // hover时冒出的省份名称的字体颜色
            areaColor: "#5470C6", // hover地图时的背景颜色
          },
        },
        select: {
          label: {
            show: false,
            color: "white",
          },
          itemStyle: {
            areaColor: "#5470C6", // 选中某个省份后的区域颜色
          },
        },
      },
      {
        data: [
          {
            value: [103, 36],
          },
        ],
        type: "effectScatter",
        coordinateSystem: "geo",
        symbolSize: px(21), // 修改散点图大小
        color: "#f0f8ff",
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.籍贯分布地 {
  height: px(762);
  background: #00051a;
}

h2 {
  background: #00051a;
}
</style>
