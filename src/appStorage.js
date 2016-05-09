import {inject} from 'aurelia-framework';

@inject('localStorage')
export class AppStorage {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }
    
    static get storageKeys() {
        return {
            googleSheetUrl: "GoogleSheetUrl",
            wordMasterList: "wordMasterList",
            leaderBoard: "leaderBoard"
        }
    }
  
    get googleSheetUrl() {
        return this.getObject(AppStorage.storageKeys.googleSheetUrl, "");
    }
    
    set googleSheetUrl(value) {
        return this.setObject(AppStorage.storageKeys.googleSheetUrl, value);
    }
  
    get wordMasterList() {
        return this.getObject(AppStorage.storageKeys.wordMasterList, []);        
    }
    
    set wordMasterList(value) {
        return this.setObject(AppStorage.storageKeys.wordMasterList, value);
    }
  
    get leaderBoard() {
        return this.getObject(AppStorage.storageKeys.leaderBoard, []);
    }
    
    set leaderBoard(value) {
        return this.setObject(AppStorage.storageKeys.leaderBoard, value);
    }
    
    getObject(key, defaultValue) {
        let str = this.localStorage.getItem(key);
        
        try {
            let obj = JSON.parse(str);
            return obj;    
        }
        catch(e) {
            return defaultValue || {};
        }
    }
    
    setObject(key, obj) {
        let str = JSON.stringify(obj);
        
        this.localStorage.setItem(key, str);
    }
}