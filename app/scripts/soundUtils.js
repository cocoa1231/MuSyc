

var getFreq = function(note, octave) {
    var scale = octave + note / 12.0;
    scale -= 4; // center scale around A4

    return 440.00 * Math.pow(2, scale);
}

var getNote = function(freq) {
    var octavesFromA4 = Math.log2(freq / 440);
    return 12 * (octavesFromA4 % 1);
}

var getOctave = function(frew) {
    var octavesFromA4 = Math.log2(freq / 440);
    return 4 + Math.floor(octavesFromA4);
}
