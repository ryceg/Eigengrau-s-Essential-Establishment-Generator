setup.testd3 = function() {
var width = 800, height = 500;
          var radius = 30, moveCount = 0, index = 0;
          var circleColors = ["red", "yellow", "green", "blue"];
          var svg = d3.select("body")
            .append("svg")
            .attr("width",  width)
            .attr("height", height);
          svg.on("mousemove", function() {
            index = (++moveCount) % circleColors.length;
            var circle = svg.append("circle")
               .attr("cx", (width-100)*Math.random())
               .attr("cy", (height-100)*Math.random())
               .attr("r",  radius);
            circle.attr("fill", circleColors[index]);
          });

}
