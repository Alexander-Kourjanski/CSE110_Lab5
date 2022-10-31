// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const volume = document.getElementById("volume-controls");
  let play_button = document.querySelector("button");
  play_button.addEventListener('click', playAudio);
}

window.addEventListener('change', function(image_update) {
  const horn = document.getElementById("horn-select");
  var output = document.querySelector("audio");
  if(horn.value == "car-horn"){
    document.querySelector("img").src = "assets/images/car-horn.svg";
    output.src = "assets/audio/car-horn.mp3";
  } else if(horn.value == "air-horn") {
    document.querySelector("img").src = "assets/images/air-horn.svg";
    output.src = "assets/audio/air-horn.mp3";
  } else if(horn.value == "party-horn") {
    document.querySelector("img").src = "assets/images/party-horn.svg";
    output.src = "assets/audio/party-horn.mp3";
  }
}, false);

function playAudio() {
  var currAudio = document.querySelector("audio");
  currAudio.play();

  const horn = document.getElementById("horn-select");
  if (horn.value == "party-horn") {
    var jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}

volume.addEventListener('change', (event)=>{
  var volume_select = document.getElementById("volume");
  
  volume_select.target = event.value / 100;
  var output = document.querySelector("audio");
  output.volume = volume_select.value/100;
  if(volume_select.value == 0) {
    document.querySelector("div>img").src = "assets/icons/volume-level-0.svg";
  }
  else if (volume_select.value <= 33) {
    document.querySelector("div>img").src = "assets/icons/volume-level-1.svg";
  }
  else if (volume_select.value <= 67){
    document.querySelector("div>img").src = "assets/icons/volume-level-2.svg";
  }
  else if(volume_select.value > 67) {
    document.querySelector("div>img").src = "assets/icons/volume-level-3.svg";
  }
});