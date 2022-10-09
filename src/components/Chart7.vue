<template>
  <div class="年龄段-图1">
    <div class="chart" ref="chart"></div>
    <div class="label">性别</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import px from "../shared/px";
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

  // legend: {
  //     bottom: px(0),
  //     itemHeight: px(15), // 设置说明图例高度
  //     itemWidth: px(20), // 设置说明图例宽度
  //     itemGap: px(10), // 设置说明图例的间距
  //     textStyle: {
  //       fontSize: px(12), //修改说明文字的大小
  //       color: "#fbe4ae",
  //       padding: [0, 0, 0, -3], //设置文字跟说明图例之间的距离
  //     },
  //   },
  // 配置地图
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
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
        name: "性别",
        type: "pie",
        radius: ["40%", "70%"], // 让饼图中间变空
        label: {
          position: "inside", //设置标签的位置
          formatter(options) {
            return options.value * 100 + "%";
          }, //设置标签要展示的内容
          fontSize: px(25), //设置标签的大小
          color: "white",
        },
        labelLine: { show: false },
        data: [
          { value: 0.8, name: "男" },
          { value: 0.2, name: "女" },
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
  width: px(300);
  display: flex;
  position: relative;
  // height: px(300);
}

h2 {
  background: #00051a;
}

.chart {
  flex: 1;
}

.label {
  // border: 1px solid green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  text-shadow: 0 0 px(20) #33a4fa;
  color: #33a4fa;
  font-size: px(40);
}
</style>
