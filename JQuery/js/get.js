$(document).ready(function() {


	$("#btn1").click(function() {
		$.get("Ajax.txt", function(data, status) {
			$("#test").html(data + status);
			//			alert("数据：" + data + "\n状态：" + status);
		});
	});
});