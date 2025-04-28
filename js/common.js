import { getScrollData } from "./commonScroll.js";

// 페이지 전체 높이 구하는 공식
function pageHeight_func() {
  const body = document.body,
    html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return height;
}
const page_totalHeight = pageHeight_func(); // 페이지 전체 높이
const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // 전체 페이지 - 뷰포트 높이

/* top button */
const topButton = document.getElementById("topButton"),
  topBtn_bg = topButton.querySelector(".topBtn_bg"),
  topBtn_per = topButton.querySelector(".topBtn_per");
// 스크롤시 top button
window.addEventListener("scroll", function () {
  const currentScroll = getScrollData();
  let scroll_percent = Math.floor((currentScroll / docHeight) * 100);
  topBtn_per.textContent = `${scroll_percent} %`
  let rotateDeg = scroll_percent * 3.6;
  topBtn_bg.style.transform = `rotate(${rotateDeg}deg)`
});

/* header */
// hedaer svg 애니메이션 d3.js
function header_svg() {
  const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    x = d3.scaleLinear().range([0, width]);
  const angles = d3.range(0, 1.3 * Math.PI, Math.PI / 5);

  const path = svg
    .append("g")
    .attr("transform", `translate(${width / 100}, ${height / 2})`)
    .attr("fill", "none")
    .attr("stroke-width", 1)
    .selectAll("path")
    .data(["#ffffff"])
    .enter()
    .append("path")
    //.attr('stroke', d => { return d })
    .style("opacity", 1)
    //.style('mix-blend-mode', 'lighten')
    .datum((d, i) => {
      return (
        d3
          .line()
          //.curve(d3.curveBasisOpen)
          .x((angles) => {
            return x(angles / 5);
          })
          .y((angles) => {
            const t = d3.now() / 500;
            return Math.cos(angles * 4 - (i * 2 * Math.PI) / 4 + t) * Math.pow((2 + Math.cos(angles - t)) / 2, 4) * 2;
          })
      );
    });

  d3.timer(() => {
    path.attr("d", (d) => {
      return d(angles);
    });
  });
}
header_svg();
