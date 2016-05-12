import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

import {AppState} from 'appState';
import {WordListLoader} from 'wordListLoader';
import {AppStorage} from 'appStorage';

@inject(AppStorage, AppState, WordListLoader, HttpClient)
export class Setup {
  heading = 'Setup';
  
  constructor(appStorage, appState, wordListLoader, http) {
    this.http = http;
    this.appStorage = appStorage;
    this.appState = appState;
    this.wordListLoader = wordListLoader;
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
   
  submit() {
    return false;
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
  }
}
