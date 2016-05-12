'use strict';

System.register(['aurelia-framework', 'appState', 'randomHelper', 'textToSpeech', 'wordDefinition', 'dictionaryService', 'wordnikService'], function (_export, _context) {
  var inject, AppState, RandomHelper, TextToSpeech, WordDefinition, DictionaryService, WordnikService, _createClass, _dec, _class, Practice;

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
    }, function (_wordDefinition) {
      WordDefinition = _wordDefinition.WordDefinition;
    }, function (_dictionaryService) {
      DictionaryService = _dictionaryService.DictionaryService;
    }, function (_wordnikService) {
      WordnikService = _wordnikService.WordnikService;
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

      _export('Practice', Practice = (_dec = inject('loDash', AppState, RandomHelper, TextToSpeech, DictionaryService, WordnikService), _dec(_class = function () {
        function Practice(_, appState, randomHelper, textToSpeech, dictionaryService, wordnikService) {
          _classCallCheck(this, Practice);

          this.heading = 'Practice';

          this._ = _;
          this.appState = appState;
          this.randomHelper = randomHelper;
          this.textToSpeech = textToSpeech;
          this.dictionaryService = dictionaryService;
          this.wordnikService = wordnikService;

          this.spelling = "";
          this.showSpelling = false;
          this.currentWordIndex = -1;
          this.currentWord = "";

          this.definitions = [];
          this.definitionIndex = -1;

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

        Practice.prototype.speakDefinition = function speakDefinition() {
          var _this = this;

          this.populateDefinitions().then(function (promiseData) {
            if (_this.definitionIndex >= 0 && _this.definitionIndex < _this.definitions.length) {
              var definition = _this.definitions[_this.definitionIndex];

              if (definition.partOfSpeech) {
                _this.textToSpeech.speak(definition.partOfSpeech);
              }

              _this.textToSpeech.speak(definition.text);

              _this.definitionIndex++;

              if (_this.definitionIndex >= _this.definitions.length) {
                _this.definitionIndex = 0;
              }
            }
          });
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
          this.definitionIndex = -1;
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
          this.populateDefinitions();
        };

        Practice.prototype.populateDefinitions = function populateDefinitions() {
          var _this2 = this;

          var promise = Promise.resolve();

          if (this.definitions.length == 0) {
            promise = this.wordnikService.define(this.currentWord).then(function (promiseData) {
              _this2.definitions.length = 0;
              _this2.definitionIndex = 0;

              _this2.definitions = _this2._.map(promiseData.data, function (d) {
                return new WordDefinition(d);
              });
            }).catch(function (promiseData) {
              console.log(promiseData);
              _this2.definitions.length = 0;
              _this2.definitionIndex = -1;
              _this2.setErrorMessage(promiseData.errorMessage);
            });
          }

          return promise;
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
