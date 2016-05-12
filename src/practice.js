import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {RandomHelper} from 'randomHelper';
import {TextToSpeech} from 'textToSpeech';
import {WordDefinition} from 'wordDefinition';
import {DictionaryService} from 'dictionaryService';
import {WordnikService} from 'wordnikService';

@inject('loDash', AppState, RandomHelper, TextToSpeech, DictionaryService, WordnikService)
export class Practice {
  heading = 'Practice';

  constructor(_, appState, randomHelper, textToSpeech, dictionaryService, wordnikService) {
    this._ = _;
    this.appState = appState;
    this.randomHelper = randomHelper;
    this.textToSpeech = textToSpeech;
    this.dictionaryService = dictionaryService;
    this.wordnikService = wordnikService;
    
    this.spelling = "";
    this.showSpelling = false;
    this.currentWordIndex = -1;
    this.currentWord = "";
    
    this.definitions = [];
    this.definitionIndex = -1;
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
   
  submit() {
    return false;
  }
  
  get canPractice() {
    return this.appState.wordMasterList && this.appState.wordMasterList.length > 0;
  }
  
  get wordCount() {
    return this.appState.wordMasterList.length;
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
  
  speakDefinition() {
    this.populateDefinitions()
        .then(promiseData => {
          if (this.definitionIndex >= 0 && this.definitionIndex < this.definitions.length) {
            var definition = this.definitions[this.definitionIndex];
            
            if (definition.partOfSpeech) {
              this.textToSpeech.speak(definition.partOfSpeech);
            }

            this.textToSpeech.speak(definition.text);
            
            this.definitionIndex++;
            
            if (this.definitionIndex >= this.definitions.length) {
              this.definitionIndex = 0;
            }
          }          
        });
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
    this.definitionIndex = -1;
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
    this.populateDefinitions();
  }
  
  populateDefinitions(){
    var promise = Promise.resolve();
    
    if (this.definitions.length == 0) {
      promise = this.wordnikService.define(this.currentWord)
        .then(promiseData => {
            //console.log(promiseData);
            this.definitions.length = 0;
            this.definitionIndex = 0;

            //Array.prototype.push.apply(this.definitions, promiseData.data);
            this.definitions = this._.map(promiseData.data, function(d) {
                return new WordDefinition(d);                
            });
        })
        .catch(promiseData => {
            console.log(promiseData);
            this.definitions.length = 0;
            this.definitionIndex = -1;
            this.setErrorMessage(promiseData.errorMessage);
        });
    }
      
    return promise;    
  }

  activate() {
      if (!this.canPractice){
          this.textToSpeech.speak("No words available. Please click Setup and load words.")
      }
      else {
          this.getNextWord();
      }
  }
}
