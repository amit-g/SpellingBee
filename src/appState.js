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
    
    get voiceName() {
        return this.appStorage.voiceName;
    }
    
    set voiceName(value) {
        this.appStorage.voiceName = value;
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