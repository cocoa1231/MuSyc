
var canvas = document.getElementById('graph');

visOptions.push(new Visualization(
    "Ball Visualization",
    function(width, height) {

        var dat = new Array(TAKE);
        for(var i = 0;i < TAKE;i++){
            dat[i] = i;
        }
            d3.select("svg")
                .selectAll("circle")
                .data(dat)
                .enter()
                .append("circle")
                .attr("cx", function(d) {return d * width / dat.length;})
                .attr("cy", 0)
                .attr("r", 10);
    },
    function(width, height, data2) {
        var dataSmooth = new Array(TAKE);
        dataSmooth[0] = data2[0];
        dataSmooth[TAKE - 1] = data2[TAKE - 1];
        for(var i = 1; i < TAKE - 1;i++){
            dataSmooth[i] = (data2[i] * 2 + data2[i - 1] + data2[i + 1]) / 4;
            dataSmooth[i] *= Math.pow(i / TAKE * 2, .5) * 2;
        }


        if (Math.floor(time * sampleRate) > POINTS * EXPAND) {
            var dataPairs = [];
            for (var i=1; i<dataSmooth.length; i++) {
                dataPairs.push([i, dataSmooth[i]]);
            }
            d3.select("svg")
                .selectAll("circle")
                .data(dataPairs)
                .attr("cx", function(d) {return d[0] * width / dataPairs.length;})
                .attr("cy", function(d) {return height - d[1] * 10;})
                .attr("r", function(d) {return Math.pow(d[1]*1.5,0.7) + 2;})
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
    }
));
