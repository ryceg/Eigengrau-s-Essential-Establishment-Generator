var theData = [1,2,3,4,5];
     var paras = d3.select(“body”)
                   .selectAll(“p”)
                   .data(theData)
                   .enter()
                   .append(“p”)
                   .text(“D3 “);

 d3.select(“body”).append(“paras”);
