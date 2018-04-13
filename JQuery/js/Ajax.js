$(document).ready(function() {
	$("#btn1").click(function() {

		$("#test").load("demo_tes.txt", function(responseTxt, statusTxt, xhr) {
			if(statusTxt == "success")
				alert("外部内容加载成功！");
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});

});