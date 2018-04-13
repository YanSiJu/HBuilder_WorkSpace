$(document).ready(function() {


	
	var obj = {
		"name": "Donal Trump",
		"age": 72,
		"sex": "male",
		"display": function() {
			alert("My name is " + this.name+","+this.age+" years old." );
		}
	};
	console.log(obj.age);
	obj.display();
	
	
	/*var str = "alert('Hello,json')";
	eval(str);
//	alert(str);*/

	
});