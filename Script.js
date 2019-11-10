var titles = ["Landing Pad", "Homepage", "Startpage", "Going Surfing On The Internet", "You're at base"];
var pictures = ["Pictures/MFW.jpg", "Pictures/Me.jpg"];
var texts = ["Suck on muh dick.", "Test", "WHAT? YEAH, OKAY!"];

var randTitles = Math.floor(Math.random() * titles.length);
var randPictures = Math.floor(Math.random() * pictures.length);
var randTexts = Math.floor(Math.random() * texts.length);

//pictures[randPictures]

document.title = titles[randTitles];
//document.body.style.backgroundImage.innerHTML = "url('Pictures/Me.jpg')";
//document.getElementById("Text").innerHTML = "Test";

/* TODO:
	-Random picture assignment
	-Random bottom text assignment
*/

// NOTE: Since Mozilla is retarded, I can't do a case by case exception and allow only my custom site to autoplay
// 		 so I have to let EVERY site or NO site autoplay. Cool
var annoyingSoundRand = Math.floor(Math.random() * 100000000000);
var playAnnoyingSoundRand = Math.floor(Math.random() * 100000000000);

var noiseList = ["Noise/DemoEarRape.mp3", "Noise/DontTouchThatDial.mp3", "Noise/LookBehindYou.mp3", "Noise/TheyAreHere.mp3"]

if(1 == 1) {//annoyingSoundRand == playAnnoyingSoundRand) {
	new Audio(noiseList[Math.floor(Math.random() * noiseList.length)]).play();
}