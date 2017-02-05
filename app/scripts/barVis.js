var canvas = document.getElementById('graph');
// var svgHeight = 700;
// canvas.width = svgWidth;
// console.log(svgWidth);

// var svgWidth = 1000;

visOptions.push(new Visualization("Bar Visualization",

function(width, height) {
    console.log("init");
    var dat = new Array(TAKE);
    for(var i = 0;i < TAKE;i++){
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
            .attr("x", function(d) {return d * width / dat.length;})
            .attr("y", 0)
            .attr("width", width / dat.length)
            .attr("height", function(d) {50;})
},
function(width, height) {
    if (Math.floor(time * sampleRate) > POINTS * EXPAND) {
        var data2 = getFft();
        var dataPairs = [];
        for (var i=1; i<data2.length; i++) {
            dataPairs.push([i, data2[i] * i / TAKE * 2]);
        }

        d3.select("svg")
            .selectAll("rect")
            // .data([[1, 4], [2, 8], [3, 4], [4, 2], [6, 4], [5, 3]])
            .data(dataPairs)
            // .enter()
            // .append("rect")
        //     .attr('height', 200);
        //
            // .append("rect")
            .attr("x", function(d) {return d[0] * width / dataPairs.length;})
            .attr("y", function(d) {return height - d[1] * 10;})
            .attr("width", width / dataPairs.length)
            .attr("height", function(d) {return d[1] * 10;})
            .attr("fill", function(d) {
                var note = getNote(MULTIPLIER * d[0]);
                var c = getColor(getNote(MULTIPLIER * d[0]));

                return "rgb("+Math.floor(c[0]) + "," + Math.floor(c[1]) + "," + Math.floor(c[2]) + ")";
            });

    }
},
function(){
    var graph = document.getElementById("graph");
    graph.innerHTML = '';
}));
