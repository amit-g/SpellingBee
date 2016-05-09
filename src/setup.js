import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-fetch-client';
//import 'fetch';
import {HttpClient} from 'aurelia-http-client';
//import 'http';

import {AppState} from 'appState';
import {WordListLoader} from 'wordListLoader';
import {AppStorage} from 'appStorage';

@inject(AppStorage, AppState, WordListLoader, HttpClient)
export class Setup {
  heading = 'Setup';
  
//   static get storageKeys() {
//       return {
//         googleSheetUrl: "GoogleSheetUrl" 
//       }
//   };

  constructor(appStorage, appState, wordListLoader, http) {
    this.http = http;
    this.appStorage = appStorage;
    this.appState = appState;
    this.wordListLoader = wordListLoader;
    
    //this.googleSheetUrl = Setup.getGoogleSheetUrlFromStorage();//"https://docs.google.com/spreadsheets/d/1p8KyNYBJq8s5c4s8T7xgjVN-gP5xCbWz2-TasDNCATE/edit#gid=0";
    this.googleSheetUrl = this.appStorage.googleSheetUrl;
    this.gistUrl = "";
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
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
   
  submit() {
    return false;
  }
  
//   static getGoogleSheetUrlFromStorage(){
//       return window.localStorage.getItem(Setup.storageKeys.googleSheetUrl);
//   }
  
//   static saveGoogleSheetUrlToStorage(googleSheetUrl){
//       return window.localStorage.setItem(Setup.storageKeys.googleSheetUrl, googleSheetUrl);
//   }

  loadWordsFromGoogleSheet() {
      this.resetMessages();
      
      //Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);
      this.appStorage.googleSheetUrl = this.googleSheetUrl;
      
      this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl)
      .then(promiseData => {
          console.log(promiseData);
          this.setMessage(this.appState.wordMasterList.length + ' words loaded.');
      })
      .catch(promiseData => {
          console.log(promiseData);
          this.setErrorMessage(promiseData.errorMessage);
      });
  }
  
  loadWordsFromGist() {
      console.log("loadWordsFromGist");
      
      this.resetMessages();
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
    // return this.http.fetch('users')
    //   .then(response => response.json())
    //   .then(users => this.users = users);
  }
}
