'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
<<<<<<< HEAD
    var inject, HttpClient, _dec, _class, WordnikService;
=======
    var inject, HttpClient, _dec, _class, DictionaryService;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

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
<<<<<<< HEAD
            _export('WordnikService', WordnikService = (_dec = inject(HttpClient, 'window'), _dec(_class = function () {
                function WordnikService(http) {
                    _classCallCheck(this, WordnikService);

                    this.http = http;
                    this.window = window;

                    this.wordnikServiceBaseUrl = "";

                    if (this.window.location.port !== "" && this.window.location.port !== "80") {
                        this.wordnikServiceBaseUrl = "http://localhost/SpellingBee-Dev/";
                    }
                }

                WordnikService.prototype.define = function define(word) {
=======
            _export('DictionaryService', DictionaryService = (_dec = inject(HttpClient), _dec(_class = function () {
                function DictionaryService(http) {
                    _classCallCheck(this, DictionaryService);

                    this.http = http;
                }

                DictionaryService.prototype.define = function define(word) {
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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

<<<<<<< HEAD
                        var wordnikServiceUrl = _this.wordnikServiceBaseUrl + "wordnikService/v4/word.json/" + word + "/definitions";

                        console.log(wordnikServiceUrl);

                        _this.http.get(wordnikServiceUrl).then(function (httpResponse) {

                            var definitions = httpResponse.content;

                            definitions.sort(function (a, b) {
                                return a.text.length < b.text.length ? -1 : 1;
=======
                        var dictServiceUrl = "DictService/Define?word=" + word;

                        console.log(dictServiceUrl);

                        _this.http.get(dictServiceUrl).then(function (httpResponse) {
                            console.log(httpResponse);

                            var xmlResponse = $.parseXML(httpResponse.response);
                            var $xmlResponse = $(xmlResponse);
                            var definitions = [];

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

<<<<<<< HEAD
                return WordnikService;
            }()) || _class));

            _export('WordnikService', WordnikService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRuaWtTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7OztzQ0FHSyxjLFdBRFosT0FBTyxVQUFQLEVBQW1CLFFBQW5CLEM7QUFFRyx3Q0FBYSxJQUFiLEVBQW1CO0FBQUE7O0FBQ2YseUJBQUssSUFBTCxHQUFZLElBQVo7QUFDQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDs7QUFFQSx5QkFBSyxxQkFBTCxHQUE2QixFQUE3Qjs7QUFFQSx3QkFBSyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLElBQXJCLEtBQThCLEVBQS9CLElBQXVDLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsSUFBckIsS0FBOEIsSUFBekUsRUFBZ0Y7QUFDNUUsNkJBQUsscUJBQUwsR0FBNkIsbUNBQTdCO0FBQ0g7QUFDSjs7eUNBRUQsTSxtQkFBTyxJLEVBQU07QUFBQTs7QUFDVCw0QkFBUSxHQUFSLENBQVksV0FBVSxJQUF0QjtBQUNBLHdCQUFJLGNBQWM7QUFDZCxtQ0FBVyxLQURHO0FBRWQsOEJBQU0sSUFGUTtBQUdkLHNDQUFjO0FBSEEscUJBQWxCOztBQU1BLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw0QkFBSSxLQUFLLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixvQ0FBUSxHQUFSLENBQVksdUNBQVo7O0FBRUEsd0NBQVksWUFBWixHQUEyQiwyQkFBM0I7O0FBRUEsbUNBQU8sV0FBUDtBQUNIOztBQUVELDRCQUFJLG9CQUFvQixNQUFLLHFCQUFMLEdBQTZCLDhCQUE3QixHQUE4RCxJQUE5RCxHQUFxRSxjQUE3Rjs7QUFFQSxnQ0FBUSxHQUFSLENBQVksaUJBQVo7O0FBRUEsOEJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUNLLElBREwsQ0FDVSx3QkFBZ0I7O0FBR2QsZ0NBQUksY0FBYyxhQUFhLE9BQS9COztBQUVBLHdDQUFZLElBQVosQ0FBaUIsVUFBUyxDQUFULEVBQVksQ0FBWixFQUFjO0FBQzVCLHVDQUFPLEVBQUUsSUFBRixDQUFPLE1BQVAsR0FBZ0IsRUFBRSxJQUFGLENBQU8sTUFBdkIsR0FBZ0MsQ0FBQyxDQUFqQyxHQUFxQyxDQUE1QztBQUNGLDZCQUZEOztBQUlBLHdDQUFZLFNBQVosR0FBd0IsSUFBeEI7QUFDQSx3Q0FBWSxJQUFaLEdBQW1CLFdBQW5COztBQUVBLG9DQUFRLFdBQVI7QUFDSCx5QkFkVCxFQWVLLEtBZkwsQ0FlWSx3QkFBZ0I7QUFDaEIsb0NBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsd0NBQVksWUFBWixHQUEyQiw0Q0FBNEMsSUFBdkU7O0FBRUEsbUNBQU8sV0FBUDtBQUNILHlCQXJCVDtBQXNCSCxxQkFuQ2EsQ0FBZDs7QUFxQ0EsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6IndvcmRuaWtTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
=======
                return DictionaryService;
            }()) || _class));

            _export('DictionaryService', DictionaryService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRuaWtTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7Ozt5Q0FHSyxpQixXQURaLE9BQU8sVUFBUCxDO0FBRUcsMkNBQWEsSUFBYixFQUFtQjtBQUFBOztBQUNmLHlCQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0g7OzRDQUVELE0sbUJBQU8sSSxFQUFNO0FBQUE7O0FBQ1QsNEJBQVEsR0FBUixDQUFZLFdBQVUsSUFBdEI7QUFDQSx3QkFBSSxjQUFjO0FBQ2QsbUNBQVcsS0FERztBQUVkLDhCQUFNLElBRlE7QUFHZCxzQ0FBYztBQUhBLHFCQUFsQjs7QUFNQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNEJBQUksS0FBSyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsb0NBQVEsR0FBUixDQUFZLHVDQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsMkJBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCw0QkFBSSxpQkFBaUIsNkJBQTZCLElBQWxEOztBQUVBLGdDQUFRLEdBQVIsQ0FBWSxjQUFaOztBQUVBLDhCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsY0FBZCxFQUNLLElBREwsQ0FDVSx3QkFBZ0I7QUFDZCxvQ0FBUSxHQUFSLENBQVksWUFBWjs7QUFFQSxnQ0FBSSxjQUFjLEVBQUUsUUFBRixDQUFXLGFBQWEsUUFBeEIsQ0FBbEI7QUFDQSxnQ0FBSSxlQUFlLEVBQUUsV0FBRixDQUFuQjtBQUNBLGdDQUFJLGNBQWMsRUFBbEI7O0FBRUEseUNBQWEsSUFBYixDQUFrQixnQkFBbEIsRUFBb0MsSUFBcEMsQ0FBeUMsVUFBUyxDQUFULEVBQVksQ0FBWixFQUFjO0FBQ25ELDRDQUFZLElBQVosQ0FBaUIsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFqQjtBQUNILDZCQUZEOztBQUlBLG9DQUFRLEdBQVIsQ0FBWSxXQUFaOztBQUVBLHdDQUFZLElBQVosQ0FBaUIsVUFBUyxDQUFULEVBQVksQ0FBWixFQUFjO0FBQzVCLHVDQUFPLEVBQUUsTUFBRixHQUFXLEVBQUUsTUFBYixHQUFzQixDQUFDLENBQXZCLEdBQTJCLENBQWxDO0FBQ0YsNkJBRkQ7O0FBSUEsd0NBQVksU0FBWixHQUF3QixJQUF4QjtBQUNBLHdDQUFZLElBQVosR0FBbUIsV0FBbkI7O0FBRUEsb0NBQVEsV0FBUjtBQUNILHlCQXRCVCxFQXVCSyxLQXZCTCxDQXVCWSx3QkFBZ0I7QUFDaEIsb0NBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsd0NBQVksWUFBWixHQUEyQiw0Q0FBNEMsSUFBdkU7O0FBRUEsbUNBQU8sV0FBUDtBQUNILHlCQTdCVDtBQThCSCxxQkEzQ2EsQ0FBZDs7QUE2Q0EsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6IndvcmRuaWtTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
