import {bindable, bindingMode} from 'aurelia-framework';

export class MessagesCustomElement {
  constructor() {
    this.isSuccess = false;
    this.isError = false;
    
    this.message = "";
    this.errorMessage = "";
  }
  
  resetMessages() {
    this.message = '';
    this.errorMessage = '';
    this.isSuccess = false;
    this.isError = false;
  }
  
  setMessage(m) {
    this.message = m;
    this.isSuccess = true;
  }
  
  setErrorMessage(m) {
    this.errorMessage = m;
    this.isError = true;
  }

  attached() {
      this.resetMessages();
  }
}
