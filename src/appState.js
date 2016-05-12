import {inject} from 'aurelia-framework';
import {AppStorage} from 'appStorage';

@inject('loDash', AppStorage)
export class AppState {
    constructor (_, appStorage) {
        this._ = _;
        this.appStorage = appStorage;
        
        this.googleSheetUrl = this.appStorage.googleSheetUrl || '';
        this.voiceName = this.appStorage.voiceName || 'native';
        this.wordMasterList = this.appStorage.wordMasterList || [];
        this.leaderBoard = this.appStorage.leaderBoard || [];
    }

    get googleSheetUrl() {
        return this.appStorage.googleSheetUrl || '';
    }
    
    set googleSheetUrl(value) {
        this.appStorage.googleSheetUrl = value;
    }

    get voiceName() {
        return this.appStorage.voiceName || 'native';
    }
    
    set voiceName(value) {
        this.appStorage.voiceName = value;
    }
        
    get wordMasterList() {
        return this.appStorage.wordMasterList || [];
    }
    
    set wordMasterList(value) {
        this.appStorage.wordMasterList = value;
    }
         
    get leaderBoard() {
        return this.appStorage.leaderBoard || [];
    }
    
    set leaderBoard(value) {
        this.appStorage.leaderBoard = value;
    }

    appendWords(words) {
        console.log("words=> " + words.length);
        //console.log(words);
        console.log("this.wordMasterList.length: " + this.wordMasterList.length);
        this.appStorage.wordMasterList = this._.union(this.appStorage.wordMasterList, words);
        console.log("this.wordMasterList.length: " + this.wordMasterList.length);
        
        console.log(localStorage);
    }
    
    // updateWordList(words) {
    //     console.log("words=> " + words.length);
    //     //console.log(words);
    //     console.log("this.wordMasterList.length: " + this.wordMasterList.length);
    //     this.wordMasterList = this._.union(this.wordMasterList, words);
    //     console.log("this.wordMasterList.length: " + this.wordMasterList.length);
        
    //     this.appStorage.wordMasterList = this.wordMasterList;
    //     console.log(localStorage);
    // }
    
    reset() {
        this.googleSheetUrl = '';
        this.voiceName = 'native';
        this.wordMasterList = [];
        this.leaderBoard = [];
    }
}