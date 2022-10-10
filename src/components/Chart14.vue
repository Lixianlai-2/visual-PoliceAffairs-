<template>
  <div class="chart" ref="chart">
    <table class="作案">
      <thead>
        <tr>
          <!-- colspan代表竖向占两格 -->
          <th colspan="2">类型</th>
          <th>单数</th>
          <th>合计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- rowspan代表横向占几格 -->
          <td rowspan="2">入室盗窃</td>
          <td>翻窗入室</td>
          <td>10</td>
          <td rowspan="2">70</td>
        </tr>
        <tr>
          <td>撬门入室</td>
          <td>20</td>
        </tr>

        <tr>
          <td rowspan="4">诈骗</td>
          <td>假票</td>
          <td>10</td>
          <td rowspan="4">100</td>
        </tr>
        <tr>
          <td>手机短信</td>
          <td>20</td>
        </tr>
        <tr>
          <td>病毒网站</td>
          <td>30</td>
        </tr>
        <tr>
          <td>仙人跳</td>
          <td>40</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../shared/helper.scss";
.作案 {
  margin: px(10) auto;
  width: 95%;
  border-collapse: collapse; //border坍塌
  // white-space: nowrap;

  th,
  td {
    border: 1px solid #13356f;
    // padding: px(14);
  }

  thead {
    th {
      height: px(70);
    }
  }

  tbody {
    td {
      height: px(50);
      width: px(84);
      background: #1c2456;
    }
  }

  th {
    box-shadow: inset 0 0 px(60) 0 #1f3d85;
  }
}
</style>
