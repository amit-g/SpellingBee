import {inject} from 'aurelia-framework';

@inject('localStorage')
export class AppStorage {
    constructor(localStorage) {
        this.localStorage = localStorage;
        
        console.log(this.localStorage);
    }
    
    static get storageKeys() {
        return {
            voiceName: "VoiceName",
            googleSheetUrl: "GoogleSheetUrl",
            wordMasterList: "WordMasterList",
            leaderBoard: "LeaderBoard"
        }
    }
    
    clear() {
        this.localStorage.clear();
    }
 
    get voiceName() {
        return this.getObject(AppStorage.storageKeys.voiceName, "");
    }
    
    set voiceName(value) {
        return this.setObject(AppStorage.storageKeys.voiceName, value);
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
<<<<<<< HEAD
        return this.getObject(AppStorage.storageKeys.leaderBoard, {});
=======
        return this.getObject(AppStorage.storageKeys.leaderBoard, []);
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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