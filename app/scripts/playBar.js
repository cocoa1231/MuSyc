var time = 0;
var playing = false;

var lasttime = 0;

var vis;

var PADDING_BOT = 60;

var playpause = function(){
    playing = !playing;
    if (playing){
        lasttime = Date.now();
    }
}

var cycle = function(){
    if(playing){
        update();
    }
    setTimeout(cycle, 25);
}

cycle();

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

$(function(){
    var sel = document.getElementById('vis-sel');
    for(var i = 0;i < visOptions.length;i++){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(visOptions[i].name) );
        opt.value = i;
        sel.add(opt);
    }
    vis = visOptions[0];

    $("#vis-sel").change(function(){
        vis.clean();
        vis = visOptions[$(this).val()];
        vis.start($(window).width(), $(window).height() - PADDING_BOT);
    });

    vis.start($(window).width(), $(window).height() - PADDING_BOT);
});

var update = function(){
    if(hasInput){
        var dt = Date.now() - lasttime;
        time = (time + dt / 1000.0);
        if(time > (musicData.length / sampleRate)){
            time = 0;
            $("#playpause").find("i").text("play_arrow");
            playing = false;
        }
        lasttime += dt;
        $(".play-bar-progress").css("width", (time * 100 / (musicData.length / sampleRate)) + "%");

        var data = getFft();

        var sum = 0.0;
        var colorData = [0.0, 0.0, 0.0];
        for(var i = 1;i < TAKE;i++){
            sum += data[i];
            var rgb = getColor(Math.floor(getNote(MULTIPLIER * i)));
            //console.log(Math.floor(getNote(MULTIPLIER * i)));
            //console.log(color1);
            colorData[0] += rgb[0] * data[i];
            colorData[1] += rgb[1] * data[i];
            colorData[2] += rgb[2] * data[i];

        }

        sum /= getMaxOfArray(data) / 300;
        var str =  "rgb(" + Math.floor(colorData[0]  / sum) + "," + Math.floor(colorData[1]  / sum) + "," + Math.floor(colorData[2]  / sum) +")";

        $("body").css("background", str);


        vis.update($(window).width(), $(window).height() - PADDING_BOT);
    }
}
