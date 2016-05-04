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

                            console.log("words=>");
                            console.log(words);
                            console.log("this.appState.wordMasterList=>");
                            console.log(_this.appState.wordMasterList);

                            _this.appState.wordMasterList.length = 0;
                            Array.prototype.push.apply(_this.appState.wordMasterList, words);

                            console.log("this.appState.wordMasterList=>");
                            console.log(_this.appState.wordMasterList);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRMaXN0TG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUVBLG9CLGFBQUEsUTs7QUFDQSxxQyw4QkFBQSx5Qjs7O3NDQUdLLGMsV0FEWixPQUFPLFFBQVAsRUFBaUIseUJBQWpCLEM7QUFFRyx3Q0FBYSxRQUFiLEVBQXVCLHlCQUF2QixFQUFrRDtBQUFBOztBQUM5Qyx5QkFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EseUJBQUsseUJBQUwsR0FBaUMseUJBQWpDO0FBQ0g7O3lDQUVELG1CLGdDQUFvQixHLEVBQUs7QUFBQTs7QUFDckIsNEJBQVEsR0FBUixDQUFZLHlEQUF5RCxHQUFyRTtBQUNBLDRCQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNBLDRCQUFRLEdBQVIsQ0FBWSxLQUFLLHlCQUFqQjs7QUFFQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsOEJBQUsseUJBQUwsQ0FBK0IsSUFBL0IsQ0FBb0MsR0FBcEMsRUFDSyxJQURMLENBQ1UsdUJBQWU7QUFDakIsZ0NBQUksUUFBUSxZQUFZLElBQXhCOztBQUVBLG9DQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0Esb0NBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxvQ0FBUSxHQUFSLENBQVksZ0NBQVo7QUFDQSxvQ0FBUSxHQUFSLENBQVksTUFBSyxRQUFMLENBQWMsY0FBMUI7O0FBRUEsa0NBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsTUFBN0IsR0FBc0MsQ0FBdEM7QUFDQSxrQ0FBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLEtBQXJCLENBQTJCLE1BQUssUUFBTCxDQUFjLGNBQXpDLEVBQXlELEtBQXpEOztBQUVBLG9DQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLG9DQUFRLEdBQVIsQ0FBWSxNQUFLLFFBQUwsQ0FBYyxjQUExQjs7QUFFQSx3Q0FBWSxJQUFaLEdBQW1CLElBQW5COztBQUVBLG9DQUFRLFdBQVI7QUFDSCx5QkFsQkwsRUFtQkssS0FuQkwsQ0FtQlcsdUJBQWU7QUFDbEIsbUNBQU8sV0FBUDtBQUNILHlCQXJCTDtBQXNCSCxxQkF2QmEsQ0FBZDs7QUF5QkEsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6IndvcmRMaXN0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
