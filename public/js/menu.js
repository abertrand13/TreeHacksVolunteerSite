$(document).ready(function() {
	$("#menu").css("width", "50%");
	var menuWidth = $("#menu").css("width");

	$("#menubtn").click(function() {
		switch($("#content").css("left")) {
			case "0px":
				console.log(menuWidth);
				//$("#titlebar").css("position", "relative");
				$("#content").animate({"left": menuWidth});
			break;

			default:
				//$("#titlebar").css("position", "fixed");
				$("#content").animate({"left": "0px"});
			break;
		}
	});
});

function link(destination) {
	window.location = destination;
}