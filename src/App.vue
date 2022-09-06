<script setup>
import Home from "./components/Home.vue";
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

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
}

.root {
  display: flex;
  flex-direction: column;
  flex: 1;
}

main {
  flex: 1;
  display: grid;
  grid-template-areas:
    "box1 box2 box4 box5"
    "box1 box2 box4 box5"
    "box3 box3 box4 box5";
}

.box1 {
  grid-area: box1;
  background: pink;
}
.box2 {
  background: green;
  grid-area: box2;
}
.box3 {
  background: rgb(57, 201, 153);
  grid-area: box3;
}
.box4 {
  background: rgb(50, 32, 170);
  grid-area: box4;
}
.box5 {
  background: rgb(183, 13, 95);
  grid-area: box5;
}
</style>
