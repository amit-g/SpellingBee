import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class DictionaryService {
    constructor (http) {
        this.http = http;
        
<<<<<<< HEAD
        this.dictServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
        //this.dictServiceBaseUrl = "";
=======
        //this.dictServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
        this.dictServiceBaseUrl = "";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    }
    
    define(word) {
        console.log("word: "+ word);
        var promiseData = {
            isSuccess: false,
            data: null,
            errorMessage: ""
        };
        
        var promise = new Promise((resolve, reject) => {
            if (word.length == 0) {
                console.log("word.length must be greater than zero");
 
                promiseData.errorMessage = 'Please enter a valid word';

                reject(promiseData);
            }
            
            var dictServiceUrl = this.dictServiceBaseUrl + "DictService/Define?word=" + word;

            console.log(dictServiceUrl);

            this.http.get(dictServiceUrl)
                .then(httpResponse => {
<<<<<<< HEAD
                        //console.log(httpResponse);
=======
                        console.log(httpResponse);
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                        
                        var xmlResponse = $.parseXML(httpResponse.response);
                        var $xmlResponse = $(xmlResponse);
                        var definitions = [];
                        
<<<<<<< HEAD
                        $xmlResponse.find("Definition").each(function(i, e) {
                            var text = $(this).find("WordDefinition").first().text();
                            var dictionaryID = $(this).find("Dictionary Id").first().text();
                            var dictionaryName = $(this).find("Dictionary Name").first().text();
                            
                            var definition = {
                                    "text": text,
                                    "sourceDictionary": dictionaryName,
                                    "attributionText": "from " + dictionaryName
                            };
                            
                            definitions.push(definition);
                        });

                        //console.log(definitions);
                        
                        definitions.sort(function(a, b){
                           return a.text.length < b.text.length ? -1 : 1; 
=======
                        $xmlResponse.find("WordDefinition").each(function(i, e){
                            definitions.push($(this).text());
                        });

                        console.log(definitions);
                        
                        definitions.sort(function(a, b){
                           return a.length < b.length ? -1 : 1; 
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                        });
                        
                        promiseData.isSuccess = true;
                        promiseData.data = definitions;

                        resolve(promiseData);
                    })
                .catch (httpResponse => {
                        console.log(httpResponse);

                        promiseData.errorMessage = 'Could not get definition for the word: ' + word;

                        reject(promiseData);
                    });
        });
        
        return promise;
    }
}