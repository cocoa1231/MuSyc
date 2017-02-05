var canvas = document.getElementById('graph');

bgVisOptions.push(new BackgroundVisualization('Average Pitch',
    function(data) {

        var sum = 0.0;
        var colorData = [0.0, 0.0, 0.0];
        for(var i = 1;i < TAKE;i++){
            sum += data[i];
            var rgb = getColor(Math.floor(getNote(MULTIPLIER * i)));
            colorData[0] += rgb[0] * data[i];
            colorData[1] += rgb[1] * data[i];
            colorData[2] += rgb[2] * data[i];

        }

        sum /= getMaxOfArray(data) / 300;
        var str =  "rgb(" + Math.floor(colorData[0]  / sum) + "," + Math.floor(colorData[1]  / sum) + "," + Math.floor(colorData[2]  / sum) +")";
        $("body").css("background", str);
    }
));
