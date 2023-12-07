// Initialize new SpeechSynthesisUtterance object
window.speechSynthesis = window.speechSynthesis || window.webkitSpeechRecognition;
let tts = new SpeechSynthesisUtterance();
// Set Speech Language
tts.lang = "en";
let voices = []; // global array of available voices
// Set voice to the first English one available
window.speechSynthesis.onvoiceschanged = () => {
	// Get List of Voices
	voices = window.speechSynthesis.getVoices();
	for (let voice of voices) {
		if (voice.lang.includes("en")) {
			tts.voice = voice;
			return;
		}
	}
};

window.SpeechRecognition = window.SpeechRecognition 
|| window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition();

// Needs to be false so that speech is not repeated
recognition.interimResults = false;

var speech = true; 

if (speech == true) {
	window.speechSynthesis.speak(tts);
	recognition.start(); 
	recognition.addEventListener('end', recognition.start); 
}

// Set Cookie
function setCookie(name, value) {
	let cookie = name + "=" + encodeURIComponent(value);
	document.cookie = cookie;
}

// Get Cookie
function getCookie(name) {
	let cookieArray = document.cookie.split(";");
	
	for(let i = 0; i < cookieArray.length; i++) {
		var cookiePair = cookieArray[i].split("=");
		if(name == cookiePair[0].trim()) {
			// Decode the cookie value and return
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}
