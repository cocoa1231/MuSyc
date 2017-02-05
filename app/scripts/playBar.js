var time = 0;
var playing = false;

var playpause = function(){
    playing = !playing;
    alert("meow");
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
    }else{
        alert("No file loaded");
    }
}
