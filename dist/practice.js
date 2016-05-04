'use strict';

System.register(['aurelia-framework', 'appState', 'randomHelper', 'textToSpeech'], function (_export, _context) {
  var inject, AppState, RandomHelper, TextToSpeech, _createClass, _dec, _class, Practice;

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

      _export('Practice', Practice = (_dec = inject(AppState, RandomHelper, TextToSpeech), _dec(_class = function () {
        function Practice(appState, randomHelper, textToSpeech) {
          _classCallCheck(this, Practice);

          this.heading = 'Practice';

          this.appState = appState;
          this.randomHelper = randomHelper;
          this.textToSpeech = textToSpeech;

          this.spelling = "";
          this.showSpelling = false;
          this.currentWordIndex = -1;
          this.currentWord = "";

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
          this.speakWord();
        };

        Practice.prototype.getNextWord = function getNextWord() {
          this.spelling = "";
          this.showSpelling = false;
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

        Practice.prototype.activate = function activate() {
          if (!this.canPractice) {
            this.textToSpeech.speak("Welcome to spelling bee practice.");
            this.textToSpeech.speak("No words available. Please click Setup and load words.");
          } else {
            this.getNextWord();
          }
        };

        _createClass(Practice, [{
          key: 'canPractice',
          get: function get() {
            return this.appState.wordMasterList.length > 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByYWN0aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsYyxhQUFBLFE7O0FBQ0Esa0IsaUJBQUEsWTs7QUFDQSxrQixpQkFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0ssUSxXQURaLE9BQU8sUUFBUCxFQUFpQixZQUFqQixFQUErQixZQUEvQixDO0FBSUMsMEJBQVksUUFBWixFQUFzQixZQUF0QixFQUFvQyxZQUFwQyxFQUFrRDtBQUFBOztBQUFBLGVBRmxELE9BRWtELEdBRnhDLFVBRXdDOztBQUNoRCxlQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsWUFBcEI7O0FBRUEsZUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsZUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsZUFBSyxnQkFBTCxHQUF3QixDQUFDLENBQXpCO0FBQ0EsZUFBSyxXQUFMLEdBQW1CLEVBQW5COztBQUVBLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7O0FBRUEsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNEOzsyQkFFRCxNLHFCQUFTO0FBQ1AsaUJBQU8sS0FBUDtBQUNELFM7OzJCQW1CRCxhLDRCQUFnQjtBQUNkLGNBQUksS0FBSyxpQkFBVCxFQUEyQjtBQUN2QixpQkFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixTQUF4QjtBQUNILFdBSEQsTUFJSztBQUNELGlCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsV0FBeEI7QUFDSDtBQUNGLFM7OzJCQUVELFMsd0JBQVk7QUFDVixlQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsS0FBSyxXQUE3QjtBQUNELFM7OzJCQUVELGUsOEJBQWtCO0FBQ2hCLGVBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNBLGVBQUssU0FBTDtBQUNELFM7OzJCQUVELFcsMEJBQWM7QUFDWixlQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxlQUFLLGdCQUFMLEdBQXdCLEtBQUssWUFBTCxDQUFrQixZQUFsQixDQUErQixDQUEvQixFQUFrQyxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLE1BQS9ELENBQXhCO0FBQ0EsZUFBSyxXQUFMLEdBQW1CLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsS0FBSyxnQkFBbEMsQ0FBbkI7O0FBRUEsZUFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLEtBQUssV0FBN0I7QUFDRCxTOzsyQkFFRCxhLDRCQUFlO0FBQ2IsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7QUFDRCxTOzsyQkFFRCxVLHVCQUFXLEMsRUFBRTtBQUNYLGVBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxlQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxTOzsyQkFFRCxlLDRCQUFnQixDLEVBQUU7QUFDaEIsZUFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsZUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNELFM7OzJCQUVELFEsdUJBQVc7QUFDUCxjQUFJLENBQUMsS0FBSyxXQUFWLEVBQXNCO0FBQ2xCLGlCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsbUNBQXhCO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3Qix3REFBeEI7QUFDSCxXQUhELE1BSUs7QUFDRCxpQkFBSyxXQUFMO0FBQ0g7QUFDSixTOzs7OzhCQXJFaUI7QUFDaEIsbUJBQU8sS0FBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixNQUE3QixHQUFzQyxDQUE3QztBQUNEOzs7OEJBRXFCO0FBQ2xCLG1CQUFPLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBOUI7QUFDSDs7OzhCQUV1QjtBQUNwQixtQkFBTyxLQUFLLFFBQUwsQ0FBYyxXQUFkLE9BQWdDLEtBQUssV0FBTCxDQUFpQixXQUFqQixFQUF2QztBQUNIOzs7OEJBRXVCO0FBQ3BCLG1CQUFPLEtBQUssaUJBQUwsR0FBeUIsU0FBekIsR0FBcUMsUUFBNUM7QUFDSCIsImZpbGUiOiJwcmFjdGljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
