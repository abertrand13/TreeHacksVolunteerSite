$(document).ready(function() {

	$.getJSON('/contactinfo', function(data) {
		console.log(data);
		var contacts = data;

		d3.select("#contacts").selectAll("div")
		.data(d3.values(contacts))
		.enter().append("div")
			.attr("class", function(d) {
				if(d.organizer) {
					return "organizer contact";
				} else {
					return "contact"
				}
			})
			.text(function(d) { return d.name; });

		$("#search").keyup(function() {
			var text = $(this).val().toLowerCase();
			$(".contact").each(function() {
				if($(this).text().toLowerCase().indexOf(text) == -1) {
					$(this).css("display", "none");
				} else {
					$(this).css("display", "");
				}
			})
		});

		$(".contact").click(function() {
			//PERHAPS THIS SHOULD BE D3 INSTEAD?//

			var data = $(this)[0]["__data__"];
			var name = data["name"];
			var email = data["email"];
			var phone = data["phone"];
			
			if($(this).text().indexOf(email) == -1) {
				$(this).append("<br>   " + email);
				$(this).append("<br>   " + phone);
			} else {
				$(this).text(name);
			}
		});
	});
});