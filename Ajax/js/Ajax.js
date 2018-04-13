$(document).ready(function() {

	$("a").click(function() {

		var xhr;

		if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xhr = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		var method = "GET";
		var href = this.href + "?time=" + (new Date());

		xhr.open(method, href, true);
		xhr.send(null);

		xhr.onreadystatechange = function() {

			//			alert(xhr.readyState);
			if(xhr.readyState == 4 && xhr.status == 200) {
				//				alert(xhr.responseText);
				$("#details").html(xhr.responseText);
			}

		};

		return false;
	});

});