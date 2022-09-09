<script setup>
import { onMounted } from "@vue/runtime-core";
import Home from "./components/Home.vue";
import * as echarts from "echarts";

const px = function (n) {
  return (n / 2420) * window.pageWidth;
};

console.log(px(100));

// 重新渲染页面时滚动到顶部
const scrollToTop = () => {
  let sTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (sTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, sTop - sTop / 8);
  }
};

const initEcharts = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".chart"));
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

onMounted(() => {
  // 挂载时滚动到顶部
  scrollToTop();
  initEcharts();
});
</script>

<template>
  <div class="root">
    <Home />
    <main>
      <section class="box1">
        <div class="bordered 管辖统计">
          <h2>管辖统计部分</h2>
          <div class="chart"></div>
        </div>
      </section>
      <section class="box2"></section>
      <section class="box3"></section>
      <section class="box4"></section>
      <section class="box5"></section>
    </main>
  </div>
</template>

<style lang="scss">
@import "./shared/helper.scss";

#app {
  display: flex;
  flex-direction: column;
  background: #00051a;
}

.root {
  display: flex;
  flex-direction: column;
  flex: 1;
}

main {
  padding-top: 10px;
  flex: 1;
  display: grid;
  // grid-template-areas:
  //   "box1 box2 box4 box5"
  //   "box1 box2 box4 box5"
  //   "box3 box3 box4 box5";
  // 自动根据fr比例伸缩
  grid-template:
  //  fr部分，相当于grid-template-rows / grid-template-columns
  //  先决定有几行，每一行有多高；然后决定有几列，每一列有多宽
    "box1 box2 box4 box5" 755fr // 这里的755fr是按比例决定一行有多高
    // 这里的363fr也是决定的行高，/ 后面的fr部分，决定的是每一列分别有多宽
    "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;

  // 增加间隙
  row-gap: px(28);
  column-gap: px(25);
  > section {
    border: 1px solid #0e305c;
    border-radius: 4px;
    // background: #0c0d2e;
    text-align: center;
  }
}

.bordered {
  border: 1px solid #0e305c;
  border-radius: 4px;
  background: #0c0d2e;
}

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
.box2 {
  grid-area: box2;
}
.box3 {
  grid-area: box3;
}
.box4 {
  grid-area: box4;
}
.box5 {
  grid-area: box5;
}
</style>
