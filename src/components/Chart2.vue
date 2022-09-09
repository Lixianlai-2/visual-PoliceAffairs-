<template>
  <div class="bordered 按键破获排名">
    <h2>按键破获排名</h2>
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
  const scrollToTop = () => {
    let sTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (sTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, sTop - sTop / 8);
    }
  };

  var myChart = echarts.init(chart.value); //

  myChart.setOption({
    grid: {
      x: px(80),
      y: px(23),
      // 决定x轴的压缩像素，表格往左移动
      x2: px(20),
      // 决定y轴的压缩像素，表格往上移动
      y2: px(50),
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
      data: [
        "城关区公安局",
        "七里河区公安局",
        "西固区公安局",
        "安宁区公安局",
        "红古区公安局",
        "永登县公安局",
        "皋兰县公安局",
        "榆中县公安局",
        "新区公安局",
      ],
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
        name: "2011",
        type: "bar",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        name: "2012",
        type: "bar",
        data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  });
};
// 重新渲染页面时滚动到顶部
</script>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.按键破获排名 {
  // margin-top: px(30);
  flex: 1;
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
</style>
