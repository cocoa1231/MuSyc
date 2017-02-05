
var svgHeight = 700;
var svgWidth = 1000;

var updateGraph = function() {
    if (Math.floor(time * sampleRate) > POINTS * EXPAND) {


        var data2 = getFft();
        var dataPairs = [];
        for (var i=1; i<data2.length; i++) {
            dataPairs.push([i, data2[i]]);
        }
        console.log(dataPairs);

        d3.select("svg")
            .selectAll("rect")
            // .data([[1, 4], [2, 8], [3, 4], [4, 2], [6, 4], [5, 3]])
            .data(dataPairs)
            // .enter()
            // .append("rect")
        //     .attr('height', 200);
        //
            // .append("rect")
            .attr("x", function(d) {return d[0] * svgWidth / dataPairs.length;})
            .attr("y", function(d) {return svgHeight - d[1] * 10;})
            .attr("width", svgWidth / dataPairs.length)
            .attr("height", function(d) {return d[1] * 10;})
            .attr("fill", function(d) {
                var note = getNote(MULTIPLIER * d[0]);
                var c = getColor(getNote(MULTIPLIER * d[0]));

                return "rgb("+Math.floor(c[0]) + "," + Math.floor(c[1]) + "," + Math.floor(c[2]) + ")";
            });

    }
};
$(function() {
    var dat = new Array(512);
    for(var i = 0;i < 512;i++){
        dat[i] = i;
    }
        d3.select("svg")
            .selectAll("rect")
            // .data([[1, 4], [2, 8], [3, 4], [4, 2], [6, 4], [5, 3]])
            .data(dat)
            .enter()
            .append("rect")
        //     .attr('height', 200);
        //
            // .append("rect")
            .attr("x", function(d) {return d * svgWidth / dat.length;})
            .attr("y", 0)
            .attr("width", svgWidth / dat.length)
            .attr("height", function(d) {50;})
});