//11/1/2025
//Name: Mathew Boullier
//A simple JS script that swaps between different entries, using conditionals
//Updated 11/16/2025, to use DOM Events instead of HTML Events

var last_changed=0;


//I've taken a few CSC classes already, so I already know about maps ;)
//just looked up syntax for it here: https://www.w3schools.com/js/js_maps.asp
const entries = new Map([
  ["It (1990)", ["https://upload.wikimedia.org/wikipedia/en/b/b0/It_1990_Promotional_Poster.JPG", "review_pages/review_it-1990.html"]],
  ["Baldur's Gate 3",["https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg", "review_pages/review_bg3.html"] ],
  ["World of Warcraft", ["images/warcraft_poster.jpg", "review_pages/review_warcraft.html"]],
  ["Dragonball Z", ["https://m.media-amazon.com/images/M/MV5BN2VlNTdlMzQtYzE5OC00YmYwLTgyZTItYjEzMWY0ZDNjMTJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "review_pages/review_dbz.html"]],
  ["Gattaca", ["https://upload.wikimedia.org/wikipedia/en/d/de/Gattaca_poster.jpg", "review_pages/review_gattaca.html"]],
  ["The Shawshank Redemption", ["https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg", "review_pages/review_shawshank-redemption.html"]]
]);

const img = document.getElementById("discover-img");
const alt = document.getElementById("discover-link");

index = 0;

function set_image(src, alt_name, review_link)
{
	last_changed=Date.now();
	img.src=src;
	img.alt=alt_name;
	alt.href=review_link
	
}

//Set our image to our first entry
set_image("https://upload.wikimedia.org/wikipedia/en/b/b0/It_1990_Promotional_Poster.JPG", "It (1990)", "review_pages/review_it-1990.html")

function show_entry()
{

//in order to get our entry name,
//i followed this documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
entry_names = Array.from(entries.keys())
our_entry = entries.get(entry_names[index])

set_image(our_entry[0], entry_names[index], our_entry[1])



}


function handle_click(direction)
{
	if(direction == 'left')
	{
		if(index - 1 == -1)
		{
			index = entries.size - 1;
		}
		else
		{
			index -= 1;
		}
		
		show_entry();
	}
	else
	{
		if(index+1 == entries.size)
		{
			index=0;
		}
		else
		{
			index+=1;
		}
		show_entry();

	}


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