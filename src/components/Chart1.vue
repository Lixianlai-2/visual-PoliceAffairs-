<template>
  <div class="bordered 管辖统计">
    <h2>管辖统计部分</h2>
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
  //   console.log(chart.value); //跟下面一行的作用是一样的
  //   console.log(document.querySelector(".chart"));
  initEcharts();
});

const initEcharts = function () {
  const scrollToTop = () => {
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (sTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, sTop - sTop / 8);
    }
  };

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value); //
  //   var myChart = echarts.init(document.querySelector(".chart"));
  // 绘制图表
  myChart.setOption({
    // textStyle: {
    //   fontSize: px(12),
    // },
    xAxis: {
      data: [
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
        "兰州新区",
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
        data: [9, 8, 7, 6, 5, 4, 3, 2, 1],
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
// 重新渲染页面时滚动到顶部
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.管辖统计 {
  height: px(315);
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // h2 {
  //   font-size: px(22);
  //   line-height: px(24);
  //   padding: px(10) px(28);
  //   border: 1px solid #04498f;
  //   text-shadow: 0 0 2px white;
  //   text-align: center;
  //   border-bottom-right-radius: px(10);
  //   border-bottom-left-radius: px(10);
  // }

  // .chart {
  //   flex: 1;
  //   width: 100%;
  //   // border: 1px solid blue;
  // }
}
</style>
