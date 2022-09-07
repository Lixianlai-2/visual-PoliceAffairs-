<template>
  <div class="home"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
@function px($n) {
  @return calc($n / 2420 * 100rem);
}

.home {
  height: px(99);
  border: 1px solid red;
  // 引入图片
  background-image: url("../imgs/header.png");
  // 让图片占满
  background-size: cover;
}
</style>
