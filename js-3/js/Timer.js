var c = 0;
var t;

function timeCount(){
	document.getElementById("time").value = c;
	c = c+1;
	t = setTimeout("timeCount()",1000);
	
}

function stop(){
	c = 0;
	document.getElementById("time").value = 0;
	clearTimeout(t);
}


