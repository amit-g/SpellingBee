export class TextToSpeech {
    speak(message) {
        var utterance = new SpeechSynthesisUtterance(message);
        utterance.voice = speechSynthesis.getVoices()
                            .filter(voice => voice.name == 'Whisper')[0];
                            
        speechSynthesis.speak(utterance);
    }
}