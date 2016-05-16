import {inject, bindable, bindingMode} from 'aurelia-framework';
import {TextToSpeech} from 'textToSpeech';

@inject(TextToSpeech)
export class ConfirmationCustomElement {
  //TODO: How to inject this.messages???
  @bindable confirmationText = "";
    
  constructor(textToSpeech) {
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
            //this.appState.reset();
            console.log("****** reset done ********");
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

  attached() {
  }
}