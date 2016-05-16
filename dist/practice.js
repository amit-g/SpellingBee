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
          if (this.definitionIndex >= 0 && this.definitionIndex < this.definitions.length) {
            var definition = this.definitions[this.definitionIndex];

            if (definition.partOfSpeech) {
              this.textToSpeech.speak(definition.partOfSpeech);
            }

            this.textToSpeech.speak(definition.text);
          }
        };

        Practice.prototype.fetchOrNextDefinition = function fetchOrNextDefinition() {
          var _this = this;

          if (this.definitions.length > 0) {
            this.nextDefinition();
          } else {
            this.populateDefinitions().then(function (promiseData) {
              _this.speakDefinition();
            });
          }
        };

        Practice.prototype.incrementDecrementDefinitionIndex = function incrementDecrementDefinitionIndex(howMany) {
          if (this.definitions.length <= 0) {
            return false;
          }

          this.definitionIndex += howMany;

          if (this.definitionIndex < 0) {
            this.definitionIndex = this.definitions.length;
          } else if (this.definitionIndex >= this.definitions.length) {
            this.definitionIndex = 0;
          }

          return true;
        };

        Practice.prototype.firstDefinition = function firstDefinition() {
          if (this.definitions.length > 0) {
            this.definitionIndex = 0;

            this.speakDefinition();
          }
        };

        Practice.prototype.nextDefinition = function nextDefinition() {
          if (this.incrementDecrementDefinitionIndex(1)) {
            this.speakDefinition();
          }
        };

        Practice.prototype.previousDefinition = function previousDefinition() {
          if (this.incrementDecrementDefinitionIndex(-1)) {
            this.speakDefinition();
          }
        };

        Practice.prototype.lastDefinition = function lastDefinition() {
          if (this.definitions.length > 0) {
            this.definitionIndex = this.definitions.length - 1;

            this.speakDefinition();
          }
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
          key: 'definitionsCount',
          get: function get() {
            return this.definitions.length;
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
