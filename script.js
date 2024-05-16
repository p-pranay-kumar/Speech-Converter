let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voices dropdown when voices are changed
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear previous options

    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceSelect.appendChild(option);
    });
};

// Event listener for voice selection change
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Event listener for button click to start speaking
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
