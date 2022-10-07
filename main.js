const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;

const FRAME1 = d3.select("#vis1")
  .append("svg")
  .attr("height", FRAME_HEIGHT)
  .attr("width", FRAME_WIDTH);

d3.csv("data/data.csv").then((data) => {
  console.log(data)

  // max value in the data set
  const MAX_Y = d3.max(data, (d) => {
    return parseInt(d.Value);
  })

  
})


