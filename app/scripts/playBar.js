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

var update = function(){
    time = (time + 0.025) % (musicData.length / sampleRate);
    $(".play-bar-progress").css("width", (time / (musicData.length / sampleRate) + "%");
}
