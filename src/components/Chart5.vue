<template>
  <div class="bordered 往年战果数对比">
    <h2>往年战果数对比</h2>
    <div class="chart" ref="chart">
      <table class="战果">
        <thead>
          <tr>
            <th>年份</th>
            <th>破案数</th>
            <th>抓获嫌疑人</th>
            <th>并串案件</th>
            <th>现勘录入</th>
            <th>视侦录入</th>
            <th>合成案件数</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2015</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../shared/helper.scss";

.往年战果数对比 {
  height: px(315);
}

.战果 {
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
      box-shadow: inset 0 0 px(60) 0 #1f3d85;
    }
  }

  tbody {
    td {
      height: px(50);
      width: px(84);
      background: #1c2456;
    }
  }
}
</style>
