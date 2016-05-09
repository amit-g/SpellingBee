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
  }
  
  get isGoogleSheetUrlValid() {
      return this.googleSheetUrl && this.googleSheetUrl.length > 0;
  }
  
  get isGistUrlValid() {
      return this.gistUrl && this.gistUrl.length > 0;
  }
  
  loadWordsFromGoogleSheet() {
      this.messages.resetMessages();
      
      this.appState.googleSheetUrl = this.googleSheetUrl;
      
      this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl)
      .then(promiseData => {
          console.log(promiseData);

          let message = this.appState.wordMasterList.length + ' words loaded from Google Sheet';
        
          this.textToSpeech.speak(message);
          this.messages.setErrorMessage(message);
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

  attached() {
    this.googleSheetUrl = this.appState.googleSheetUrl;
    this.gistUrl = "";
  }
}
