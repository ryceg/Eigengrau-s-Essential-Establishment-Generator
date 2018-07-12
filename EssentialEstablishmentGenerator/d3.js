setup.testd3 = function() {
          d3.select("body")
            .append("svg")
            .attr("width",  300)
            .attr("height", 300)
            .append("circle")
            .attr("cx", 150)
            .attr("cy", 150)
            .attr("r",  30)
            .attr("fill", "blue")
            .on("mouseover", function() {
               return d3.select(this)
                        .attr("r", 80)
                        .attr("fill", "red");
            })
            .on("mouseout", function() {
              return d3.select(this)
                       .attr("r", 50)
                       .attr("fill", "green");
            }).on("click", function(d, i) {
              return console.log(d, i);
            });

}
