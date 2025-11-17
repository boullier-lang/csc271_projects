

//Name: Mathew Boullier
//Date: 10/26
//A simple JS script (that took quite a bit of time!) that displays the user's review.
//Updated 11/1/2025, to be completely modular
//Updated 11/16/2025, to incorporate DOM Events

//This function will get other scores, add them together, and return the value
function get_other_scores()
{
	var total=0;

	//Get all the paragraphs, since this is where the review is stored.
	//We know that the first two paragraphs will always be 1) media description, and 2) our review
	//To get the remaining reviews, we should loop from index 2 to the end
	paragraphs = document.querySelectorAll("p");

	//This loop goes through each valid paragraph and extracts the score that template users have given.
	//I used a for loop for this because we are getting indicies of an array, which is usually done in a for-loop.
	for(var i=2; i<paragraphs.length; i++)
	{
		//Now that we have the paragraph text, we need to parse the text to find our review .
		//We know that all reviews are set up so that the actual value of the review is (x/10). We can use delimiters!
		var text_content = paragraphs[i].textContent;
		var start = text_content.indexOf("(");
		var end = text_content.indexOf(")");
		var new_txt = text_content.slice(start+1,end);
		var our_value = Number(new_txt.split("/")[0])
		total+=our_value;
		console.log(our_value);

	}


	return [total, paragraphs.length-2]



}

function set_scoring(playerDidReview, score)
{

  scoring_info = get_other_scores();
  new_average = ((scoring_info[0]+ score)/ (scoring_info[1]+Number(playerDidReview))).toFixed(1);

  document.getElementsByClassName("center")[2].innerHTML = "<strong> Average Rating: </strong> " + new_average + "/10";

}

//Update our scoring based off page information
set_scoring(false, 0);


function submit_review()
{
  const score = Number(document.getElementById("score").value);
  const review = document.getElementById("review").value.trim();
  
  //After lots of pain understanding this. I was able to do so using this:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  //and this:
  //https://www.w3schools.com/jsref/jsref_map.asp
  const checkedBackgrounds = Array.from(document.querySelectorAll('input[name="background"]:checked')).map(cb => cb.value).join(", ");
  
  
  if(!score || !review)
  {
	  alert("Please input values for both your review, and your score!")
	  return;
  }
  
  console.log(checkedBackgrounds)
  
  //Update the review page for the user's review!
	set_scoring(true, score);

  const img = document.getElementsByTagName("img")[2];
  
  img.src="../images/logo.png"
  img.alt="your id"
  
  document.querySelector("#your_review").innerHTML = "<strong> You (" + score + "/10) [" + checkedBackgrounds + "] </strong> <br>" + review
  
  
  
}




///Event listeners below
const reviewField = document.getElementById("review");
const message = document.getElementById("message");
const reviewForm = document.getElementById("ratingForm");
const reviewBtn = document.getElementById("submitReview")

reviewField.addEventListener("focus", function () {
  message.style.color = "blue";
  message.textContent = "Please enter a review (at least 10 characters).";
});

reviewField.addEventListener("blur", function () {
  const review_msg = reviewField.value.trim();

  if (review_msg.length < 10) {
    message.style.color = "blue";
    message.innerHTML = "<strong>Error: Review must be at least 10 characters.</strong>";
  } else {
    message.textContent = "";
  }
});

reviewBtn.addEventListener("click", function (event) {
	console.log("HEY!!")
  const review_msg = reviewField.value.trim();

  if (review_msg.length < 10) {
    message.style.color = "red";
    message.textContent = "Error: Review must be at least 10 characters.";
    return;
  }
  message.textContent = "Success! Your review has been recorded.";
  submit_review();
});