import {inject} from 'aurelia-framework';
import {AppState} from 'appState';

@inject('window', AppState)
export class TextToSpeech {
    constructor(window, appState) {
        this.window = window;
        this.appState = appState;
    }
    
    speak(message, voice) {
        var utterance = new this.window.SpeechSynthesisUtterance(message);

        if (voice) {
            utterance.voice = voice;
        }
        else {
            if (this.appState.voiceName) {
                utterance.voice = this.window.speechSynthesis.getVoices()
                                    .filter(voice => voice.name === this.appState.voiceName)[0];
            }
        }
                            
        this.window.speechSynthesis.speak(utterance);
    }
    
    get isSupported() {
        return !!this.window.speechSynthesis;
    }
    
    get voices() {
        return this.window.speechSynthesis.getVoices();
    }
}