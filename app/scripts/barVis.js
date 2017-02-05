var canvas = document.getElementById('graph');

visOptions.push(new Visualization("Bar Visualization",

function(width, height) {
    console.log("init");
    var dat = new Array(TAKE);
    for(var i = 0;i < TAKE;i++){
        dat[i] = i;
    }
    d3.select("svg")
    .selectAll("rect")
    .data(dat)
    .enter()
    .append("rect")
    .attr("x", function(d) {return d * width / dat.length;})
    .attr("y", 0)
    .attr("width", width / dat.length)
    .attr("height", function(d) {50;})
},
function(width, height, data2) {
    if (Math.floor(time * sampleRate) > POINTS * EXPAND) {
        var dataPairs = [];
        for (var i=1; i<data2.length; i++) {
            dataPairs.push([i, data2[i]]);
        }

        d3.select("svg")
        .selectAll("rect")
        .data(dataPairs)
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
