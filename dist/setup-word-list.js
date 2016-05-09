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
            _this.messages.setMessage(_this.appState.wordMasterList.length + ' words loaded.');
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
            return true;
          }
        }, {
          key: 'isGistUrlValid',
          get: function get() {
            return true;
          }
        }]);

        return SetupWordListCustomElement;
      }()) || _class));

      _export('SetupWordListCustomElement', SetupWordListCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXdvcmQtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVEsWSxxQkFBQSxNOztBQUNBLGMsYUFBQSxROztBQUNBLGtCLGlCQUFBLFk7O0FBQ0Esb0IsbUJBQUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUdLLDBCLFdBRFosT0FBTyxRQUFQLEVBQWlCLFlBQWpCLEVBQStCLGNBQS9CLEVBQStDLFFBQS9DLEM7QUFNQyw0Q0FBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DLGNBQXBDLEVBQW9ELE1BQXBELEVBQTREO0FBQUE7O0FBQUEsZUFKNUQsT0FJNEQsR0FKbEQsaUJBSWtEOztBQUMxRCxlQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxlQUFLLGNBQUwsR0FBc0IsY0FBdEI7QUFDQSxlQUFLLE1BQUwsR0FBYyxNQUFkO0FBV0Q7OzZDQWNELHdCLHVDQUEyQjtBQUFBOztBQUN2QixlQUFLLFFBQUwsQ0FBYyxhQUFkOztBQUdBLGVBQUssUUFBTCxDQUFjLGNBQWQsR0FBK0IsS0FBSyxjQUFwQzs7QUFFQSxlQUFLLGNBQUwsQ0FBb0IsbUJBQXBCLENBQXdDLEtBQUssY0FBN0MsRUFDQyxJQURELENBQ00sdUJBQWU7QUFDakIsb0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSxrQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixNQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLE1BQTdCLEdBQXNDLGdCQUEvRDtBQUNILFdBSkQsRUFLQyxLQUxELENBS08sdUJBQWU7QUFDbEIsb0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSxrQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixZQUFZLFlBQTFDO0FBQ0gsV0FSRDtBQVNILFM7OzZDQUVELGlCLGdDQUFvQjtBQUNoQixrQkFBUSxHQUFSLENBQVksbUJBQVo7O0FBRUEsZUFBSyxRQUFMLENBQWMsYUFBZDtBQUNILFM7OzZDQW1CRCxRLHVCQUFXO0FBQ1QsZUFBSyxjQUFMLEdBQXNCLEtBQUssUUFBTCxDQUFjLGNBQXBDO0FBQ0EsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNELFM7Ozs7OEJBdEQyQjtBQUN4QixtQkFBTyxJQUFQO0FBRUg7Ozs4QkFHb0I7QUFDakIsbUJBQU8sSUFBUDtBQUVIIiwiZmlsZSI6InNldHVwLXdvcmQtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
