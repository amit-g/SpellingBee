import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient, 'window')
export class WordnikService {
    constructor (http) {
        this.http = http;
        this.window = window;
        
        this.wordnikServiceBaseUrl = "";            
        
        if ((this.window.location.port !== "") && (this.window.location.port !== "80")) {
            this.wordnikServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
        }
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
            
            var wordnikServiceUrl = this.wordnikServiceBaseUrl + "wordnikService/v4/word.json/" + word + "/definitions";

            console.log(wordnikServiceUrl);

            this.http.get(wordnikServiceUrl)
                .then(httpResponse => {
                        //console.log(httpResponse);
                        
                        var definitions = httpResponse.content;
                        
                        definitions.sort(function(a, b){
                           return a.text.length < b.text.length ? -1 : 1; 
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