'use strict';

System.register(['aurelia-framework', 'aurelia-http-client'], function (_export, _context) {
    var inject, HttpClient, _dec, _class, WordListLoaderGoogleSheet;

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
            _export('WordListLoaderGoogleSheet', WordListLoaderGoogleSheet = (_dec = inject(HttpClient), _dec(_class = function () {
                function WordListLoaderGoogleSheet(http) {
                    _classCallCheck(this, WordListLoaderGoogleSheet);

                    this.http = http;
                }

                WordListLoaderGoogleSheet.prototype.load = function load(publishedUrl) {
                    var _this = this;

                    console.log("WordListLoaderGoogleSheet.load: " + publishedUrl);

                    var promiseData = {
                        isSuccess: false,
                        data: null,
                        errorMessage: ""
                    };

                    var promise = new Promise(function (resolve, reject) {
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

                            promiseData.errorMessage = 'Invalid Google Sheet Url. Please enter a valid url.';

                            reject(promiseData);
                        }

                        var feedUrlTemplate = "https://spreadsheets.google.com/feeds/cells/{key}/od6/public/basic?alt=json";
                        var feedUrl = feedUrlTemplate.replace("{key}", key);

                        _this.http.jsonp(feedUrl, 'callback').then(function (httpResponse) {
                            console.log(httpResponse);

                            var words = $.map(httpResponse.response.feed.entry, function (ele, i) {
                                return ele.content["$t"];
                            });

                            console.log(words);

                            promiseData.isSuccess = true;
                            promiseData.data = words;

                            resolve(promiseData);
                        }).catch(function (httpResponse) {
                            console.log(httpResponse);

                            promiseData.errorMessage = 'Could not get the word from Google Sheet. Please check the Url and permissions. The sheet has to be published (not shared).';

                            reject(promiseData);
                        });
                    });

                    return promise;
                };

                return WordListLoaderGoogleSheet;
            }()) || _class));

            _export('WordListLoaderGoogleSheet', WordListLoaderGoogleSheet);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRMaXN0TG9hZGVyR29vZ2xlU2hlZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBR0Esc0Isc0JBQUEsVTs7O2lEQUlLLHlCLFdBRFosT0FBTyxVQUFQLEM7QUFFRyxtREFBYSxJQUFiLEVBQW1CO0FBQUE7O0FBQ2YseUJBQUssSUFBTCxHQUFZLElBQVo7QUFDSDs7b0RBRUQsSSxpQkFBSyxZLEVBQWM7QUFBQTs7QUFDZiw0QkFBUSxHQUFSLENBQVkscUNBQXFDLFlBQWpEOztBQUVBLHdCQUFJLGNBQWM7QUFDZCxtQ0FBVyxLQURHO0FBRWQsOEJBQU0sSUFGUTtBQUdkLHNDQUFjO0FBSEEscUJBQWxCOztBQU1BLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw0QkFBSSxhQUFhLE1BQWIsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsb0NBQVEsR0FBUixDQUFZLCtDQUFaOztBQUVBLHdDQUFZLFlBQVosR0FBMkIsMkNBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCxnQ0FBUSxHQUFSLENBQVksWUFBWjtBQUNBLDRCQUFJLHFCQUFxQix5Q0FBekI7QUFDQSw0QkFBSSxzQkFBc0IsdURBQTFCO0FBQ0EsNEJBQUkscUJBQXFCLElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDLEdBQWhDLENBQXpCO0FBQ0EsNEJBQUksTUFBTSxhQUFhLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLElBQXpDLENBQVY7O0FBRUEsNEJBQUksQ0FBQyxHQUFELElBQVEsUUFBUSxZQUFwQixFQUFrQztBQUM5QixvQ0FBUSxHQUFSLENBQVksa0JBQWtCLFlBQTlCOztBQUVBLHdDQUFZLFlBQVosR0FBMkIscURBQTNCOztBQUVBLG1DQUFPLFdBQVA7QUFDSDs7QUFFRCw0QkFBSSxrQkFBa0IsNkVBQXRCO0FBQ0EsNEJBQUksVUFBVSxnQkFBZ0IsT0FBaEIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsQ0FBZDs7QUFFQSw4QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixFQUF5QixVQUF6QixFQUNLLElBREwsQ0FDVSx3QkFBZ0I7QUFDZCxvQ0FBUSxHQUFSLENBQVksWUFBWjs7QUFFQSxnQ0FBSSxRQUFRLEVBQUUsR0FBRixDQUFNLGFBQWEsUUFBYixDQUFzQixJQUF0QixDQUEyQixLQUFqQyxFQUF3QyxVQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCO0FBQ2xFLHVDQUFPLElBQUksT0FBSixDQUFZLElBQVosQ0FBUDtBQUNILDZCQUZXLENBQVo7O0FBSUEsb0NBQVEsR0FBUixDQUFZLEtBQVo7O0FBRUEsd0NBQVksU0FBWixHQUF3QixJQUF4QjtBQUNBLHdDQUFZLElBQVosR0FBbUIsS0FBbkI7O0FBRUEsb0NBQVEsV0FBUjtBQUNILHlCQWRULEVBZUssS0FmTCxDQWVZLHdCQUFnQjtBQUNoQixvQ0FBUSxHQUFSLENBQVksWUFBWjs7QUFFQSx3Q0FBWSxZQUFaLEdBQTJCLDZIQUEzQjs7QUFFQSxtQ0FBTyxXQUFQO0FBQ0gseUJBckJUO0FBc0JILHFCQWhEYSxDQUFkOztBQWtEQSwyQkFBTyxPQUFQO0FBQ0gsaUIiLCJmaWxlIjoid29yZExpc3RMb2FkZXJHb29nbGVTaGVldC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
