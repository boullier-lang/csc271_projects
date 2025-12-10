//11/1/2025
//Name: Mathew Boullier
//A simple JS script that swaps between different entries, using conditionals
//Updated 11/16/2025, to use DOM Events instead of HTML Events
//Updated 11/23/2025, to use Objects instead of a Map

var last_changed=0;


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


const entries = [
  new EntryItem(
    "It (1990)",
    "Horror",
    "review_pages/review_it-1990.html",
    "images/poster_it.jpeg",
    8,
    ""
  ),
  new EntryItem(
    "Baldur's Gate 3",
    "RPG",
    "review_pages/review_bg3.html",
    "images/poster_bg3.jpeg",
    9.7,
    ""
  ),
  new EntryItem(
    "World of Warcraft",
    "",
    "review_pages/review_warcraft.html",
    "images/poster_warcraft.jpeg",
    7,
    ""
  ),
  new EntryItem(
    "Dragonball Z",
    "Fighting",
    "review_pages/review_dbz.html",
    "images/poster_dbz.jpeg",
    9,
    ""
  ),
  new EntryItem(
    "Gattaca",
    "Sci-Fi",
    "review_pages/review_gattaca.html",
    "images/poster_gattaca.jpeg",
    9,
    ""
  ),
  new EntryItem(
    "The Shawshank Redemption",
    "Drama",
    "review_pages/review_shawshank-redemption.html",
    "images/poster_shawshank.jpeg",
    9.7,
    ""
  )
];



const latest_reviews = [
  new EntryItem(
    "Weapons",
    "",
    "review_pages/review_weapons.html",
    "",
    9.0,
    ""
  ),
  new EntryItem(
    "Hollow Knight: Silksong",
    "",
    "review_pages/review_silksong.html",
    "",
    9.3,
    ""
  ),
  new EntryItem(
    "Superman (2025)",
    "",
    "review_pages/review_superman.html",
    "",
    7.0,
    ""
  ),
  new EntryItem(
    "Clair Obscur",
    "",
    "review_pages/review_clair.html",
    "",
    10.0,
    ""
  ),
  new EntryItem(
    "It: Welcome To Derry",
    "",
    "review_pages/review_derry.html",
    "",
    8.7,
    ""
  )
];


const img = document.getElementById("discover-img");
const alt = document.getElementById("discover-link");
const rating_txt = document.getElementById("rating_txt");
const table = document.getElementById("review_table");

index = 0;

function set_image(src, alt_name, review_link)
{
	last_changed=Date.now();
	img.src=src;
	img.alt=alt_name;
	alt.href=review_link
	
}

//Set our image to our first entry
show_entry()

function show_entry()
{

  const current_entry = entries[index];

  // Fade out
  img.classList.remove("visible");

  // Wait for fade-out to finish
  setTimeout(() => {
    set_image(
      current_entry.get_cover(),
      current_entry.get_title(),
      current_entry.get_url()
    );

    // Fade in
    img.classList.add("visible");

    rating_txt.textContent = current_entry.get_rating() + " / 10";
  }, 300);
}


function handle_click(direction)
{
	if(direction == 'left')
	{
		if(index - 1 == -1)
		{
			index = entries.length - 1;
		}
		else
		{
			index -= 1;
		}
		
		show_entry();
	}
	else
	{
		index = (index+1)%entries.length
		show_entry();

	}


}

function add_entry_to_table(entry_to_add)
{
	piece_1 = "<tr> <td> <em> <a href='" +entry_to_add.get_url() + "'>" + entry_to_add.get_title() + " </a> </em> </td>"
	piece_2 = "<td> " + entry_to_add.get_rating() + " / 10 </td>"

	
	table.innerHTML += (piece_1 + piece_2)
	
}


leftBtn = document.getElementById('left-btn')
rightBtn = document.getElementById("right-btn")

leftBtn.addEventListener("click", () => handle_click("left"));
rightBtn.addEventListener("click", () => handle_click("right"));






//Promise object learned from:https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
//Date time syntax learned from the same source,
//but I've used it before in other projects
async function swap_movies()
{

	//This loop repeats forever, using the Promise object to delay and check the change in time
	//every second.
	//I used a while loop in this case because we need it to repeat forever, and since the condition is always
	//true, a do while() would just be unneccessary.
	while(true)
	{
		//Delay for 1 second
		await new Promise(r => setTimeout(r, 1000));
		//Check to see if now - lastchecked is more than 6 seconds
		if(Date.now() - last_changed > 6000)
		{
			handle_click("right")
		}

	}

}

swap_movies();



for (const item of latest_reviews) {
  add_entry_to_table(item)
}



