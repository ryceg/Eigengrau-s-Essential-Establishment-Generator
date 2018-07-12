setup.testd3 = function() {
var width=600, height=400, circle1;
    var drag = d3.behavior.drag()
                 .on(‘dragstart’, dragStart)
                 .on(‘drag’,      dragElement)
                 .on(‘dragend’,   dragEnd);
    d3.select("#circle1").call(drag);
    function dragStart(d, i) { }
    function dragElement(d, i) {
       circle1.attr("cx", d3.event.sourceEvent.pageX)
              .attr("cy", d3.event.sourceEvent.pageY);
    }
    function dragEnd(d, i) { }
    var svg = d3.select("body")
                .append("svg")
                .attr("width",  width)
                .attr("height", height);
        circle1 = svg.append("circle")
                     .attr("id", "circle1")
                     .attr("cx", 50)
                     .attr("cy", 50)
                     .attr("r",  30)
                     .attr("fill", "blue")
                     .call(drag);

}
