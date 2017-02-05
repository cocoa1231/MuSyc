$(function() {

    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }

    function freqToColor(frequency) {
        var logFreq = 12 * getBaseLog(2, frequency);
        var note = logFreq % 12;
        var hue = TAKE * (note / 12);
    }

    $("#playpause").click(function(){
        $(this).find("i").text(playing ? "play_arrow" : "pause");
        playpause();
        var audioplayer = document.getElementById('sound');
        if (audioplayer.paused) {
            audioplayer.play();
        }
        else {
            audioplayer.pause();
        }
    });
});

function playFile(obj) {
    var sound = document.getElementById('sound');
    var reader = new FileReader();
    reader.onload = (function(audio) {
        return function(e) {
            audio.src = e.target.result;
        };
    })(sound);
    reader.addEventListener('load', function() {
        // document.getElementById("sound").play()
    });
    reader.readAsDataURL(obj.files[0]);
}
