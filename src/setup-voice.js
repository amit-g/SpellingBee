import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';
<<<<<<< HEAD
import {RandomHelper} from 'randomHelper';

@inject(AppState, TextToSpeech, RandomHelper, 'window')
export class SetupVoiceCustomElement {
  heading = 'Setup Voice';
  _sampleTexts = [
      "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "The difference between stupidity and genius is that genius has its limits.",
      "Anyone who has never made a mistake has never tried anything new.",
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones."
  ]

  constructor(appState, textToSpeech, randomHelper, window) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    this.randomHelper = randomHelper;
=======

@inject(AppState, TextToSpeech, 'window')
export class SetupVoiceCustomElement {
  heading = 'Setup Voice';

  constructor(appState, textToSpeech, window) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    this.window = window;
    
    this.voices = [];
    this.currentVoiceName = this.appState.voiceName;
<<<<<<< HEAD
    this.sampleText = "Hello, this is how I speak.";
=======
    this.sampleText = "Hello, this is how I speak";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }
  
  playVoice(index) {
      let message = this.sampleText;
      this.textToSpeech.speak(message, this.voices[index]);
<<<<<<< HEAD
      message = "I am using " + this.voices[index].name + " voice to read the text.";
=======
      message = "I am using " + this.voices[index].name + " voice";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
      
      this.sampleText = this._sampleTexts[this.randomHelper.getRandomInt(0, this._sampleTexts.length)];
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }
}
