console.log('\'Allo \'Allo!');
console.log(localStorage.getItem("notes"));

var aNote = document.getElementById("aNote");
var aSharpNote = document.getElementById("aSharpNote");
var bNote = document.getElementById("bNote");
var cNote = document.getElementById("cNote");
var cSharpNote = document.getElementById("cSharpNote");
var dNote = document.getElementById("dNote");
var dSharpNote = document.getElementById("dSharpNote");
var eNote = document.getElementById("eNote");
var fNote = document.getElementById("fNote");
var fSharpNote = document.getElementById("fSharpNote");
var gNote = document.getElementById("gNote");
var gSharpNote = document.getElementById("gSharpNote");

function resetColors(){
	aNote.value = "#ffff00";
	aSharpNote.value = "#adff2f";
	bNote.value = "#00ff00";
	cNote.value = "#00f0f0";
	cSharpNote.value = "#0000ff";
	dNote.value = "#8a2be2";
	dSharpNote.value = "#bf5fff";
	eNote.value = "#bb3385";
	fNote.value = "#ff0000";
	fSharpNote.value = "#ff4500";
	gNote.value = "#ffa500";
	gSharpNote.value = "#ffcc00";
}

function toughGuy(){
	document.getElementById('aTitle').style.color = aNote.value;
	document.getElementById('aSharpTitle').style.color = aSharpNote.value;
	document.getElementById('bTitle').style.color = bNote.value;
	document.getElementById('cTitle').style.color = cNote.value;
	document.getElementById('cSharpTitle').style.color = cSharpNote.value;
	document.getElementById('dTitle').style.color = dNote.value;
	document.getElementById('dSharpTitle').style.color = dSharpNote.value;
	document.getElementById('eTitle').style.color = eNote.value;
	document.getElementById('fTitle').style.color = fNote.value;
	document.getElementById('fSharpTitle').style.color = fSharpNote.value;
	document.getElementById('gTitle').style.color = gNote.value;
	document.getElementById('gSharpTitle').style.color = gSharpNote.value;
	var noteColors = [aNote.value, aSharpNote.value,bNote.value,cNote.value,cSharpNote.value,dNote.value,dSharpNote.value,eNote.value,fNote.value,fSharpNote.value,gNote.value,gSharpNote.value};
	localStorage.setItem("notes",JSON.stringify(noteColors));
}
