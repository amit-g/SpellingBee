import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {RandomHelper} from 'randomHelper';
import {TextToSpeech} from 'textToSpeech';
import {DictionaryService} from 'dictionaryService';

@inject(AppState, RandomHelper, TextToSpeech, DictionaryService)
export class Practice {
  heading = 'Practice';

  constructor(appState, randomHelper, textToSpeech, dictionaryService) {
    this.appState = appState;
    this.randomHelper = randomHelper;
    this.textToSpeech = textToSpeech;
    this.dictionaryService = dictionaryService;
    
    this.spelling = "";
    this.showSpelling = false;
    this.currentWordIndex = -1;
    this.currentWord = "";
    
    this.definitions = [];
    
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
        this.showDefinitions();
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
    this.showDefinitions();
    this.speakWord();
  }
  
  getNextWord() {
    this.spelling = "";
    this.showSpelling = false;
    this.definitions.length = 0;
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
  
  showDefinitions(){
    if (this.definitions.length == 0){
      this.populateDefinitions();
    } 
  }
  
  populateDefinitions(){
    this.definitions.length = 0;
    this.dictionaryService.define(this.currentWord)
      .then(promiseData => {
          console.log(promiseData);
          Array.prototype.push.apply(this.definitions, promiseData.data);
      })
      .catch(promiseData => {
          console.log(promiseData);
          this.setErrorMessage(promiseData.errorMessage);
      });
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
