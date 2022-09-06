<template>
  <div class="home"></div>
</template>

<script setup></script>

<style lang="less" scoped>
@height: 99;

.home {
  height: (@height / 2420) * 100rem;
  border: 1px solid red;
  // 引入图片
  background-image: url("../imgs/header.png");
  // 让图片占满
  background-size: cover;
}
</style>
