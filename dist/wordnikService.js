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

                    this.wordnikServiceBaseUrl = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRuaWtTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7OztzQ0FHSyxjLFdBRFosT0FBTyxVQUFQLEM7QUFFRyx3Q0FBYSxJQUFiLEVBQW1CO0FBQUE7O0FBQ2YseUJBQUssSUFBTCxHQUFZLElBQVo7O0FBR0EseUJBQUsscUJBQUwsR0FBNkIsRUFBN0I7QUFDSDs7eUNBRUQsTSxtQkFBTyxJLEVBQU07QUFBQTs7QUFDVCw0QkFBUSxHQUFSLENBQVksV0FBVSxJQUF0QjtBQUNBLHdCQUFJLGNBQWM7QUFDZCxtQ0FBVyxLQURHO0FBRWQsOEJBQU0sSUFGUTtBQUdkLHNDQUFjO0FBSEEscUJBQWxCOztBQU1BLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw0QkFBSSxLQUFLLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixvQ0FBUSxHQUFSLENBQVksdUNBQVo7O0FBRUEsd0NBQVksWUFBWixHQUEyQiwyQkFBM0I7O0FBRUEsbUNBQU8sV0FBUDtBQUNIOztBQUVELDRCQUFJLG9CQUFvQixNQUFLLHFCQUFMLEdBQTZCLDhCQUE3QixHQUE4RCxJQUE5RCxHQUFxRSxjQUE3Rjs7QUFFQSxnQ0FBUSxHQUFSLENBQVksaUJBQVo7O0FBRUEsOEJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUNLLElBREwsQ0FDVSx3QkFBZ0I7O0FBR2QsZ0NBQUksY0FBYyxhQUFhLE9BQS9COztBQUVBLHdDQUFZLElBQVosQ0FBaUIsVUFBUyxDQUFULEVBQVksQ0FBWixFQUFjO0FBQzVCLHVDQUFPLEVBQUUsSUFBRixDQUFPLE1BQVAsR0FBZ0IsRUFBRSxJQUFGLENBQU8sTUFBdkIsR0FBZ0MsQ0FBQyxDQUFqQyxHQUFxQyxDQUE1QztBQUNGLDZCQUZEOztBQUlBLHdDQUFZLFNBQVosR0FBd0IsSUFBeEI7QUFDQSx3Q0FBWSxJQUFaLEdBQW1CLFdBQW5COztBQUVBLG9DQUFRLFdBQVI7QUFDSCx5QkFkVCxFQWVLLEtBZkwsQ0FlWSx3QkFBZ0I7QUFDaEIsb0NBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsd0NBQVksWUFBWixHQUEyQiw0Q0FBNEMsSUFBdkU7O0FBRUEsbUNBQU8sV0FBUDtBQUNILHlCQXJCVDtBQXNCSCxxQkFuQ2EsQ0FBZDs7QUFxQ0EsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6IndvcmRuaWtTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
