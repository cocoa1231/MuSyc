$(function() {

    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }

    function freqToColor(frequency) {
        var logFreq = 12 * getBaseLog(2, frequency);
        var note = logFreq % 12;
        var hue = 256 * (note / 12);
    }

    var colors = {
        "C": 'green',
        "C#": 'blue',
        "D": 'orange',
        "D#": 'yellow',
        "E": 'purple',
        "F": 'crimson',
        "F#": 'darkblue',
        "G": 'fuchsia',
        "G#": 'indianred',
        "A": 'pink',
        "A#": 'red',
        "B": 'black'
    };

    var notes = ["D", "D", "D#","G#"];

    for (var i=0; i<notes.length; i++) {
        $('.bar-container').append("<div class='note' style='background: " + colors[notes[i]] + "'></div>")
    }

    var getMaxOfArray = function(numArray) {
        return Math.max.apply(null, numArray);
    }

    var data = [1, 2, 4, 2, 3, 4, 2];
    var maxData = getMaxOfArray(data);
    var totalWidth = 1000;
    var totalHeight = 300;

    var width = totalWidth / data.length;

    var c=document.getElementById("graph");
    var ctx=c.getContext("2d");

    for (var i=0; i<data.length; i++) {
        var datum = data[i];
        var height = totalHeight * data[i] / maxData;
        var offsetX = i * width;
        ctx.rect(offsetX, totalHeight - height, width, height);
        ctx.stroke();
    }





    console.log('\'Allo \'Allo!');
});
