import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
<<<<<<< HEAD
import {LeaderBoard} from 'leaderBoard';
import {RandomHelper} from 'randomHelper';
import {TextToSpeech} from 'textToSpeech';
import {WordDefinition} from 'wordDefinition';
import {DictionaryService} from 'dictionaryService';
import {WordnikService} from 'wordnikService';

@inject('loDash', AppState, LeaderBoard, RandomHelper, TextToSpeech, DictionaryService, WordnikService)
export class Practice {
  heading = 'Practice';

  constructor(_, appState, leaderBoard, randomHelper, textToSpeech, dictionaryService, wordnikService) {
    this._ = _;
    this.appState = appState;
    this.leaderBoard = leaderBoard;
    this.randomHelper = randomHelper;
    this.textToSpeech = textToSpeech;
    this.dictionaryService = dictionaryService;
    this.wordnikService = wordnikService;
=======
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
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    
    this.spelling = "";
    this.showSpelling = false;
    this.currentWordIndex = -1;
    this.currentWord = "";
    
    this.definitions = [];
<<<<<<< HEAD
    this.definitionIndex = -1;
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
   
  submit() {
<<<<<<< HEAD
    this.checkSpelling();
    
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    return false;
  }
  
  get canPractice() {
    return this.appState.wordMasterList && this.appState.wordMasterList.length > 0;
  }
  
  get wordCount() {
    return this.appState.wordMasterList.length;
  }
  
<<<<<<< HEAD
  get definitionsCount() {
    return this.definitions.length;
  }
  
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
    
    this.leaderBoard.update(this.isSpellingCorrect, this.currentWord);
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }
  
  speakWord() {
    this.textToSpeech.speak(this.currentWord);
  }
<<<<<<< HEAD

  speakDefinition() {
    if (this.definitionIndex >= 0 && this.definitionIndex < this.definitions.length) {
      var definition = this.definitions[this.definitionIndex];
      
      if (definition.partOfSpeech) {
        this.textToSpeech.speak(definition.partOfSpeech);
      }

      this.textToSpeech.speak(definition.text);
    }   
  }
  
  fetchOrNextDefinition() {
    if (this.definitions.length > 0) {
      this.nextDefinition();
    }
    else {
      this.populateDefinitions()
        .then(promiseData => {
          this.speakDefinition();
        });
    }
  }

  incrementDecrementDefinitionIndex(howMany) {
    if (this.definitions.length <= 0) {
      return false;
    }
    
    this.definitionIndex += howMany;
    
    if (this.definitionIndex < 0) {
      this.definitionIndex = this.definitions.length;
    }
    else if (this.definitionIndex >= this.definitions.length) {
      this.definitionIndex = 0;
    }
    
    return true;
  }

  firstDefinition() {
    if (this.definitions.length > 0) {
      this.definitionIndex = 0;
      
      this.speakDefinition();
    }
  }
  
  nextDefinition() {
    if (this.incrementDecrementDefinitionIndex(1)) {
      this.speakDefinition();
    }
  }
  
  previousDefinition() {
    if (this.incrementDecrementDefinitionIndex(-1)) {
      this.speakDefinition();
    }
  }

  lastDefinition() {
    if (this.definitions.length > 0) {
      this.definitionIndex = this.definitions.length - 1;
      
      this.speakDefinition();
    }
  }
  
  giveUpAndDisplaySpelling() {
    this.showSpelling = true;
    this.showDefinitions();
    this.speakWord();
    
    this.leaderBoard.update(false, this.currentWord);
=======
  
  displaySpelling() {
    this.showSpelling = true;
    this.showDefinitions();
    this.speakWord();
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }
  
  getNextWord() {
    this.spelling = "";
    this.showSpelling = false;
    this.definitions.length = 0;
<<<<<<< HEAD
    this.definitionIndex = -1;
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }

  activate() {
      if (!this.canPractice){
          this.textToSpeech.speak("No words available. Please click Setup and load words.")
      }
      else {
          this.getNextWord();
      }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
