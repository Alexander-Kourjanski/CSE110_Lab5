// explore.js
const synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);
let voices = [];

function init() {
  // const voices = synth.getVoices();
  // console.log(voices);
  // for (let i = 0; i < voices.length; i++) {
  //   const option = document.createElement('option');
  //   option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
  // }

  const button = document.querySelector("button");
  button.addEventListener('click', sayTextBox);
}

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").append(option);
  }
}

setTimeout(populateVoiceList, 10);

function sayTextBox() {
  let utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  
  const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  
  const image = document.querySelector("img");
  image.src = "assets/images/smiling-open.png";

  console.log("Start speaking");
  synth.speak(utterance);
  utterance.addEventListener('end', (event) => {
    console.log("Done speaking");
    image.src = "assets/images/smiling.png";
  });
}
