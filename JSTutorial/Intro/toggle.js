var isPurple = false
var buttonClicked = document.querySelector("button")
buttonClicked.addEventListener("click", function() {
  
  //if (isPurple){
  //  document.body.style.background = "white"
  //} else {
  //  document.body.style.background = "purple"
  //}
  //isPurple = !isPurple
  document.body.classList.toggle("purple");
});