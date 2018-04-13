$(document).ready(function() {

	var jsonStr = '{"name": "Donal Trump","age": 72,"sex": "male"}';
	alert(jsonStr);
	var obj;
	obj = JSON.parse(jsonStr);

	console.log(obj);
	console.log("name:"+obj.name);
	console.log("age:"+obj.age);
	console.log("sex:"+obj.sex);

});