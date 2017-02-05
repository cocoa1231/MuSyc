$(function() {

    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }

    function freqToColor(frequency) {
        var logFreq = 12 * getBaseLog(2, frequency);
        var note = logFreq % 12;
        var hue = 256 * (note / 12);
    }

    $("#playpause").click(playpause());
});
