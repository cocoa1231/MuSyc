var time = 0;
var playing = false;

var lasttime = 0;

var vis;
var bgVis;

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
    var bgSel = document.getElementById('bg-vis-sel');
    for(var i = 0;i < bgVisOptions.length;i++){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(bgVisOptions[i].name) );
        opt.value = i;
        bgSel.add(opt);
    }
    vis = visOptions[0];
    bgVis = bgVisOptions[0];

    $("#vis-sel").change(function(){
        vis.clean();
        vis = visOptions[$(this).val()];
        vis.start($(window).width(), $(window).height() - PADDING_BOT);
    });
    $("#bg-vis-sel").change(function(){
        bgVis = bgVisOptions[$(this).val()];
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


        vis.update($(window).width(), $(window).height() - PADDING_BOT, data);
        bgVis.update(data);
    }
}
