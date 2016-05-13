import {inject} from 'aurelia-framework';
import {AppState} from 'appState';

@inject(AppState)
export class LeaderBoard {
    _lastWord = "";
    
    constructor(appState) {
        this.appState = appState;
        
        this._leaderBoard = this.appState.leaderBoard || LeaderBoard.default;
        
        if (!this.appState.leaderBoard.totalCount) {
            this._leaderBoard = LeaderBoard.default;
        }
    }
    
    static get default() {
        return {
            correctCount: 0,
            incorrectCount: 0,
            totalCount: 0
        };
    }

    get correctCount() {
        return this._leaderBoard.correctCount || 0;
    }

    get incorrectCount() {
        return this._leaderBoard.incorrectCount || 0;
    }

    get totalCount() {
        return this._leaderBoard.totalCount || 0;
    }
    
    update(correct, word) {
        console.log("correct: " + correct + ", word: " + word);
        
        if (word === this._lastWord) {
            return;
        }
        
        this._lastWord = word;
        
        if (correct) {
            this._leaderBoard.correctCount++;
        }
        else {
            this._leaderBoard.incorrectCount++;
        }
        
        this._leaderBoard.totalCount++;
                
        this.appState.leaderBoard = this._leaderBoard;
    }
}