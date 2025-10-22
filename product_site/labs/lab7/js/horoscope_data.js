var zodiacSign = "Cancer";
var birthMonth = "July";
var birthDay = 22;
var luckyNumber = 7.0;
var zodiacDesc = "Cancer, is a crab. That's pretty cool."
var astrology = false;
// Moods --
var zodiacMood=0.3;
var scorpioMood=0.2;
var scorpioMood2=0.4;
var averageMood = (zodiacMood+scorpioMood+scorpioMood2)/3;
var mood= "Cancer's mood today is: " + zodiacMood + " out of 1. The average mood rating for scorpio and cancer is: " + averageMood + " out of 1."
//
//Arrays
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var cancer = signs[6]
var scorpios = signs[10]
var zodiacSignMsg= "My zodiac sign is " + cancer + ". Curtis and Keely both are " + scorpios + "s!"
var messages = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
]

var chosenMsg = "Cancer chosen message: " + messages[4];
var scorpioMsg1 = "Scorpio chosen message_: " + messages[1];
var scorpioMsg2= "SECOND Scorpio chosen message: " + messages[2];





document.getElementById("sign").textContent = zodiacSign;
document.querySelector("h3.birthday").innerHTML += birthMonth + " " + birthDay;
document.querySelector("h4.luckyNum").innerHTML += luckyNumber
document.getElementsByTagName('p')[0].textContent = zodiacDesc;
document.getElementsByTagName('p')[1].innerHTML = "<strong>"+astrology+"</strong>"
document.getElementsByTagName('p')[2].innerHTML = mood;
document.getElementsByTagName('p')[3].innerHTML = zodiacSignMsg;
document.getElementsByTagName('p')[4].innerHTML = chosenMsg;
document.getElementsByTagName('p')[5].innerHTML = scorpioMsg1 + "<br>" + scorpioMsg2;
