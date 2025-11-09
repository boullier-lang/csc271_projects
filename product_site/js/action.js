// 11/8/2025
//Mathew Boullier
//Simple script that displays the correct content for the 'action' pages. Can swap between movies, shows, and games.


action_movies = [["Mad Max: Fury Road", "https://static.wikia.nocookie.net/roadwarrior/images/7/7c/Mad-Max_Fury-Road_Poster_006.jpg/revision/latest/scale-to-width-down/1000?cb=20150521135624"],
["John Wick", "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"],
["Extraction", "https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png"],
["The Raid: Redemption", "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg"], 
["Top Gun: Maverick", "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg"]]

action_shows = [["The Boys", "https://static.wikia.nocookie.net/amazons-the-boys/images/3/39/The_Boys_Poster.jpg"], 
["Reacher", "https://upload.wikimedia.org/wikipedia/en/9/9d/Reacher_season_3_poster.jpeg"],
["24","https://static.wikia.nocookie.net/24wikia/images/0/03/Season_8_Cast.jpg"],
["The Witcher (Show)", "https://static.wikia.nocookie.net/witcher/images/a/a4/Netflix_poster_s1.jpg"],
["The Mandalorian", "https://static.wikia.nocookie.net/themandalorian/images/c/cc/Opening_Title.jpg"]]



action_games = [["God of War", "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"],
["Ghost of Tsushima","https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"],
["DOOM","https://upload.wikimedia.org/wikipedia/en/2/28/Doom_Cover.jpg"],
["Uncharted 4", "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg"], 
["Infamous: Second Son", "https://static.wikia.nocookie.net/infamous/images/a/ab/Second_Son_front_cover.jpg/revision/latest?cb=20140322154820"]]



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