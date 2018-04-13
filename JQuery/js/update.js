$(document).ready(function() {

	$("#updateAttr").click(function() {

		$("#Cnblogs").attr({
			"href": "http://www.ccsu.cn",
			"title": "长大官网"
		});

	});

	$("#button").click(function() {

		alert("href:" + $("#Cnblogs").attr("href"));
	});

	$("#btn1").click(function() {

		$("#test1").text("Hello,World!!");
	});

	$("#btn2").click(function() {

		$("#test2").html("<b>Hello,World</b>");
	});
	
	
	$("#btn3").click(function() {

		$("#test3").val("Donal Trump");
	});

});