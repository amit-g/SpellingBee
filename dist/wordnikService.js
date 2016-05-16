'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    var inject, HttpClient, _dec, _class, WordnikService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            _export('WordnikService', WordnikService = (_dec = inject(HttpClient), _dec(_class = function () {
                function WordnikService(http) {
                    _classCallCheck(this, WordnikService);

                    this.http = http;

                    this.wordnikServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
                }

                WordnikService.prototype.define = function define(word) {
                    var _this = this;

                    console.log("word: " + word);
                    var promiseData = {
                        isSuccess: false,
                        data: null,
                        errorMessage: ""
                    };

                    var promise = new Promise(function (resolve, reject) {
                        if (word.length == 0) {
                            console.log("word.length must be greater than zero");

                            promiseData.errorMessage = 'Please enter a valid word';

                            reject(promiseData);
                        }

                        var wordnikServiceUrl = _this.wordnikServiceBaseUrl + "wordnikService/v4/word.json/" + word + "/definitions";

                        console.log(wordnikServiceUrl);

                        _this.http.get(wordnikServiceUrl).then(function (httpResponse) {

                            var definitions = httpResponse.content;

                            definitions.sort(function (a, b) {
                                return a.text.length < b.text.length ? -1 : 1;
                            });

                            promiseData.isSuccess = true;
                            promiseData.data = definitions;

                            resolve(promiseData);
                        }).catch(function (httpResponse) {
                            console.log(httpResponse);

                            promiseData.errorMessage = 'Could not get definition for the word: ' + word;

                            reject(promiseData);
                        });
                    });

                    return promise;
                };

                return WordnikService;
            }()) || _class));

            _export('WordnikService', WordnikService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRuaWtTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7OztzQ0FHSyxjLFdBRFosT0FBTyxVQUFQLEM7QUFFRyx3Q0FBYSxJQUFiLEVBQW1CO0FBQUE7O0FBQ2YseUJBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEseUJBQUsscUJBQUwsR0FBNkIsbUNBQTdCO0FBRUg7O3lDQUVELE0sbUJBQU8sSSxFQUFNO0FBQUE7O0FBQ1QsNEJBQVEsR0FBUixDQUFZLFdBQVUsSUFBdEI7QUFDQSx3QkFBSSxjQUFjO0FBQ2QsbUNBQVcsS0FERztBQUVkLDhCQUFNLElBRlE7QUFHZCxzQ0FBYztBQUhBLHFCQUFsQjs7QUFNQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNEJBQUksS0FBSyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsb0NBQVEsR0FBUixDQUFZLHVDQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsMkJBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCw0QkFBSSxvQkFBb0IsTUFBSyxxQkFBTCxHQUE2Qiw4QkFBN0IsR0FBOEQsSUFBOUQsR0FBcUUsY0FBN0Y7O0FBRUEsZ0NBQVEsR0FBUixDQUFZLGlCQUFaOztBQUVBLDhCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsaUJBQWQsRUFDSyxJQURMLENBQ1Usd0JBQWdCOztBQUdkLGdDQUFJLGNBQWMsYUFBYSxPQUEvQjs7QUFFQSx3Q0FBWSxJQUFaLENBQWlCLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBYztBQUM1Qix1Q0FBTyxFQUFFLElBQUYsQ0FBTyxNQUFQLEdBQWdCLEVBQUUsSUFBRixDQUFPLE1BQXZCLEdBQWdDLENBQUMsQ0FBakMsR0FBcUMsQ0FBNUM7QUFDRiw2QkFGRDs7QUFJQSx3Q0FBWSxTQUFaLEdBQXdCLElBQXhCO0FBQ0Esd0NBQVksSUFBWixHQUFtQixXQUFuQjs7QUFFQSxvQ0FBUSxXQUFSO0FBQ0gseUJBZFQsRUFlSyxLQWZMLENBZVksd0JBQWdCO0FBQ2hCLG9DQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsNENBQTRDLElBQXZFOztBQUVBLG1DQUFPLFdBQVA7QUFDSCx5QkFyQlQ7QUFzQkgscUJBbkNhLENBQWQ7O0FBcUNBLDJCQUFPLE9BQVA7QUFDSCxpQiIsImZpbGUiOiJ3b3JkbmlrU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
