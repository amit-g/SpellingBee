import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';

@inject(AppState, TextToSpeech, 'window')
export class SetupVoiceCustomElement {
  heading = 'Setup Voice';

  constructor(appState, textToSpeech, window) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    this.window = window;
    
    this.voices = [];
    this.currentVoiceName = this.appState.voiceName;
    this.sampleText = "Hello, this is how I speak";
  }
  
  playVoice(index) {
      let message = this.sampleText;
      this.textToSpeech.speak(message, this.voices[index]);
  }

  setVoice(index) {
      this.currentVoiceName = this.appState.voiceName = this.voices[index].name;
      
      let message = "Voice set to " + this.currentVoiceName;
      this.textToSpeech.speak(message, this.voices[index]);
  }
  
  populateVoices() {
      this.voices = this.textToSpeech.voices;
  }

  attached() {
      if (this.voices.length === 0) {
          this.populateVoices();
          if (this.voices.length === 0) {
              this.window.setTimeout(() => this.populateVoices(), 100);
          }      
      }
  }
}
