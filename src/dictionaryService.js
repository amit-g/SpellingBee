import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class DictionaryService {
    constructor (http) {
        this.http = http;
        
        //this.dictServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
        this.dictServiceBaseUrl = "";
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
                        console.log(httpResponse);
                        
                        var xmlResponse = $.parseXML(httpResponse.response);
                        var $xmlResponse = $(xmlResponse);
                        var definitions = [];
                        
                        $xmlResponse.find("WordDefinition").each(function(i, e){
                            definitions.push($(this).text());
                        });

                        console.log(definitions);
                        
                        definitions.sort(function(a, b){
                           return a.length < b.length ? -1 : 1; 
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