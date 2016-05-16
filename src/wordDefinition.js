export class WordDefinition {
  constructor(definition) {
    this.text = definition.text || "";
    this.attributionText = definition.attributionText || "";
    this.partOfSpeech = definition.partOfSpeech || "";
  }
  
  get displayText() {
    return this.partOfSpeech ? this.partOfSpeech + ": " + this.text : this.text;
  }
}