'use strict';

System.register(['aurelia-framework', 'appState', 'textToSpeech', 'wordListLoader'], function (_export, _context) {
    var inject, AppState, TextToSpeech, WordListLoader, _createClass, _dec, _class, SetupWordListCustomElement;

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
        }, function (_textToSpeech) {
            TextToSpeech = _textToSpeech.TextToSpeech;
        }, function (_wordListLoader) {
            WordListLoader = _wordListLoader.WordListLoader;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('SetupWordListCustomElement', SetupWordListCustomElement = (_dec = inject(AppState, TextToSpeech, WordListLoader, 'window'), _dec(_class = function () {
                function SetupWordListCustomElement(appState, textToSpeech, wordListLoader, window) {
                    _classCallCheck(this, SetupWordListCustomElement);

                    this.heading = 'Setup Word List';

                    this.appState = appState;
                    this.textToSpeech = textToSpeech;
                    this.wordListLoader = wordListLoader;
                    this.window = window;
                }

                SetupWordListCustomElement.prototype.loadWordsFromGoogleSheet = function loadWordsFromGoogleSheet() {
                    var _this = this;

                    this.messages.resetMessages();

                    this.appState.googleSheetUrl = this.googleSheetUrl;

                    this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl).then(function (promiseData) {
                        console.log(promiseData);

                        var message = _this.appState.wordMasterList.length + ' words loaded from Google Sheet';

                        _this.textToSpeech.speak(message);
                        _this.messages.setMessage(message);
                    }).catch(function (promiseData) {
                        console.log(promiseData);
                        _this.messages.setErrorMessage(promiseData.errorMessage);
                    });
                };

                SetupWordListCustomElement.prototype.loadWordsFromGist = function loadWordsFromGist() {
                    console.log("loadWordsFromGist");

                    this.messages.resetMessages();
                };

                SetupWordListCustomElement.prototype.attached = function attached() {
                    this.googleSheetUrl = this.appState.googleSheetUrl;
                    this.gistUrl = "";
                };

                _createClass(SetupWordListCustomElement, [{
                    key: 'isGoogleSheetUrlValid',
                    get: function get() {
                        return this.googleSheetUrl && this.googleSheetUrl.length > 0;
                    }
                }, {
                    key: 'isGistUrlValid',
                    get: function get() {
                        return this.gistUrl && this.gistUrl.length > 0;
                    }
                }]);

                return SetupWordListCustomElement;
            }()) || _class));

            _export('SetupWordListCustomElement', SetupWordListCustomElement);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXdvcmQtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVEsa0IscUJBQUEsTTs7QUFDQSxvQixhQUFBLFE7O0FBQ0Esd0IsaUJBQUEsWTs7QUFDQSwwQixtQkFBQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR0ssMEIsV0FEWixPQUFPLFFBQVAsRUFBaUIsWUFBakIsRUFBK0IsY0FBL0IsRUFBK0MsUUFBL0MsQztBQU1DLG9EQUFZLFFBQVosRUFBc0IsWUFBdEIsRUFBb0MsY0FBcEMsRUFBb0QsTUFBcEQsRUFBNEQ7QUFBQTs7QUFBQSx5QkFKNUQsT0FJNEQsR0FKbEQsaUJBSWtEOztBQUMxRCx5QkFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EseUJBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLHlCQUFLLGNBQUwsR0FBc0IsY0FBdEI7QUFDQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDtBQUNEOztxREFVRCx3Qix1Q0FBMkI7QUFBQTs7QUFDdkIseUJBQUssUUFBTCxDQUFjLGFBQWQ7O0FBRUEseUJBQUssUUFBTCxDQUFjLGNBQWQsR0FBK0IsS0FBSyxjQUFwQzs7QUFFQSx5QkFBSyxjQUFMLENBQW9CLG1CQUFwQixDQUF3QyxLQUFLLGNBQTdDLEVBQ0MsSUFERCxDQUNNLHVCQUFlO0FBQ2pCLGdDQUFRLEdBQVIsQ0FBWSxXQUFaOztBQUVBLDRCQUFJLFVBQVUsTUFBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixNQUE3QixHQUFzQyxpQ0FBcEQ7O0FBRUEsOEJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QjtBQUNBLDhCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLE9BQXpCO0FBQ0gscUJBUkQsRUFTQyxLQVRELENBU08sdUJBQWU7QUFDbEIsZ0NBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSw4QkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixZQUFZLFlBQTFDO0FBQ0gscUJBWkQ7QUFhSCxpQjs7cURBRUQsaUIsZ0NBQW9CO0FBQ2hCLDRCQUFRLEdBQVIsQ0FBWSxtQkFBWjs7QUFFQSx5QkFBSyxRQUFMLENBQWMsYUFBZDtBQUNILGlCOztxREFFRCxRLHVCQUFXO0FBQ1QseUJBQUssY0FBTCxHQUFzQixLQUFLLFFBQUwsQ0FBYyxjQUFwQztBQUNBLHlCQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0QsaUI7Ozs7d0NBckMyQjtBQUN4QiwrQkFBTyxLQUFLLGNBQUwsSUFBdUIsS0FBSyxjQUFMLENBQW9CLE1BQXBCLEdBQTZCLENBQTNEO0FBQ0g7Ozt3Q0FFb0I7QUFDakIsK0JBQU8sS0FBSyxPQUFMLElBQWdCLEtBQUssT0FBTCxDQUFhLE1BQWIsR0FBc0IsQ0FBN0M7QUFDSCIsImZpbGUiOiJzZXR1cC13b3JkLWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
