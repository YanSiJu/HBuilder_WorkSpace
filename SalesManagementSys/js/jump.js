$(document).ready(function() {
	var t = 5; //设定跳转的时间 
	function refer() {
		if(t == 0) {
			location = "http://www.ccsu.cn/"; //#设定跳转的链接地址 
		}
		$("#show").html("" + t + "秒后跳转到首页");
		//		document.getElementById('show').innerHTML = "" + t + "秒后跳转到首页"; // 显示倒计时 
		t--; // 计数器递减 
	};
	setInterval("refer()", 1000); //启动1秒定时 

});