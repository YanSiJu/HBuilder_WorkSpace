$(document).ready(function() {

	$("#test-1").click(function() {

		var txt = $("<ul></ul>").html("<b id='txt'>列表</b>");

		$("#test-2").after(txt);
	});

	$("#test-2").click(function() {

		var txt_1 = $("<li></li>").html("ML");
		var txt_2 = $("<li></li>").html("DL");
		var txt_3 = $("<li></li>").html("caffee");
		var txt_4 = $("<li></li>").html("Tensorflow");
		$("b").after(txt_1, txt_2, txt_3, txt_4);
	});

});