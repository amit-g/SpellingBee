'use strict';

System.register(['aurelia-framework', 'appState', 'wordListLoaderGoogleSheet'], function (_export, _context) {
    var inject, AppState, WordListLoaderGoogleSheet, _dec, _class, WordListLoader;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_appState) {
            AppState = _appState.AppState;
        }, function (_wordListLoaderGoogleSheet) {
            WordListLoaderGoogleSheet = _wordListLoaderGoogleSheet.WordListLoaderGoogleSheet;
        }],
        execute: function () {
            _export('WordListLoader', WordListLoader = (_dec = inject(AppState, WordListLoaderGoogleSheet), _dec(_class = function () {
                function WordListLoader(appState, wordListLoaderGoogleSheet) {
                    _classCallCheck(this, WordListLoader);

                    this.appState = appState;
                    this.wordListLoaderGoogleSheet = wordListLoaderGoogleSheet;
                }

                WordListLoader.prototype.loadFromGoogleSheet = function loadFromGoogleSheet(url) {
                    var _this = this;

                    console.log("WordListLoaderGoogleSheet.loadWordsFromGoogleSheet: " + url);
                    console.log("wordListLoaderGoogleSheet: ");
                    console.log(this.wordListLoaderGoogleSheet);

                    var promise = new Promise(function (resolve, reject) {
                        _this.wordListLoaderGoogleSheet.load(url).then(function (promiseData) {
                            var words = promiseData.data;

                            console.log("words=> " + words.length);

                            console.log("this.appState.wordMasterList=> " + _this.appState.wordMasterList.length);

                            _this.appState.appendWords(words);


                            console.log("this.appState.wordMasterList=> " + _this.appState.wordMasterList.length);


                            promiseData.data = null;

                            resolve(promiseData);
                        }).catch(function (promiseData) {
                            reject(promiseData);
                        });
                    });

                    return promise;
                };

                return WordListLoader;
            }()) || _class));

            _export('WordListLoader', WordListLoader);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRMaXN0TG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUVBLG9CLGFBQUEsUTs7QUFDQSxxQyw4QkFBQSx5Qjs7O3NDQUdLLGMsV0FEWixPQUFPLFFBQVAsRUFBaUIseUJBQWpCLEM7QUFFRyx3Q0FBYSxRQUFiLEVBQXVCLHlCQUF2QixFQUFrRDtBQUFBOztBQUM5Qyx5QkFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EseUJBQUsseUJBQUwsR0FBaUMseUJBQWpDO0FBQ0g7O3lDQUVELG1CLGdDQUFvQixHLEVBQUs7QUFBQTs7QUFDckIsNEJBQVEsR0FBUixDQUFZLHlEQUF5RCxHQUFyRTtBQUNBLDRCQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNBLDRCQUFRLEdBQVIsQ0FBWSxLQUFLLHlCQUFqQjs7QUFFQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsOEJBQUsseUJBQUwsQ0FBK0IsSUFBL0IsQ0FBb0MsR0FBcEMsRUFDSyxJQURMLENBQ1UsdUJBQWU7QUFDakIsZ0NBQUksUUFBUSxZQUFZLElBQXhCOztBQUVBLG9DQUFRLEdBQVIsQ0FBWSxhQUFhLE1BQU0sTUFBL0I7O0FBRUEsb0NBQVEsR0FBUixDQUFZLG9DQUFvQyxNQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLE1BQTdFOztBQUlBLGtDQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLEtBQTFCOzs7QUFJQSxvQ0FBUSxHQUFSLENBQVksb0NBQW9DLE1BQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsTUFBN0U7OztBQUdBLHdDQUFZLElBQVosR0FBbUIsSUFBbkI7O0FBRUEsb0NBQVEsV0FBUjtBQUNILHlCQXBCTCxFQXFCSyxLQXJCTCxDQXFCVyx1QkFBZTtBQUNsQixtQ0FBTyxXQUFQO0FBQ0gseUJBdkJMO0FBd0JILHFCQXpCYSxDQUFkOztBQTJCQSwyQkFBTyxPQUFQO0FBQ0gsaUIiLCJmaWxlIjoid29yZExpc3RMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
