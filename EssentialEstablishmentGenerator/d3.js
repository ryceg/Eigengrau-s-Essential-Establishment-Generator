setup.testd3 = function() {

var width = 600, height = 400;
// circle and ellipse attributes
     var cx = 50,   cy = 80,  radius1 = 40,
         ex = 250,  ey = 80,  radius2 = 80;
     // rectangle attributes
     var rectX = 20, rectY = 200;
     var rWidth = 100, rHeight = 50;
     // line segment attributes
     var x1=150,y1=150,x2=300,y2=250,lineWidth=4;
     var colors = ["red", "blue", "green"];
     // create an SVG element
     var svg = d3.select("body")
                 .append("svg")
                 .attr("width",  width)
                 .attr("height", height);
     // append a circle
     svg.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r",  radius1)
        .attr("fill", colors[0]);
     // append an ellipse
     svg.append("ellipse")
        .attr("cx", ex)
        .attr("cy", ey)
        .attr("rx", radius2)
        .attr("ry", radius1)
        .attr("fill", colors[1]);
     // append a rectangle
     svg.append("rect")
        .attr("x", rectX)
        .attr("y", rectY)
        .attr("width",  rWidth)
        .attr("height", rHeight)
        .attr("fill", colors[2]);
     // append a line segment
     svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", lineWidth)
        .attr("stroke", colors[0]);

}
