// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

const languages = document.getElementById("voice-select");
languages.addEventListener('click', (language) =>{
  const voices = speechSynthesis.getVoices();
  console.log(voices);
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    document.getElementById("voice-select").append(option);
  }
});

const button = document.querySelector("button");
button.addEventListener('click', (speech) => {
  const speek = window.SpeechSynthesis;
  speek.speak(document.getElementById("rext-to-speak"));
});