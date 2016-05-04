import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {RandomHelper} from 'randomHelper';
import {TextToSpeech} from 'textToSpeech';

@inject(AppState, RandomHelper, TextToSpeech)
export class Practice {
  heading = 'Practice';

  constructor(appState, randomHelper, textToSpeech) {
    this.appState = appState;
    this.randomHelper = randomHelper;
    this.textToSpeech = textToSpeech;
    
    this.spelling = "";
    this.showSpelling = false;
    this.currentWordIndex = -1;
    this.currentWord = "";
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
   
  submit() {
    return false;
  }
  
  //@computedFrom('appState.wordMasterList')
  get canPractice() {
    return this.appState.wordMasterList.length > 0;
  }
  
  get isSpellingValid() {
      return this.spelling.length > 0;
  }
  
  get isSpellingCorrect() {
      return this.spelling.toLowerCase() === this.currentWord.toLowerCase();
  }
  
  get spellingClassName() {
      return this.isSpellingCorrect ? "success" : "danger";
  }
  
  checkSpelling() {
    if (this.isSpellingCorrect){
        this.showSpelling = true;
        this.textToSpeech.speak("Perfect");
    }
    else {
        this.textToSpeech.speak("Try again");
    }
  }
  
  speakWord() {
    this.textToSpeech.speak(this.currentWord);
  }
  
  displaySpelling() {
    this.showSpelling = true;
    this.speakWord();
  }
  
  getNextWord() {
    this.spelling = "";
    this.showSpelling = false;
    this.currentWordIndex = this.randomHelper.getRandomInt(0, this.appState.wordMasterList.length);
    this.currentWord = this.appState.wordMasterList[this.currentWordIndex];

    this.textToSpeech.speak(this.currentWord);
  }
    
  resetMessages(){
    this.message = '';
    this.errorMessage = '';
    this.isSuccess = false;
    this.isError = false;
  }
  
  setMessage(m){
    this.message = m;
    this.isSuccess = true;
  }
  
  setErrorMessage(m){
    this.errorMessage = m;
    this.isError = true;
  }

  activate() {
      if (!this.canPractice){
          this.textToSpeech.speak("Welcome to spelling bee practice.");
          this.textToSpeech.speak("No words available. Please click Setup and load words.")
      }
      else {
          this.getNextWord();
      }
  }
}
