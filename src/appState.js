import {inject} from 'aurelia-framework';
import {AppStorage} from 'appStorage';

@inject('loDash', AppStorage)
export class AppState {
    constructor (_, appStorage) {
        this._ = _;
        this.appStorage = appStorage;

        this.wordMasterList = this.appStorage.wordMasterList || [];
        this.leaderBoard = this.appStorage.leaderBoard || [];
        
        console.log(localStorage);        
        console.log(this.appStorage.wordMasterList);        
    }
    
    updateWordList(words) {
        console.log("words=> " + words.length);
        //console.log(words);
        console.log("this.wordMasterList.length: " + this.wordMasterList.length);
        this.wordMasterList = this._.union(this.wordMasterList, words);
        console.log("this.wordMasterList.length: " + this.wordMasterList.length);
        
        this.appStorage.wordMasterList = this.wordMasterList;
        console.log(localStorage);
    }
}