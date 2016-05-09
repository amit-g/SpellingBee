import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';
import {WordListLoader} from 'wordListLoader';

@inject(AppState, TextToSpeech, WordListLoader, 'window')
export class SetupWordListCustomElement {
  heading = 'Setup Word List';
  
  //TODO: How to inject this.messages???

  constructor(appState, textToSpeech, wordListLoader, window) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    this.wordListLoader = wordListLoader;
    this.window = window;
    
    // //this.googleSheetUrl = Setup.getGoogleSheetUrlFromStorage();//"https://docs.google.com/spreadsheets/d/1p8KyNYBJq8s5c4s8T7xgjVN-gP5xCbWz2-TasDNCATE/edit#gid=0";
    // this.googleSheetUrl = this.appState.googleSheetUrl;
    // this.gistUrl = "";
    
    // this.isSuccess = false;
    // this.isError = false;
    
    // this.message = "";
    // this.errorMessage = "";
  }
  
  //@computedFrom('googleSheetUrl')
  get isGoogleSheetUrlValid() {
      return true;
    //return this.googleSheetUrl.length > 0;
  }
  
  //@computedFrom('googleSheetUrl')
  get isGistUrlValid() {
      return true;
    //return this.gistUrl.length > 0;
  }
  
  loadWordsFromGoogleSheet() {
      this.messages.resetMessages();
      
      //Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);
      this.appState.googleSheetUrl = this.googleSheetUrl;
      
      this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl)
      .then(promiseData => {
          console.log(promiseData);
          this.messages.setMessage(this.appState.wordMasterList.length + ' words loaded.');
      })
      .catch(promiseData => {
          console.log(promiseData);
          this.messages.setErrorMessage(promiseData.errorMessage);
      });
  }
  
  loadWordsFromGist() {
      console.log("loadWordsFromGist");
      
      this.messages.resetMessages();
  }
  
//   resetMessages(){
//     this.message = '';
//     this.errorMessage = '';
//     this.isSuccess = false;
//     this.isError = false;
//   }
  
//   setMessage(m){
//     this.message = m;
//     this.isSuccess = true;
//   }
  
//   setErrorMessage(m){
//     this.errorMessage = m;
//     this.isError = true;
//   }

  attached() {
    this.googleSheetUrl = this.appState.googleSheetUrl;
    this.gistUrl = "";
  }
}
