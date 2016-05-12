'use strict';

System.register(['aurelia-framework', 'appState', 'randomHelper', 'textToSpeech', 'dictionaryService'], function (_export, _context) {
  var inject, AppState, RandomHelper, TextToSpeech, DictionaryService, _createClass, _dec, _class, Practice;

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
    }, function (_randomHelper) {
      RandomHelper = _randomHelper.RandomHelper;
    }, function (_textToSpeech) {
      TextToSpeech = _textToSpeech.TextToSpeech;
    }, function (_dictionaryService) {
      DictionaryService = _dictionaryService.DictionaryService;
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

      _export('Practice', Practice = (_dec = inject(AppState, RandomHelper, TextToSpeech, DictionaryService), _dec(_class = function () {
        function Practice(appState, randomHelper, textToSpeech, dictionaryService) {
          _classCallCheck(this, Practice);

          this.heading = 'Practice';

          this.appState = appState;
          this.randomHelper = randomHelper;
          this.textToSpeech = textToSpeech;
          this.dictionaryService = dictionaryService;

          this.spelling = "";
          this.showSpelling = false;
          this.currentWordIndex = -1;
          this.currentWord = "";

          this.definitions = [];

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        Practice.prototype.submit = function submit() {
          return false;
        };

        Practice.prototype.checkSpelling = function checkSpelling() {
          if (this.isSpellingCorrect) {
            this.showSpelling = true;
            this.showDefinitions();
            this.textToSpeech.speak("Perfect");
          } else {
            this.textToSpeech.speak("Try again");
          }
        };

        Practice.prototype.speakWord = function speakWord() {
          this.textToSpeech.speak(this.currentWord);
        };

        Practice.prototype.displaySpelling = function displaySpelling() {
          this.showSpelling = true;
          this.showDefinitions();
          this.speakWord();
        };

        Practice.prototype.getNextWord = function getNextWord() {
          this.spelling = "";
          this.showSpelling = false;
          this.definitions.length = 0;
          this.currentWordIndex = this.randomHelper.getRandomInt(0, this.appState.wordMasterList.length);
          this.currentWord = this.appState.wordMasterList[this.currentWordIndex];

          this.textToSpeech.speak(this.currentWord);
        };

        Practice.prototype.resetMessages = function resetMessages() {
          this.message = '';
          this.errorMessage = '';
          this.isSuccess = false;
          this.isError = false;
        };

        Practice.prototype.setMessage = function setMessage(m) {
          this.message = m;
          this.isSuccess = true;
        };

        Practice.prototype.setErrorMessage = function setErrorMessage(m) {
          this.errorMessage = m;
          this.isError = true;
        };

        Practice.prototype.showDefinitions = function showDefinitions() {
          if (this.definitions.length == 0) {
            this.populateDefinitions();
          }
        };

        Practice.prototype.populateDefinitions = function populateDefinitions() {
          var _this = this;

          this.definitions.length = 0;
          this.dictionaryService.define(this.currentWord).then(function (promiseData) {
            console.log(promiseData);
            Array.prototype.push.apply(_this.definitions, promiseData.data);
          }).catch(function (promiseData) {
            console.log(promiseData);
            _this.setErrorMessage(promiseData.errorMessage);
          });
        };

        Practice.prototype.activate = function activate() {
          if (!this.canPractice) {
            this.textToSpeech.speak("No words available. Please click Setup and load words.");
          } else {
            this.getNextWord();
          }
        };

        _createClass(Practice, [{
          key: 'canPractice',
          get: function get() {
            return this.appState.wordMasterList && this.appState.wordMasterList.length > 0;
          }
        }, {
          key: 'wordCount',
          get: function get() {
            return this.appState.wordMasterList.length;
          }
        }, {
          key: 'isSpellingValid',
          get: function get() {
            return this.spelling.length > 0;
          }
        }, {
          key: 'isSpellingCorrect',
          get: function get() {
            return this.spelling.toLowerCase() === this.currentWord.toLowerCase();
          }
        }, {
          key: 'spellingClassName',
          get: function get() {
            return this.isSpellingCorrect ? "success" : "danger";
          }
        }]);

        return Practice;
      }()) || _class));

      _export('Practice', Practice);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
