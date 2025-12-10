// 11/8/2025
//Mathew Boullier
//Simple script that displays the correct content for the 'action' pages. Can swap between movies, shows, and games.
//Update 12/9/2025: Modular so it works for any page, renamed to explore.js

function EntryItem(title, type, url, cover_url, rating, genre) {
  this.title = title;
  this.type = type;
  this.url = url;
  this.cover_url = cover_url;
  this.rating = rating;
  this.genre = genre;

  this.get_url = function() {
    return this.url;
  };

  this.get_cover = function() {
    return this.cover_url;
  };

  this.get_rating = function() {
    return this.rating;
  };
  
  this.get_title = function() {
	return this.title;
  };
}



action_movies = [
  new EntryItem("Mad Max: Fury Road", "movie", null, "../images/poster_madmax.jpg", null, "action"),
  new EntryItem("John Wick", "movie", null, "../images/poster_johnwick.jpg", null, "action"),
  new EntryItem("Extraction", "movie", null, "../images/poster_extraction.jpg", null, "action"),
  new EntryItem("The Raid: Redemption", "movie", null, "../images/poster_raid.jpg", null, "action"),
  new EntryItem("Top Gun: Maverick", "movie", null, "../images/poster_topgun.jpg", null, "action")
];

war_movies = [
  new EntryItem("1917", "movie", null, "../images/poster_1917.jpeg", null, "action"),
  new EntryItem("Saving Private Ryan", "movie", null, "../images/poster_ryan.jpeg", null, "action"),
];

documentary_movies = [
  new EntryItem("Free Solo", "movie", null, "../images/poster_freesolo.jpeg", null, "action"),
  new EntryItem("Won't You be My Neighbor?", "movie", null, "../images/poster_neighbor.jpeg", null, "action"),
]

drama_movies = [
  new EntryItem("Manchester by the Sea", "movie", null, "../images/poster_manchester.jpeg", null, "action"),
  new EntryItem("The Shawshank Redemption", "movie", null, "../images/poster_shawshank.jpeg", null, "action"),
]

crime_movies = [
  new EntryItem("The Departed", "movie", null, "../images/poster_departed.jpeg", null, "action"),
  new EntryItem("Heat", "movie", null, "../images/poster_heat.jpeg", null, "action"),
]

superhero_movies = [
  new EntryItem("The Dark Knight", "movie", null, "../images/poster_knight.jpeg", null, "action"),
  new EntryItem("Into the Spiderverse", "movie", null, "../images/poster_spider.jpeg", null, "action"),
]

family_movies = [
  new EntryItem("Paddington", "movie", null, "../images/poster_paddington.jpeg", null, "action"),
  new EntryItem("Inside Out", "movie", null, "../images/poster_insideout.jpeg", null, "action"),
]

romance_movies = [
  new EntryItem("50 First Dates", "movie", null, "../images/poster_50.jpeg", null, "action"),
  new EntryItem("Pride & Prejudice", "movie", null, "../images/poster_pride.jpeg", null, "action"),
]

anime_movies = [
  new EntryItem("Spirited Away", "movie", null, "../images/poster_spirited.jpeg", null, "action"),
  new EntryItem("Your Name", "movie", null, "../images/poster_yourname.jpeg", null, "action"),
]

scifi_movies = [
  new EntryItem("Arrival", "movie", null, "../images/poster_arrival.jpeg", null, "action"),
  new EntryItem("Blade Runner 2049", "movie", null, "../images/poster_brunner.jpeg", null, "action"),
]

horror_movies = [
  new EntryItem("Weapons", "movie", null, "../images/poster_weapons.jpeg", null, "action"),
  new EntryItem("The Conjuring", "movie", null, "../images/poster_conjuring.jpeg", null, "action"),
]

fantasy_movies = [
  new EntryItem("Lord of the Rings: Fellowship of the Ring", "movie", null, "../images/poster_lotr.jpeg", null, "action"),
  new EntryItem("Pan’s Labyrinth", "movie", null, "../images/poster_pan.jpeg", null, "action"),
]







action_shows = [
  new EntryItem("The Boys", "show", null, "../images/poster_boys.jpeg", null, "action"),
  new EntryItem("Reacher", "show", null, "../images/poster_reacher.jpeg", null, "action"),
  new EntryItem("24", "show", null, "../images/poster_24.jpeg", null, "action"),
  new EntryItem("The Witcher (Show)", "show", null, "../images/poster_witcher.jpeg", null, "action"),
  new EntryItem("The Mandalorian", "show", null, "../images/poster_mando.jpeg", null, "action")
];




action_games = [
  new EntryItem("God of War (2018)", "game", null, "../images/poster_gow.jpeg", null, "action"),
  new EntryItem("Ghost of Tsushima", "game", null, "../images/poster_ghosts.jpeg", null, "action"),
  new EntryItem("DOOM (2016)", "game", null, "../images/poster_doom.jpeg", null, "action"),
  new EntryItem("Uncharted 4", "game", null, "../images/poster_uncharted.jpeg", null, "action"),
  new EntryItem("Infamous: Second Son", "game", null, "../images/poster_infamous.jpeg", null, "action")
];












function displayMedia(input)
{
	grid = document.getElementsByClassName("grid_guy")[0];
	
	for(var i=0; i<input.length; i++)
	{
		info = input[i];
		image_declaration = "<div>" + "<img src='" + info.get_cover() + "' alt='" + info.get_title() + " poster' style='width:auto; height:300px;'>"
		name_declaration = "<p> <strong>"+info.get_title() + "</strong> </p> </div>"
		
		grid.innerHTML += (image_declaration+name_declaration)
		
		
	}
}

// Get HTML file name (using window; https://developer.mozilla.org/en-US/docs/Web/API/Window)
const path = window.location.pathname;
const fileName = path.substring(path.lastIndexOf('/') + 1).split('.')[0]; // "action_movies"

// Split into genre/type
const [genre, typePlural] = fileName.split('_');
const type = typePlural.slice(0, -1); // "movie" or "show"

// Update header
const header = document.getElementById("title");
header.textContent = `${genre.charAt(0).toUpperCase() + genre.slice(1)} ${type.charAt(0).toUpperCase() + type.slice(1)}s`;

// Get the corresponding array (using window again!)
const entries = window[`${genre}_${type}s`];


displayMedia(entries);