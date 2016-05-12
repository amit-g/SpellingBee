import {inject} from 'aurelia-framework';
import {AppState} from 'appState';
import {TextToSpeech} from 'textToSpeech';

@inject(AppState, TextToSpeech)
export class SetupAdvancedCustomElement {
  heading = 'Setup Advanced';
  confirmationTextToCompare = "reset";
  
  //TODO: How to inject this.messages???

  constructor(appState, textToSpeech, window) {
    this.appState = appState;
    this.textToSpeech = textToSpeech;
    
    this.showConfirmText = false;
    this.cofirmationText = "";
  }
  
  resetSetup() {
      if (this.cofirmationText === "") {
        let message = "Are you sure? This would reset all progress. Please type 'reset' to confirm."
        
        this.textToSpeech.speak(message);
        this.messages.setErrorMessage(message);
        
        this.showConfirmText = true;
      }
      else {
        if (this.cofirmationText === this.confirmationTextToCompare) {
            this.appState.reset();
        }
        else {
            let message = "Please type 'reset' to confirm."
            
            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);
            
            this.showConfirmText = true;
        }         
      }
  }
  
  cancelReset() {
    this.showConfirmText = false;
    this.cofirmationText = "";
  }

  attached() {
  }
}
