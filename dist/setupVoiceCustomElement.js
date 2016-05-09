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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwVm9pY2VDdXN0b21FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsYyxhQUFBLFE7O0FBQ0Esa0IsaUJBQUEsWTs7O3lDQUdLLHVCLFdBRFosT0FBTyxRQUFQLEVBQWlCLFlBQWpCLEM7QUFJQyx5Q0FBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZUFGcEMsT0FFb0MsR0FGMUIsWUFFMEI7O0FBQ2hDLGtCQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNGLGVBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGVBQUssWUFBTCxHQUFvQixZQUFwQjs7QUFFQSxlQUFLLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7OzBDQUVELGMsNkJBQWlCO0FBQ2IsZUFBSyxNQUFMLEdBQWMsS0FBSyxZQUFMLENBQWtCLFNBQWxCLEVBQWQ7QUFDSCxTOzswQ0FFRCxRLHVCQUFXO0FBQ1AsY0FBSSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQTZCO0FBQ3pCLGlCQUFLLGNBQUw7QUFDSDtBQUNKLFMiLCJmaWxlIjoic2V0dXBWb2ljZUN1c3RvbUVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
