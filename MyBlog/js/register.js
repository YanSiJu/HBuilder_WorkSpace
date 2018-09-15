function register() {

	var tel = $("#tel");
	var userName = $("#userName");
	var nickName = $("#nickName");
	var pwd = $("#password");
	var data = {
		"tel": tel,
		"userName": userName,
		"nickName": nickName,
		"password": pwd
	}

	$.ajax({
		url: 'http://localhost:8080/user/login',
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function(response) {
			var msg = response.msg;
			if(msg == "0") {
				window.location.href = "jump.html";
			} else if(m == "-1") {
				var m = response.errormsg;
				$("#error").text(m);
			}
		},
		error: function(msg) {
			console.log(msg)
		}
	});
}