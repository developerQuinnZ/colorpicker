var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial colors
	squares[i].style.background = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.background;
			console.log(clickedColor, pickedColor)
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color) {
// loop through squares
for(var i = 0; i < colors.length; i++) {
//change all to correct choosen color.
	squares[i].style.background = color;
  }
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
// make array
var arr = [];
// add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColor());
		//push into array
	}
//return array
return arr;
}

function randomColor() {
	// roll 3 values from 0 - 255 for each Color
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}