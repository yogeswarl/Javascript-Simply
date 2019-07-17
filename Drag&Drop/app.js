const btn = document.querySelector('.talk');
const content = document.querySelector('.content')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ['thank you for the care', 'leave me alone', 'i am fine, thank you']
recognition.onstart = function () {
    console.log('voice is activated');
};

recognition.onresult = function(event) {
const current = event.resultIndex;

const transcript = event.results[current][0].transcript;
content.textContent = transcript;
readOutLoud(transcript);
};

btn.addEventListener('click', ()=> {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I do not know what you said';
    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}