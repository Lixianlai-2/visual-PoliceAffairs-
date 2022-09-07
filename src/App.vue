<script setup>
import { onMounted } from "@vue/runtime-core";
import Home from "./components/Home.vue";
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
    <Home />
    <main>
      <section class="box1"></section>
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
    background: #0c0d2e;
  }
}

.box1 {
  grid-area: box1;
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
