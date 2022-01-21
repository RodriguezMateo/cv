for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", handleClick);
}

function handleClick() {
  var id = this.textContent;
  makeSound(id);
  buttonAnimation(id);
}

document.addEventListener("keydown", function (event) {
  var id = event.key;
  makeSound(id);
  buttonAnimation(id);
});

function makeSound(id) {
  if (id == "w") {
    var audio = new Audio((src = "sounds/tom-1.mp3"));
  } else if (id == "a") {
    var audio = new Audio((src = "sounds/tom-2.mp3"));
  } else if (id == "s") {
    var audio = new Audio((src = "sounds/tom-3.mp3"));
  } else if (id == "d") {
    var audio = new Audio((src = "sounds/tom-4.mp3"));
  } else if (id == "j") {
    var audio = new Audio((src = "sounds/snare.mp3"));
  } else if (id == "k") {
    var audio = new Audio((src = "sounds/crash.mp3"));
  } else if (id == "l") {
    var audio = new Audio((src = "sounds/kick-bass.mp3"));
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
