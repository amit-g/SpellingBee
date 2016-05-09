import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient, 'jQuery')
export class WordListLoaderGoogleSheet {
    constructor (http, $) {
        this.http = http;
        this.$ = $;
    }
    
    load(publishedUrl) {
        console.log("WordListLoaderGoogleSheet.load: " + publishedUrl);

        var promiseData = {
            isSuccess: false,
            data: null,
            errorMessage: ""
        };
        
        var promise = new Promise((resolve, reject) => {
            if (publishedUrl.length == 0) {
                console.log("publishedUrl.length must be greater than zero");
 
                promiseData.errorMessage = 'Please enter a valid url for Google Sheet';

                reject(promiseData);
            }

            console.log(publishedUrl);
            var publishedUrlPrefix = "https://docs.google.com/spreadsheets/d/";
            var publishedUrlPattern = "(https://docs.google.com/spreadsheets/d/)([^/]+)(/.+)";
            var publishedUrlRegExp = new RegExp(publishedUrlPattern, "i");
            var key = publishedUrl.replace(publishedUrlRegExp, "$2");

            if (!key || key === publishedUrl) {
                console.log("Invalid Url: " + publishedUrl);
                
                promiseData.errorMessage = 'Invalid Google Sheet Url. The Google Sheet url starts with https://docs.google.com/... and ends in /edit#...';

                reject(promiseData);
            }

            var feedUrlTemplate = "https://spreadsheets.google.com/feeds/cells/{key}/od6/public/basic?alt=json";
            var feedUrl = feedUrlTemplate.replace("{key}", key);

            this.http.jsonp(feedUrl, 'callback')
                .then(httpResponse => {
                        console.log(httpResponse);
                        
                        var words = this.$.map(httpResponse.response.feed.entry, function (ele, i) {
                            return ele.content["$t"];
                        });

                        console.log("words=> " + words.length);
                        //console.log(words);
                        
                        promiseData.isSuccess = true;
                        promiseData.data = words;

                        resolve(promiseData);
                    })
                .catch (httpResponse => {
                        console.log(httpResponse);

                        promiseData.errorMessage = 'Could not get the word from Google Sheet. Please check the Url and permissions. The sheet has to be published (not shared).';

                        reject(promiseData);
                    });
        });
        
        return promise;
    }
}