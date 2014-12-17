$(document).ready(function() {
	
	var time = 7200;
	//title, UTC time of post, text, public?
	var announcements = 
		[{"title": "Title", "time": 7000, "text": "Sample text.", "public": false},
		{"title": "Color Scaling Test 2", "time": 4000, "text": "Sample text.", "public": false},
		{"title": "Color Scaling Test", "time": 3000, "text": "Sample text.", "public": false},
		{"title": "Sample Announcement", "time": 0, "text": "Testing parsing engine for announcements", "public": true}];

	var announcePosts = d3.select("#announcements").selectAll("div")
		.data(d3.values(announcements))
		.enter().append("div");

	announcePosts.append("h4")
		.text(function(d) {
			return d.title;
		});

	announcePosts.append("div")
		.text(function(d) {
			return d.text;
		});
	
	announcePosts.attr("class", function(d) {
			return (d.public ? "public" : "private") + " announcement";
		})
		.attr("style", function(d) {
			switch(d.public) {
				case true:
					return "background-color: #0000FF";
					break;

				case false:
					//green value determines place on gradient between red and yellow
					//figure out a way to inline this
					//#c0392b to #d35400
					var percent = ((time - d.time) / 3600);
					if(percent > 1) percent = 1;
					var rValue = 192 + Math.round(percent * 19);
					var gValue = 57 + Math.round(percent * 27)
					var bValue = 43 - Math.round(percent * 43)
					if(gValue > 155)
							gValue = 155;
					return "background-color: rgb(" + rValue +  "," + gValue + "," + bValue + ")";
					break;
			}
		});
});