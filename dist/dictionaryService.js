'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    var inject, HttpClient, _dec, _class, DictionaryService;

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
            _export('DictionaryService', DictionaryService = (_dec = inject(HttpClient), _dec(_class = function () {
                function DictionaryService(http) {
                    _classCallCheck(this, DictionaryService);

                    this.http = http;

<<<<<<< HEAD
                    this.dictServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
=======
                    this.dictServiceBaseUrl = "";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                }

                DictionaryService.prototype.define = function define(word) {
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

                        var dictServiceUrl = _this.dictServiceBaseUrl + "DictService/Define?word=" + word;

                        console.log(dictServiceUrl);

                        _this.http.get(dictServiceUrl).then(function (httpResponse) {
<<<<<<< HEAD
=======
                            console.log(httpResponse);
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

                            var xmlResponse = $.parseXML(httpResponse.response);
                            var $xmlResponse = $(xmlResponse);
                            var definitions = [];

<<<<<<< HEAD
                            $xmlResponse.find("Definition").each(function (i, e) {
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

                            definitions.sort(function (a, b) {
                                return a.text.length < b.text.length ? -1 : 1;
=======
                            $xmlResponse.find("WordDefinition").each(function (i, e) {
                                definitions.push($(this).text());
                            });

                            console.log(definitions);

                            definitions.sort(function (a, b) {
                                return a.length < b.length ? -1 : 1;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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

                return DictionaryService;
            }()) || _class));

            _export('DictionaryService', DictionaryService);
        }
    };
});
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,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
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3Rpb25hcnlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7Ozt5Q0FHSyxpQixXQURaLE9BQU8sVUFBUCxDO0FBRUcsMkNBQWEsSUFBYixFQUFtQjtBQUFBOztBQUNmLHlCQUFLLElBQUwsR0FBWSxJQUFaOztBQUdBLHlCQUFLLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0g7OzRDQUVELE0sbUJBQU8sSSxFQUFNO0FBQUE7O0FBQ1QsNEJBQVEsR0FBUixDQUFZLFdBQVUsSUFBdEI7QUFDQSx3QkFBSSxjQUFjO0FBQ2QsbUNBQVcsS0FERztBQUVkLDhCQUFNLElBRlE7QUFHZCxzQ0FBYztBQUhBLHFCQUFsQjs7QUFNQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNEJBQUksS0FBSyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsb0NBQVEsR0FBUixDQUFZLHVDQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsMkJBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCw0QkFBSSxpQkFBaUIsTUFBSyxrQkFBTCxHQUEwQiwwQkFBMUIsR0FBdUQsSUFBNUU7O0FBRUEsZ0NBQVEsR0FBUixDQUFZLGNBQVo7O0FBRUEsOEJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLEVBQ0ssSUFETCxDQUNVLHdCQUFnQjtBQUNkLG9DQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBLGdDQUFJLGNBQWMsRUFBRSxRQUFGLENBQVcsYUFBYSxRQUF4QixDQUFsQjtBQUNBLGdDQUFJLGVBQWUsRUFBRSxXQUFGLENBQW5CO0FBQ0EsZ0NBQUksY0FBYyxFQUFsQjs7QUFFQSx5Q0FBYSxJQUFiLENBQWtCLGdCQUFsQixFQUFvQyxJQUFwQyxDQUF5QyxVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWM7QUFDbkQsNENBQVksSUFBWixDQUFpQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQWpCO0FBQ0gsNkJBRkQ7O0FBSUEsb0NBQVEsR0FBUixDQUFZLFdBQVo7O0FBRUEsd0NBQVksSUFBWixDQUFpQixVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWM7QUFDNUIsdUNBQU8sRUFBRSxNQUFGLEdBQVcsRUFBRSxNQUFiLEdBQXNCLENBQUMsQ0FBdkIsR0FBMkIsQ0FBbEM7QUFDRiw2QkFGRDs7QUFJQSx3Q0FBWSxTQUFaLEdBQXdCLElBQXhCO0FBQ0Esd0NBQVksSUFBWixHQUFtQixXQUFuQjs7QUFFQSxvQ0FBUSxXQUFSO0FBQ0gseUJBdEJULEVBdUJLLEtBdkJMLENBdUJZLHdCQUFnQjtBQUNoQixvQ0FBUSxHQUFSLENBQVksWUFBWjs7QUFFQSx3Q0FBWSxZQUFaLEdBQTJCLDRDQUE0QyxJQUF2RTs7QUFFQSxtQ0FBTyxXQUFQO0FBQ0gseUJBN0JUO0FBOEJILHFCQTNDYSxDQUFkOztBQTZDQSwyQkFBTyxPQUFQO0FBQ0gsaUIiLCJmaWxlIjoiZGljdGlvbmFyeVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
