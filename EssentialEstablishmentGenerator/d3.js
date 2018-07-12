setup.testd3 = function() {

d3.select("body").append("p").text("Hello1 D3");
          d3.select("body").append("p").text("Hello2 D3");
          d3.select("body").append("p").text("Hello3 D3");
          d3.select("body").append("p").text("Hello4 D3");
          d3.selectAll("p").style("color", "red");
}
