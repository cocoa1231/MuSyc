
var context = new (window.AudioContext || window.webkitAudioContext)();

var playNote = new function(var freq, var seconds){
    var osc = context.createOscillator(); // instantiate an oscillator
    osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
    osc.frequency.value = freq; // Hz
    osc.connect(context.destination); // connect it to the destination
    osc.start(); // start the oscillator
    osc.stop(context.currentTime + seconds); // stop 2 seconds after the current time
}
