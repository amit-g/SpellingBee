'use strict';

<<<<<<< HEAD
System.register(['aurelia-framework', 'appState', 'leaderBoard', 'randomHelper', 'textToSpeech', 'wordDefinition', 'dictionaryService', 'wordnikService'], function (_export, _context) {
  var inject, AppState, LeaderBoard, RandomHelper, TextToSpeech, WordDefinition, DictionaryService, WordnikService, _createClass, _dec, _class, Practice;
=======
System.register(['aurelia-framework', 'appState', 'randomHelper', 'textToSpeech', 'dictionaryService'], function (_export, _context) {
  var inject, AppState, RandomHelper, TextToSpeech, DictionaryService, _createClass, _dec, _class, Practice;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

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
<<<<<<< HEAD
    }, function (_leaderBoard) {
      LeaderBoard = _leaderBoard.LeaderBoard;
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
    }, function (_randomHelper) {
      RandomHelper = _randomHelper.RandomHelper;
    }, function (_textToSpeech) {
      TextToSpeech = _textToSpeech.TextToSpeech;
<<<<<<< HEAD
    }, function (_wordDefinition) {
      WordDefinition = _wordDefinition.WordDefinition;
    }, function (_dictionaryService) {
      DictionaryService = _dictionaryService.DictionaryService;
    }, function (_wordnikService) {
      WordnikService = _wordnikService.WordnikService;
=======
    }, function (_dictionaryService) {
      DictionaryService = _dictionaryService.DictionaryService;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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

<<<<<<< HEAD
      _export('Practice', Practice = (_dec = inject('loDash', AppState, LeaderBoard, RandomHelper, TextToSpeech, DictionaryService, WordnikService), _dec(_class = function () {
        function Practice(_, appState, leaderBoard, randomHelper, textToSpeech, dictionaryService, wordnikService) {
=======
      _export('Practice', Practice = (_dec = inject(AppState, RandomHelper, TextToSpeech, DictionaryService), _dec(_class = function () {
        function Practice(appState, randomHelper, textToSpeech, dictionaryService) {
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
          _classCallCheck(this, Practice);

          this.heading = 'Practice';

<<<<<<< HEAD
          this._ = _;
          this.appState = appState;
          this.leaderBoard = leaderBoard;
          this.randomHelper = randomHelper;
          this.textToSpeech = textToSpeech;
          this.dictionaryService = dictionaryService;
          this.wordnikService = wordnikService;
=======
          this.appState = appState;
          this.randomHelper = randomHelper;
          this.textToSpeech = textToSpeech;
          this.dictionaryService = dictionaryService;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

          this.spelling = "";
          this.showSpelling = false;
          this.currentWordIndex = -1;
          this.currentWord = "";

          this.definitions = [];
<<<<<<< HEAD
          this.definitionIndex = -1;
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        Practice.prototype.submit = function submit() {
<<<<<<< HEAD
          this.checkSpelling();

=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD

          this.leaderBoard.update(this.isSpellingCorrect, this.currentWord);
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
        };

        Practice.prototype.speakWord = function speakWord() {
          this.textToSpeech.speak(this.currentWord);
        };

<<<<<<< HEAD
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
=======
        Practice.prototype.displaySpelling = function displaySpelling() {
          this.showSpelling = true;
          this.showDefinitions();
          this.speakWord();
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
        };

        Practice.prototype.getNextWord = function getNextWord() {
          this.spelling = "";
          this.showSpelling = false;
          this.definitions.length = 0;
<<<<<<< HEAD
          this.definitionIndex = -1;
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
          key: 'definitionsCount',
          get: function get() {
            return this.definitions.length;
          }
        }, {
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,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
=======
//# sourceMappingURL=data:application/json;base64,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
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
