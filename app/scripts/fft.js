function fft(amplitudes)
{
	var N = amplitudes.length;
	if( N <= 1 )
		return amplitudes;

	var hN = N / 2;
	var even = [];
	var odd = [];
	even.length = hN;
	odd.length = hN;
	for(var i = 0; i < hN; ++i)
	{
		even[i] = amplitudes[i*2];
		odd[i] = amplitudes[i*2+1];
	}
	even = cfft(even);
	odd = cfft(odd);

	var a = -2*Math.PI;
	for(var k = 0; k < hN; ++k)
	{
		if(!(even[k] instanceof Complex))
			even[k] = new Complex(even[k], 0);
		if(!(odd[k] instanceof Complex))
			odd[k] = new Complex(odd[k], 0);
		var p = k/N;
		var t = new Complex(0, a * p);
		t.cexp(t).mul(odd[k], t);
		amplitudes[k] = even[k].add(t, odd[k]);
		amplitudes[k + hN] = even[k].sub(t, even[k]);
	}
	return amplitudes;
}

// only powers of two please;
var POINTS = 1024;
var EXPAND = 4;
var TAKE = 256;

function getFft(){
    var data = new Array(POINTS);
	for(var i = 0;i < POINTS;i++){
		//document.write(typedArray[i] + "<br/>");
		data[i] = typedArray[-i * EXPAND + time * sampleRate];
	}
	var fftres = cfft(data);
	var mag = new Array(TAKE);
	for(var i = 0;i < TAKE;i++){
		mag[i] = Math.sqrt(fftres[i].re * fftres[i].re + fftres[i].im * fftres[i].im)
	}
    return mag;
}
