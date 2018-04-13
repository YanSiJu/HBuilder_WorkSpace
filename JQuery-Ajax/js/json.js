$(document).ready(function() {

	$("a").click(function() {

		var href = this.href;
		var args = {
			"date": new Date()
		};
		$.getJSON(href, args, function(data) {

		

			$(".details").empty().append("<h2><a href = mailto:" +
				data.person.email + ">" + data.person.name + "</a> </h2>").append("<a href='"+data.person.website+"'>"+data.person.website+"</a>");

		});

		return false;
	});

});