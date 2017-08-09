var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var r1Button = document.querySelector("#r1");
var playTo = document.querySelector("input");
var playToDisp = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
  if (!gameOver){
    p1Score++;
    p1Disp.textContent = p1Score;
    if (p1Score >= winningScore){
      p1Disp.classList.add("winner");
      gameOver = true}
  }

  
});

p2Button.addEventListener("click", function(){
  if (!gameOver){
    p2Score++;
    p2Disp.textContent = p2Score;
    if (p2Score >= winningScore){
      p2Disp.classList.add("winner");
      gameOver = true}
  }
  
})

r1Button.addEventListener("click", function(){
 reset();
})

playTo.addEventListener("change", function() {
  playToDisp.textContent = playTo.value;
  winningScore = Number(playTo.value);
  reset();
});

function reset(){
  p1Score = 0;
  p1Disp.textContent = p1Score;
  p1Disp.classList.remove("winner");
  p2Score = 0;
  p2Disp.textContent = p2Score;
  p2Disp.classList.remove("winner");
  gameOver = false;
}