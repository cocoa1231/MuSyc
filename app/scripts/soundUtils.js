

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

    var noteData = new Array(12);
    noteData = j;

    if(noteData == null){
        return [255, 0, 0];
    }
    // noteData[0] = j["A"];
    // noteData[1] = j["ASharp"];
    // noteData[2] = j["B"];
    // noteData[3] = j["C"];
    // noteData[4] = j["CSharp"];
    // noteData[5] = j["D"];
    // noteData[6] = j["DSharp"];
    // noteData[7] = j["E"];
    // noteData[8] = j["F"];
    // noteData[9] = j["FSharp"];
    // noteData[10] = j["G"];
    // noteData[11] = j["GSharp"];

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
