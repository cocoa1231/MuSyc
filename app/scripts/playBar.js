var time = 2;
var playing = false;

var playpause = function(){
    playing = !playing;

    var data = getFft();
    console.log(data);
}

var cycle = function(){
    if(playing){
        update();
    }
    setTimeout(cycle, 25);
}

cycle();


var update = function(){
    if(hasInput){
        time = (time + 0.025) % (musicData.length / sampleRate);
        $(".play-bar-progress").css("width", (time * 100 / (musicData.length / sampleRate)) + "%");
    }
}
