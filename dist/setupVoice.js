'use strict';

System.register(['aurelia-framework', 'appState', 'textToSpeech'], function (_export, _context) {
  var inject, AppState, TextToSpeech, _dec, _class, SetupVoiceCustomElement;

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
    }],
    execute: function () {
      _export('SetupVoiceCustomElement', SetupVoiceCustomElement = (_dec = inject(AppState, TextToSpeech), _dec(_class = function () {
        function SetupVoiceCustomElement(appState, textToSpeech) {
          _classCallCheck(this, SetupVoiceCustomElement);

          this.heading = 'SetupVoice';

          console.log('setupVoiceCustomElement');
          this.appState = appState;
          this.textToSpeech = textToSpeech;

          this.voices = [];
        }

        SetupVoiceCustomElement.prototype.populateVoices = function populateVoices() {
          this.voices = this.textToSpeech.getVocies();
        };

        SetupVoiceCustomElement.prototype.activate = function activate() {
          if (this.voices.length === 0) {
            this.populateVoices();
          }
        };

        return SetupVoiceCustomElement;
      }()) || _class));

      _export('SetupVoiceCustomElement', SetupVoiceCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwVm9pY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxjLGFBQUEsUTs7QUFDQSxrQixpQkFBQSxZOzs7eUNBR0ssdUIsV0FEWixPQUFPLFFBQVAsRUFBaUIsWUFBakIsQztBQUlDLHlDQUFZLFFBQVosRUFBc0IsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSxlQUZwQyxPQUVvQyxHQUYxQixZQUUwQjs7QUFDaEMsa0JBQVEsR0FBUixDQUFZLHlCQUFaO0FBQ0YsZUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsZUFBSyxZQUFMLEdBQW9CLFlBQXBCOztBQUVBLGVBQUssTUFBTCxHQUFjLEVBQWQ7QUFDRDs7MENBRUQsYyw2QkFBaUI7QUFDYixlQUFLLE1BQUwsR0FBYyxLQUFLLFlBQUwsQ0FBa0IsU0FBbEIsRUFBZDtBQUNILFM7OzBDQUVELFEsdUJBQVc7QUFDUCxjQUFJLEtBQUssTUFBTCxDQUFZLE1BQVosS0FBdUIsQ0FBM0IsRUFBNkI7QUFDekIsaUJBQUssY0FBTDtBQUNIO0FBQ0osUyIsImZpbGUiOiJzZXR1cFZvaWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
