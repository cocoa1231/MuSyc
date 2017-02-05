var clears = 0;

visOptions.push(new Visualization(
    "Note Visualization",
    function(width, height) {
        clears = 0;
    },
    function(width, height) {
        if (Math.floor(time * sampleRate) > POINTS * EXPAND) {
            var data2 = getFft();
            var dataSmooth = new Array(TAKE);

            dataSmooth[0] = data2[0];
            dataSmooth[TAKE - 1] = data2[TAKE - 1];
            for(var i = 1; i < TAKE - 1;i++){
                dataSmooth[i] = (data2[i] * 2 + data2[i - 1] + data2[i + 1]) / 4;
                dataSmooth[i] *= Math.pow(i / TAKE * 2, .5);
            }

            var notes = new Array(TAKE);
            notes[0] = [false, 0];
            notes[TAKE - 1] = [false, 0];
            for(var i = 1; i < TAKE - 1;i++){
                if(dataSmooth[i] > dataSmooth[i-1] && dataSmooth[i] > dataSmooth[i+1] && dataSmooth[i] > 3){
                    notes[i] = [true, dataSmooth[i]];
                }else{
                    notes[i] = [false, 0];
                }
            }

            var nc = Math.floor((time * 100) / width);
            if(clears != nc){
                this.clean();
                clears = nc;
            }

            var dataPairs = [];
            for (var i=1; i<notes.length; i++) {
                if(notes[i][0]){
                    dataPairs.push([i, notes[i][1]]);
                }
            }

            for(var i = 0;i < dataPairs.length;i++){
                d3.select("svg")
                    .append("circle")
                    // .append("rect")
                //     .attr('height', 200);
                //
                    // .append("rect")
                    .attr("cx", function(d) {return (time * 100) % width;})
                    .attr("cy", function(d) {return height - dataPairs[i][0] * height / TAKE;})
                    .attr("r", function(d) {return Math.pow(dataPairs[i][1],0.85);})
                    .attr("fill", function(d) {
                        var note = getNote(MULTIPLIER * dataPairs[i][0]);
                        var c = getColor(getNote(MULTIPLIER * dataPairs[i][0]));

                        return "rgb("+Math.floor(c[0]) + "," + Math.floor(c[1]) + "," + Math.floor(c[2]) + ")";
                    });
            }
            // d3.select("svg")
            //     .selectAll("circle")
            //     // .data([[1, 4], [2, 8], [3, 4], [4, 2], [6, 4], [5, 3]])
            //     .data(dataPairs)
            //     .enter()
            //     .append("circle")
            //     // .append("rect")
            // //     .attr('height', 200);
            // //
            //     // .append("rect")
            //     .attr("cx", function(d) {console.log(d);return time * 100;})
            //     .attr("cy", function(d) {return height - d[0] * height / TAKE / 5;})
            //     .attr("r", function(d) {return 10;})
            //     .attr("fill", function(d) {
            //         var note = getNote(MULTIPLIER * d[0]);
            //         var c = getColor(getNote(MULTIPLIER * d[0]));
            //
            //         return "rgb("+Math.floor(c[0]) + "," + Math.floor(c[1]) + "," + Math.floor(c[2]) + ")";
            //     });

        }
    },
    function(){
        var graph = document.getElementById("graph");
        graph.innerHTML = '';
    }
));
