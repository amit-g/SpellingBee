import {inject} from 'aurelia-framework';
import {TextToSpeech} from 'textToSpeech';

@inject(TextToSpeech)
export class Welcome {
  heading = 'Welcome to Spelling Bee Practice...';

  constructor(textToSpeech) {
    this.textToSpeech = textToSpeech;
  }
    
  get isSupported() {
    return this.textToSpeech.isSupported;
  }

  activate() {
    if (this.isSupported){
        this.textToSpeech.speak("Welcome to spelling bee practice.");
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}