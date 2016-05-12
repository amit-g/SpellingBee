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

                    this.dictServiceBaseUrl = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3Rpb25hcnlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7Ozt5Q0FHSyxpQixXQURaLE9BQU8sVUFBUCxDO0FBRUcsMkNBQWEsSUFBYixFQUFtQjtBQUFBOztBQUNmLHlCQUFLLElBQUwsR0FBWSxJQUFaOztBQUdBLHlCQUFLLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0g7OzRDQUVELE0sbUJBQU8sSSxFQUFNO0FBQUE7O0FBQ1QsNEJBQVEsR0FBUixDQUFZLFdBQVUsSUFBdEI7QUFDQSx3QkFBSSxjQUFjO0FBQ2QsbUNBQVcsS0FERztBQUVkLDhCQUFNLElBRlE7QUFHZCxzQ0FBYztBQUhBLHFCQUFsQjs7QUFNQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNEJBQUksS0FBSyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsb0NBQVEsR0FBUixDQUFZLHVDQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsMkJBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCw0QkFBSSxpQkFBaUIsTUFBSyxrQkFBTCxHQUEwQiwwQkFBMUIsR0FBdUQsSUFBNUU7O0FBRUEsZ0NBQVEsR0FBUixDQUFZLGNBQVo7O0FBRUEsOEJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxjQUFkLEVBQ0ssSUFETCxDQUNVLHdCQUFnQjtBQUNkLG9DQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBLGdDQUFJLGNBQWMsRUFBRSxRQUFGLENBQVcsYUFBYSxRQUF4QixDQUFsQjtBQUNBLGdDQUFJLGVBQWUsRUFBRSxXQUFGLENBQW5CO0FBQ0EsZ0NBQUksY0FBYyxFQUFsQjs7QUFFQSx5Q0FBYSxJQUFiLENBQWtCLGdCQUFsQixFQUFvQyxJQUFwQyxDQUF5QyxVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWM7QUFDbkQsNENBQVksSUFBWixDQUFpQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQWpCO0FBQ0gsNkJBRkQ7O0FBSUEsb0NBQVEsR0FBUixDQUFZLFdBQVo7O0FBRUEsd0NBQVksSUFBWixDQUFpQixVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWM7QUFDNUIsdUNBQU8sRUFBRSxNQUFGLEdBQVcsRUFBRSxNQUFiLEdBQXNCLENBQUMsQ0FBdkIsR0FBMkIsQ0FBbEM7QUFDRiw2QkFGRDs7QUFJQSx3Q0FBWSxTQUFaLEdBQXdCLElBQXhCO0FBQ0Esd0NBQVksSUFBWixHQUFtQixXQUFuQjs7QUFFQSxvQ0FBUSxXQUFSO0FBQ0gseUJBdEJULEVBdUJLLEtBdkJMLENBdUJZLHdCQUFnQjtBQUNoQixvQ0FBUSxHQUFSLENBQVksWUFBWjs7QUFFQSx3Q0FBWSxZQUFaLEdBQTJCLDRDQUE0QyxJQUF2RTs7QUFFQSxtQ0FBTyxXQUFQO0FBQ0gseUJBN0JUO0FBOEJILHFCQTNDYSxDQUFkOztBQTZDQSwyQkFBTyxPQUFQO0FBQ0gsaUIiLCJmaWxlIjoiZGljdGlvbmFyeVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
