// 11/8/2025
//Mathew Boullier
//Simple script that displays the correct content for the 'action' pages. Can swap between movies, shows, and games.


action_movies = [["Mad Max: Fury Road", "../images/poster_madmax.jpg"],
["John Wick", "../images/poster_johnwick.jpg"],
["Extraction", "../images/poster_extraction.jpg"],
["The Raid: Redemption", "../images/poster_raid.jpg"], 
["Top Gun: Maverick", "../images/poster_topgun.jpg"]]

action_shows = [["The Boys", "../images/poster_boys.jpeg"], 
["Reacher", "../images/poster_reacher.jpeg"],
["24","../images/poster_24.jpeg"],
["The Witcher (Show)", "../images/poster_witcher.jpeg"],
["The Mandalorian", "../images/poster_mando.jpeg"]]



action_games = [["God of War (2018)", "../images/poster_gow.jpeg"],
["Ghost of Tsushima","../images/poster_ghosts.jpeg"],
["DOOM (2016)","../images/poster_doom.jpeg"],
["Uncharted 4", "../images/poster_uncharted.jpeg"], 
["Infamous: Second Son", "../images/poster_infamous.jpeg"]]



function getMediaType()
{
	var header = document.getElementById("title").textContent;
	
	switch (true) {
	  case header.includes("Movie"):
		return action_movies;
	  case header.includes("Show"):
		return action_shows;
	  case header.includes("Game"):
		return action_games;
	}
	
	
}






function displayMedia(input)
{
	grid = document.getElementsByClassName("grid_guy")[0];
	
	for(var i=0; i<input.length; i++)
	{
		info = input[i];
		image_declaration = "<div>" + "<img src='" + info[1] + "' alt='" + info[0] + " poster' style='width:auto; height:300px;'>"
		name_declaration = "<p> <strong>"+info[0] + "</strong> </p> </div>"
		
		grid.innerHTML += (image_declaration+name_declaration)
		
		
	}
}


var media_type = getMediaType();
displayMedia(media_type);