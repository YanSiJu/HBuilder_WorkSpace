$(document).ready(function() {
	
	$("#btn1").click(function(){
		
		alert("文本:"+$("#test").text());
	});
	
	
	$("#btn2").click(function(){
		
		alert("html:"+$("#test").html());
	});
	
	$("#btn3").click(function(){
		
		alert("href:"+$("#link").attr("href"));
	});
	
	
	$("#btn4").click(function(){
		
		alert("href:"+$("#input").val());
	});
	
});