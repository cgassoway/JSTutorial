/******************************************
 *  Author : Author   
 *  Created On : Mon Jul 31 2017
 *  File : colorGame.js
 *******************************************/
var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var ColorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var headerBackground = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){

  setupModeButtons();
  setupSquares();
  resetButton.addEventListener("click", function() {
    reset();
  })
  
  reset();
}

function setupModeButtons() {
  for (var i=0; i < modeButtons.length; i++)
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Hard" ? numSquares=6: numSquares=3;
      reset();
  })
}

function setupSquares() {
  for(var i = 0; i<squares.length; i++){
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColor(clickedColor);
      } else { 
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent="Try again"}
    });
  };
}
 
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  for(var i = 0; i<squares.length; i++){
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {        
      squares[i].style.display = "none";
    }
  }
  headerBackground.style.backgroundColor = "steelblue";
}

function changeColor(color) {
  for (var i=0; i<squares.length; i++)
    squares[i].style.backgroundColor = color;
  headerBackground.style.backgroundColor = color;
}

function pickRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

function generateRandomColors(count) {
  var arr = [];
  for (var i=0; i< count; i++)
    arr.push(randomColor());
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue +")";
}