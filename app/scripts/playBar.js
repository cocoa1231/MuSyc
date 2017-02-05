var time = 2;
var playing = false;

var playpause = function(){
    playing = !playing;
}

var cycle = function(){
    if(playing){
        update();
    }
    setTimeout(cycle, 25);
}

cycle();

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var update = function(){
    if(hasInput){
        time = (time + 0.025) % (musicData.length / sampleRate);
        $(".play-bar-progress").css("width", (time * 100 / (musicData.length / sampleRate)) + "%");

        var data = getFft();

        var sum = 0.0;
        var colorData = [0.0, 0.0, 0.0];
        for(var i = 1;i < 256;i++){
            sum += data[i];
            var color1 = getColor(Math.floor(getNote(MULTIPLIER * i)));
            //console.log(Math.floor(getNote(MULTIPLIER * i)));
            //console.log(color1);
            var rgb = hexToRgb(color1);
            colorData[0] += rgb.r * data[i];
            colorData[1] += rgb.g * data[i];
            colorData[2] += rgb.b * data[i];

        }
var str =  "rgb(" + Math.floor(colorData[0]  / sum) + "," + Math.floor(colorData[1]  / sum) + "," + Math.floor(colorData[2]  / sum) + "," + ")";
console.log(str);

        $("body").css("background", str);
    }
}