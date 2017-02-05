

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

var getColor = function(note){
    var j = JSON.parse(localStorage.getItem( "notes"));

    var noteData = new Array(12);
    noteData[0] = j["A"];
    noteData[1] = j["ASharp"];
    noteData[2] = j["B"];
    noteData[3] = j["C"];
    noteData[4] = j["CSharp"];
    noteData[5] = j["D"];
    noteData[6] = j["DSharp"];
    noteData[7] = j["E"];
    noteData[8] = j["F"];
    noteData[9] = j["FSharp"];
    noteData[10] = j["G"];
    noteData[11] = j["GSharp"];

    return noteData[note];
}
