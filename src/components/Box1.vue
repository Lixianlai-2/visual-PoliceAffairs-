<template>
  <section class="box1">
    <div class="bordered 管辖统计">
      <h2>管辖统计部分</h2>
      <div class="chart" ref="chart"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

// 模板引用
const chart = ref(null);

const px = function (n) {
  return (n / 2420) * window.pageWidth;
};

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
    textStyle: {
      // fontSize: px(12),
    },
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
        data: [5, 20, 36, 10, 10, 20, 20, 20, 20],
      },
    ],
    // 去除表格的多余空间
    grid: {
      x: px(47),
      y: px(23),
      // 决定x轴的压缩像素，表格往左移动
      x2: px(15),
      // 决定y轴的压缩像素，表格往上移动
      y2: px(70),
    },
  });
};
// 重新渲染页面时滚动到顶部
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.box1 {
  grid-area: box1;
  .管辖统计 {
    height: px(315);
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: px(22);
      line-height: px(24);
      padding: px(10) px(28);
      border: 1px solid #04498f;
      text-shadow: 0 0 2px white;
      text-align: center;
      border-bottom-right-radius: px(10);
      border-bottom-left-radius: px(10);
    }

    div {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
