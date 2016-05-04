//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Welcome to Spelling Bee Practice...';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}