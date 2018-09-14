function login() {

	var name = $("#name");
	var pwd = $("#password");
	var data = {
		"name": name,
		"password": pwd
	}
	$.ajax({
		url: 'http://localhost:8080/user/login',
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function(response) {
			console.log(response);
			var m = response.msg;
			if(m == "0") {
				window.location.href = "index.html?user=" + response.user;
			} else if(m == "-1") {
				$("#error").text("帐号或密码错误");
			}
		},
		error: function(msg) {
			console.log(msg)
		}
	});
}