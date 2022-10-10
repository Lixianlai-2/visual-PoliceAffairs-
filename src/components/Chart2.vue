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
  var myChart = echarts.init(chart.value);

  let data = [
    { name: "城关区公安局", 2011: 1, 2012: 2 },
    { name: "七里河区公安局", 2011: 2, 2012: 3 },
    { name: "西固区公安局", 2011: 3, 2012: 4 },
    { name: "安宁区公安局", 2011: 4, 2012: 5 },
    { name: "红古区公安局", 2011: 5, 2012: 6 },
    { name: "永登县公安局", 2011: 6, 2012: 7 },
    { name: "皋兰县公安局", 2011: 7, 2012: 8 },
    { name: "榆中县公安局", 2011: 8, 2012: 9 },
    { name: "新区公安局", 2011: 9, 2012: 10 },
  ];

  let newDate = 

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
      data: data.map((value) => value.name),
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
        data: data.map((value) => value[2011]),
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
        data: data.map((value) => value[2011]),
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

  let options = {
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
      data: data.map((value) => value.name),
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
        data: data.map((value) => value[2011]),
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
        data: data.map((value) => value[2011]),
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
  };
  
  let getItem = () => {
    for (let i = 0; i <= 8; i++) {
      options.series[0].data[i] = Math.round(Math.random() * 9);
      options.series[1].data[i] = Math.round(Math.random() * 9);
    }
    myChart.setOption(options, true);
  };

  setInterval(() => {
    getItem();
  }, 1700);
};
// 重新渲染页面时滚动到顶部
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.案件破获排名 {
  height: px(425);
}
</style>
