'use strict';

System.register(['aurelia-framework', 'appState', 'leaderBoard', 'randomHelper', 'textToSpeech', 'wordDefinition', 'dictionaryService', 'wordnikService'], function (_export, _context) {
  var inject, AppState, LeaderBoard, RandomHelper, TextToSpeech, WordDefinition, DictionaryService, WordnikService, _createClass, _dec, _class, Practice;

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
    }, function (_leaderBoard) {
      LeaderBoard = _leaderBoard.LeaderBoard;
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

      _export('Practice', Practice = (_dec = inject('loDash', AppState, LeaderBoard, RandomHelper, TextToSpeech, DictionaryService, WordnikService), _dec(_class = function () {
        function Practice(_, appState, leaderBoard, randomHelper, textToSpeech, dictionaryService, wordnikService) {
          _classCallCheck(this, Practice);

          this.heading = 'Practice';

          this._ = _;
          this.appState = appState;
          this.leaderBoard = leaderBoard;
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
          this.checkSpelling();

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

          this.leaderBoard.update(this.isSpellingCorrect, this.currentWord);
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

        Practice.prototype.giveUpAndDisplaySpelling = function giveUpAndDisplaySpelling() {
          this.showSpelling = true;
          this.showDefinitions();
          this.speakWord();

          this.leaderBoard.update(false, this.currentWord);
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
