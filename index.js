// function audioCreate(i) {
//   return function (){
//     var sound = new Audio(originalSource[i]);
//     sound.play();
//   }
// }

function buttonAnimation (target) {
  if (target.length > 3){
    console.log(target.slice(-1).toLowerCase());
    var targetToChange = document.querySelector("." + target.slice(-1).toLowerCase());
  }
  else {
    var targetToChange = document.querySelector("." + target);
  }
  changeColorOn = function(){
    targetToChange.classList.add("pressed");
  }
  changeColorOff = function(){
    targetToChange.classList.remove("pressed");
  }
  changeColorOn();
  setTimeout(changeColorOff.bind(null,null), 100);
}

var target = document.querySelectorAll("button.drum");
var audio = [];
//var instruments = ["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
//var originalSource = []
var i = 0;
//var c = 0;
//var keyMap = ["KeyW","KeyA","KeyS","KeyD","KeyJ","Keyk","KeyL"];


// for (var j = 0; j < instruments.length; j++) {
//   originalSource.push("sounds/"+ instruments[j] + ".mp3");
// }


// for (i = 0; i < target.length;i++) {
//   target[i].addEventListener("click", audioCreate(i));
// }

for (i = 0; i < target.length;i++) {
  target[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");

        crash.play();
        break;
      case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default: console.log(buttonInnerHTML);

    }
  });
}

document.addEventListener("keydown", function(event){

  buttonAnimation(event.code);

  switch (event.code) {
    case "KeyW":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "KeyA":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "KeyS":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "KeyD":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "KeyJ":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "KeyK":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "KeyL":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:

  }


})
