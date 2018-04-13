$(document).ready(function() {
	$("#btn").click(function() {

		$("#divDemo").animate({
			left: '250px',
			height: '+=150px',
			width: '+=150px'
		});
		$("#divDemo").animate({
			fontSize: '4em'
		});

		$("#divDemo").animate({
			fontSize: '1em'
		});
		$("#divDemo").animate({
			right: '250px',
			height: '-=150px',
			width: '-=150px'
		});

	});
});