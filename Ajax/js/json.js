$(document).ready(function() {

	$("a").click(function() {

		var xhr = new XMLHttpRequest();
		var href = this.href;
		var method = "GET";

		xhr.open(method, href, true);
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {

				var jsonStr = xhr.responseText;
				var data = JSON.parse(jsonStr);
				console.log(data);
				$(".details").empty().append("<h2><a href = mailto:" +
					data.person.email + ">" + data.person.name + "</a> </h2>").append("<a href='" + data.person.website + "'>" + data.person.website + "</a>");

			}
		}
		//取消a的默认行为
		return false;
	});

});