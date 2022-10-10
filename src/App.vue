<script setup>
import { onMounted } from "@vue/runtime-core";
import Header from "./components/Header.vue";
import Chart1 from "./components/Chart1.vue";
import Chart2 from "./components/Chart2.vue";
import Chart3 from "./components/Chart3.vue";
import Chart4 from "./components/Chart4.vue";
import Chart5 from "./components/Chart5.vue";
import Chart6 from "./components/Chart6.vue";
import Chart7 from "./components/Chart7.vue";
import Chart8 from "./components/chart8.vue";
import Chart9 from "./components/chart9.vue";
import Chart10 from "./components/Chart10.vue";
import Chart11 from "./components/Chart11.vue";
import Chart12 from "./components/Chart12.vue";

// 重新渲染页面时滚动到顶部
const scrollToTop = () => {
  let sTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (sTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, sTop - sTop / 8);
  }
};

onMounted(() => {
  // 挂载时滚动到顶部
  scrollToTop();
});
</script>

<template>
  <div class="root">
    <Header />
    <main>
      <section class="box1">
        <Chart1 />
        <Chart2 />
      </section>
      <section class="box2">
        <Chart3 />
        <Chart4 />
      </section>
      <section class="box3">
        <Chart5 />
      </section>
      <section class="box4">
        <Chart6 />
        <div class="bordered 年龄段分布">
          <h2>犯罪人员年龄段分布</h2>
          <div class="chart">
            <Chart7 />
            <Chart8 />
            <Chart9 />
          </div>
        </div>
      </section>
      <section class="box5">
        <div className="bordered row1 案发类型">
          <h2>案发类型统计</h2>
          <div className="chart">
            <Chart10 />
            <Chart11 />
          </div>
        </div>
        <div className="bordered row2 案发街道">
          <h2>案发街道统计</h2>
          <div className="chart">
            <Chart12 />
          </div>
        </div>
        <div className="bordered row3 作案手段">
          <h2>作案手段分析</h2>
          <div className="chart"></div>
        </div>
      </section>
    </main>
    <footer>
      <h5>微信号:no1643565650</h5>
      <h5>手机号:18780352791</h5>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./shared/helper.scss";

footer {
  height: px(70);
  border: 2px solid #0d2d59;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: px(20);
  margin-top: px(20);
  // flex-direction: column;
  h5 {
    padding-right: px(30);
    color: aliceblue;
  }
}

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
    // border: 1px solid #0e305c;
    border-radius: px(20);
    text-align: center;
  }
}

.案发时段分析,
.往年战果数对比,
.案发趋势分析,
.案件破获排名,
.管辖统计,
.籍贯分布地,
.年龄段分布,
.案发类型,
.案发街道,
.作案手段 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.年龄段分布 {
  margin-top: px(30);
  flex: 1;
  // display: flex;
  border: 1px solid blue;
}

.bordered {
  border: 1px solid #0e305c;
  border-radius: 4px;
  background: #0c0d2e;
}

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

.chart {
  flex: 1;
  width: 100%;
  display: flex;
  // border: 1px solid blue;
  justify-content: space-around;
}

.box1 {
  grid-area: box1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //让两个部分分隔开来
}

.box2 {
  grid-area: box2;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //让两个部分分隔开来
}
.box3 {
  // border: 1px solid red;
  grid-area: box3;
  display: flex;
  flex-direction: column;
}
.box4 {
  grid-area: box4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box5 {
  grid-area: box5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > .row1 {
    height: px(317);
  }

  > .row2 {
    height: px(317);
  }

  > .row3 {
    height: px(455);
  }
}
</style>
