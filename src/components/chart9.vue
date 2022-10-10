<template>
  <div class="年龄段-图3">
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

let arr = [
  [0.1, 0.2, 0.36, 0.45, 0.56, 0.6, 0.78, 0.86],
  [0.19, 0.2, 0.26, 0.3, 0.26, 0.2, 0.28, 0.26],
  [0.66, 0.6, 0.48, 0.46, 0.46, 0.4, 0.28, 0.26],
];

const initEcharts = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);

  let getItem = () => {
    let random = Math.round(Math.random() * 2);

    let options = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        // 添加表格的竖线
        splitLine: { show: true, lineStyle: { color: "#073E78" } }, //添加表格的竖线
        data: ["0", "18", "28", "38", "48", "58", "68", "78"],
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
          formatter(val) {
            return val * 100 + "%";
          }, //y轴现实的内容
        },
      },
      series: [
        {
          data: arr[random],
          type: "line", // 折线图
          formatter(options) {
            return options.value * 100 + "%";
          }, //设置标签要展示的内容
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
                  color: "#f7a110", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#1d1d49", // 100% 处的颜色
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
    };

    myChart.setOption(options, true); // 重新渲染图标
  };

  getItem(); //初始化实例后，首次设置数据

  setInterval(() => {
    getItem();
  }, 1000);

  // [0.19, 0.2, 0.26, 0.35, 0.26, 0.2, 0.08, 0.06];
};
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.年龄段-图3 {
  //   border: 1px solid red;
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
