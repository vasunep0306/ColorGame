var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked Color
    colorDisplay.textContent = pickedColor;
    //change the colors of the squares on the page.
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked Color
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

/**
Loop through all squares
*/
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

/**
Pick a random color
*/
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

/**
Here are the steps to make this array
1)make the array
2)add num random colors to array
*/
function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
