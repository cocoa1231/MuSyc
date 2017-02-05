var hasInput = false;
var musicData;
var sampleRate;

var openFile = function() {
	var input = document.getElementById("myFile");
	var audioContext = new AudioContext();

	var reader = new FileReader();
	reader.onload = function(){
		var arrayBuffer = reader.result;
		console.log("arrayBuffer:");
		console.log(arrayBuffer);
		audioContext.decodeAudioData(arrayBuffer, decodedDone);
	};
	var buffer = reader.readAsArrayBuffer(input.files[0]);

	sampleRate = audioContext.sampleRate;
	hasInput = true;

	$('.card.choose-sound').hide();
};

function decodedDone(decoded) {
	musicData = new Float32Array(decoded.length);
	musicData=decoded.getChannelData(0);
}
