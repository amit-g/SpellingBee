import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-fetch-client';
//import 'fetch';
import {HttpClient} from 'aurelia-http-client';
//import 'http';

import {AppState} from 'appState';
import {WordListLoader} from 'wordListLoader';

@inject(AppState, WordListLoader, HttpClient)
export class Setup {
  heading = 'Setup';
  
  static get storageKeys() {
      return {
        googleSheetUrl: "GoogleSheetUrl" 
      }
  };

  constructor(appState, wordListLoader, http) {
    this.http = http;
    this.appState = appState;
    this.wordListLoader = wordListLoader;
    
    this.googleSheetUrl = Setup.getGoogleSheetUrlFromStorage();//"https://docs.google.com/spreadsheets/d/1p8KyNYBJq8s5c4s8T7xgjVN-gP5xCbWz2-TasDNCATE/edit#gid=0";
    this.gistUrl = "";
    
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
  
  //@computedFrom('googleSheetUrl')
  get isGoogleSheetUrlValid() {
    return this.googleSheetUrl.length > 0;
  }
  
  //@computedFrom('googleSheetUrl')
  get isGistUrlValid() {
    return this.gistUrl.length > 0;
  }
   
  submit() {
    return false;
  }
  
  static getGoogleSheetUrlFromStorage(){
      return window.localStorage.getItem(Setup.storageKeys.googleSheetUrl);
  }
  
  static saveGoogleSheetUrlToStorage(googleSheetUrl){
      return window.localStorage.setItem(Setup.storageKeys.googleSheetUrl, googleSheetUrl);
  }

  loadWordsFromGoogleSheet() {
      this.resetMessages();
      
      Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);
      
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
  
  loadWordsFromGoogleSheetOld() {
      console.log("loadWordsFromGoogleSheet");
      
      this.resetMessages();
      
      if (this.googleSheetUrl.length == 0) {
          this.setErrorMessage('Please enter a valid url for Google Sheet');

          return;
      }
      
      Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);
      
      var publishedUrl = this.googleSheetUrl;
      console.log(publishedUrl);
      var publishedUrlPrefix = "https://docs.google.com/spreadsheets/d/";
      var publishedUrlPattern = "(https://docs.google.com/spreadsheets/d/)([^/]+)(/.+)";
      var publishedUrlRegExp = new RegExp(publishedUrlPattern, "i")
      var key = publishedUrl.replace(publishedUrlRegExp, "$2");
    
      if (!key || key === publishedUrl){
          console.log("Invalid Url");
          this.setErrorMessage('Invalid Url');
          
          return;
      }
    
      var feedUrlTemplate = "https://spreadsheets.google.com/feeds/cells/{key}/od6/public/basic?alt=json";
      var feedUrl = feedUrlTemplate.replace("{key}", key);
    
      this.http.jsonp(feedUrl, 'callback')
          //.then(response => response)
          .then(httpResponse => {
              console.log(httpResponse);
              var words = $.map(httpResponse.response.feed.entry, function(ele, i)
              {
                  return ele.content["$t"];
              });
              
              console.log(words);
              console.log(this.appState.wordMasterList);
              
              this.appState.wordMasterList.length = 0;
              Array.prototype.push.apply(this.appState.wordMasterList, words);
              
              console.log(words);
              console.log(this.appState.wordMasterList);
              
              this.setMessage(this.appState.wordMasterList.length + ' words loaded.');

              return words;
          })
          .catch(httpResponse => {
              console.log(httpResponse);
              this.setErrorMessage('Could not get the word from Google Sheet. Please check the Url and permissions. The sheet has to be published (not shared).');
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
