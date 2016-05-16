import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';

@inject(AppState, TextToSpeech)
export class SetupAdvancedCustomElement {
  heading = 'Setup Advanced';
  confirmationText = "reset setup";
  
  //TODO: How to inject this.messages???

  constructor(appState, textToSpeech) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    
    this.showConfirmText = false;
    this.enteredCofirmationText = "";
  }
  
  resetSetup() {
      if (this.enteredCofirmationText === "") {
        let message = "Are you sure? This would reset all progress. Please type '" + this.confirmationText + "' to confirm."
        
        this.textToSpeech.speak(message);
        this.messages.setErrorMessage(message);
        
        this.showConfirmText = true;
      }
      else {
        if (this.enteredCofirmationText === this.confirmationText) {
            this.appState.reset();
            
            let message = "'Reset Setup' completed.";
            
            this.messages.resetMessages();
            this.messages.setMessage(message);
            
            this.showConfirmText = false;
        }
        else {
            let message = "Please type '" + this.confirmationText + "' to confirm."
            
            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);
            
            this.showConfirmText = true;
        }         
      }
  }
  
  cancelResetSetup() {
    this.showConfirmText = false;
    this.enteredCofirmationText = "";

    this.messages.resetMessages();
  }
  
  resetScores() {
    var confirmation = confirm("Are you sure to reset the scores?");
    
    if (confirmation) {
      this.appState.leaderBoard = {};
    }
  }

  attached() {
  }
}
