

//Name: Mathew Boullier
//Date: 10/26
//A simple JS script (that took quite a bit of time!) that displays the user's review.

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
  new_average = ((8 + 6 + score)/3).toFixed(1);

  document.getElementsByClassName("center")[2].innerHTML = "<strong> Average Rating: </strong> " + new_average + "/10"
  const img = document.getElementsByTagName("img")[2];
  
  img.src="images/logo.png"
  img.alt="your id"
  
  document.querySelector("#your_review").innerHTML = "<strong> You (" + score + "/10) [" + checkedBackgrounds + "] </strong> <br>" + review
  
  
  
}