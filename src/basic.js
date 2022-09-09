// 得到当前浏览器的高度和宽度
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

// pageWidth是为了满足16:9展示而计算出来的页面展示宽度
let pageWidth;
if (clientWidth / clientHeight > 16 / 9) {
  pageWidth = clientHeight * (16 / 9);
} else {
  pageWidth = clientWidth;
}

// pageHeight是为了满足16:9展示而通过计算出来的宽度再次计算出来的页面展示高度
let pageHeight = pageWidth / (16 / 9);

// 动态设置rem，始终为宽度的百分之一
const string = `<style>html {
  font-size:${pageWidth / 100}px
} </style>`;

// 把上面的style设置，写在网页中
document.write(string);
// 必须另起一个script标签设置下面的内容才生效
// 动态设置app容器的宽高，始终保持16:9
const app = document.querySelector("#app");
app.style.width = pageWidth + "px";
app.style.height = pageHeight + "px";

// 设置垂直居中，把多余空间的一半作为margin-top
app.style.marginTop = (clientHeight - pageHeight) / 2 + "px";

// 一定要有这一步赋值，不然其他文件无法读取
window.pageWidth = pageWidth;
