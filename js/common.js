
/* hedaer svg 애니메이션 d3.js */
const svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height"),
  x = d3.scaleLinear().range([0, width]);
angles = d3.range(0, 1.3 * Math.PI, Math.PI / 5);

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
