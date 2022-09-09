<template>
  <div class="home"></div>
</template>

<script setup>
console.log("from Home.vue", window.pageWidth);
console.log("from Home.vue", window.pageHeight);
</script>

<style lang="scss" scoped>
@function px($n) {
  @return calc($n / 2420 * 100rem);
}

.home {
  height: px(99);
  // 引入图片
  background-image: url("../imgs/header.png");
  // 让图片占满
  background-size: cover;
}
</style>
