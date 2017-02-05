

var getFreq = function(note, octave) {
    var scale = octave + note / 12.0;
    scale -= 4; // center scale around A4

    return 440.00 * Math.pow(2, scale);
}

var getNote = function(freq) {
    var octavesFromA4 = Math.log2(freq / 440);
    //#best practices
    return 12 * ((octavesFromA4 + 100) % 1);
}

var getOctave = function(frew) {
    var octavesFromA4 = Math.log2(freq / 440);
    return 4 + Math.floor(octavesFromA4);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

var getColor = function(note){
    var j = JSON.parse(localStorage.getItem( "notes"));

    if (!j) {
        j =["#bfbf40", "#a3cb62", "#40bf40", "#3cb4b4", "#4040bf", "#8747c2", "#b485d6",
        "#b03b83", "#bf4040", "#bf6240", "#bf9140", "#bfa640"];
    }


    var noteData = new Array(12);
    noteData = j;

    if(noteData == null){
        return [255, 0, 0];
    }

    var nn = Math.floor(note);
    var np = (nn + 1) % 12;
    //console.log(nn + "," + np);

    nn = hexToRgb(noteData[nn]);
    np = hexToRgb(noteData[np]);

    var tot = new Array(3);
    for(var i = 0; i < 3;i++){
        tot[i] = (note % 1) * np[i] + (1 - (note % 1)) * nn[i];
    }

    return tot;
}
