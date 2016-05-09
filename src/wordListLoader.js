import {inject} from 'aurelia-framework';

import {AppState} from 'appState';
import {WordListLoaderGoogleSheet} from 'wordListLoaderGoogleSheet';

@inject(AppState, WordListLoaderGoogleSheet)
export class WordListLoader {
    constructor (appState, wordListLoaderGoogleSheet) {
        this.appState = appState;
        this.wordListLoaderGoogleSheet = wordListLoaderGoogleSheet;
    }
    
    loadFromGoogleSheet(url) {
        console.log("WordListLoaderGoogleSheet.loadWordsFromGoogleSheet: " + url);
        console.log("wordListLoaderGoogleSheet: ");
        console.log(this.wordListLoaderGoogleSheet);
        
        var promise = new Promise((resolve, reject) => {
            this.wordListLoaderGoogleSheet.load(url)
                .then(promiseData => {
                    var words = promiseData.data;
                    
                    console.log("words=> " + words.length);
                    //console.log(words);
                    console.log("this.appState.wordMasterList=> " + this.appState.wordMasterList.length);
                    //console.log(this.appState.wordMasterList);
                    
                    //this.appState.updateWordList(words);
                    this.appState.appendWords(words);
                    //this.appState.wordMasterList.length = 0;
                    //Array.prototype.push.apply(this.appState.wordMasterList, words);
                    
                    console.log("this.appState.wordMasterList=> " + this.appState.wordMasterList.length);
                    //console.log(this.appState.wordMasterList);
                    
                    promiseData.data = null;
                    
                    resolve(promiseData);
                })
                .catch(promiseData => {
                    reject(promiseData);
                });
        });
        
        return promise;
    }
}