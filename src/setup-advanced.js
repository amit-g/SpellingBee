import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';

@inject(AppState, TextToSpeech)
export class SetupAdvancedCustomElement {
  heading = 'Setup Advanced';
<<<<<<< HEAD
  confirmationText = "reset setup";
  
  //TODO: How to inject this.messages???

  constructor(appState, textToSpeech) {
=======
  confirmationTextToCompare = "reset";
  
  //TODO: How to inject this.messages???

  constructor(appState, textToSpeech, window) {
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    
    this.showConfirmText = false;
<<<<<<< HEAD
    this.enteredCofirmationText = "";
  }
  
  resetSetup() {
      if (this.enteredCofirmationText === "") {
        let message = "Are you sure? This would reset all progress. Please type '" + this.confirmationText + "' to confirm."
=======
    this.cofirmationText = "";
  }
  
  resetSetup() {
      if (this.cofirmationText === "") {
        let message = "Are you sure? This would reset all progress. Please type 'reset' to confirm."
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
        
        this.textToSpeech.speak(message);
        this.messages.setErrorMessage(message);
        
        this.showConfirmText = true;
      }
      else {
<<<<<<< HEAD
        if (this.enteredCofirmationText === this.confirmationText) {
            this.appState.reset();
            
            let message = "'Reset Setup' completed.";
            
            this.messages.resetMessages();
            this.messages.setMessage(message);
            
            this.showConfirmText = false;
        }
        else {
            let message = "Please type '" + this.confirmationText + "' to confirm."
=======
        if (this.cofirmationText === this.confirmationTextToCompare) {
            this.appState.reset();
        }
        else {
            let message = "Please type 'reset' to confirm."
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
            
            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);
            
            this.showConfirmText = true;
        }         
      }
  }
  
<<<<<<< HEAD
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
=======
  cancelReset() {
    this.showConfirmText = false;
    this.cofirmationText = "";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
  }

  attached() {
  }
}
