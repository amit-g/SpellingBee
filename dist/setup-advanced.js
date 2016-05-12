'use strict';

System.register(['aurelia-framework', 'appState', 'textToSpeech'], function (_export, _context) {
  var inject, AppState, TextToSpeech, _dec, _class, SetupAdvancedCustomElement;

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
      _export('SetupAdvancedCustomElement', SetupAdvancedCustomElement = (_dec = inject(AppState, TextToSpeech), _dec(_class = function () {
        function SetupAdvancedCustomElement(appState, textToSpeech, window) {
          _classCallCheck(this, SetupAdvancedCustomElement);

          this.heading = 'Setup Advanced';
          this.confirmationTextToCompare = "reset";

          this.appState = appState;
          this.textToSpeech = textToSpeech;

          this.showConfirmText = false;
          this.cofirmationText = "";
        }

        SetupAdvancedCustomElement.prototype.resetSetup = function resetSetup() {
          if (this.cofirmationText === "") {
            var message = "Are you sure? This would reset all progress. Please type 'reset' to confirm.";

            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);

            this.showConfirmText = true;
          } else {
            if (this.cofirmationText === this.confirmationTextToCompare) {
              this.appState.reset();
            } else {
              var _message = "Please type 'reset' to confirm.";

              this.textToSpeech.speak(_message);
              this.messages.setErrorMessage(_message);

              this.showConfirmText = true;
            }
          }
        };

        SetupAdvancedCustomElement.prototype.cancelReset = function cancelReset() {
          this.showConfirmText = false;
          this.cofirmationText = "";
        };

        SetupAdvancedCustomElement.prototype.attached = function attached() {};

        return SetupAdvancedCustomElement;
      }()) || _class));

      _export('SetupAdvancedCustomElement', SetupAdvancedCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLWFkdmFuY2VkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsYyxhQUFBLFE7O0FBQ0Esa0IsaUJBQUEsWTs7OzRDQUdLLDBCLFdBRFosT0FBTyxRQUFQLEVBQWlCLFlBQWpCLEM7QUFPQyw0Q0FBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DLE1BQXBDLEVBQTRDO0FBQUE7O0FBQUEsZUFMNUMsT0FLNEMsR0FMbEMsZ0JBS2tDO0FBQUEsZUFKNUMseUJBSTRDLEdBSmhCLE9BSWdCOztBQUMxQyxlQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsWUFBcEI7O0FBRUEsZUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsZUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7OzZDQUVELFUseUJBQWE7QUFDVCxjQUFJLEtBQUssZUFBTCxLQUF5QixFQUE3QixFQUFpQztBQUMvQixnQkFBSSxVQUFVLDhFQUFkOztBQUVBLGlCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEI7QUFDQSxpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixPQUE5Qjs7QUFFQSxpQkFBSyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsV0FQRCxNQVFLO0FBQ0gsZ0JBQUksS0FBSyxlQUFMLEtBQXlCLEtBQUsseUJBQWxDLEVBQTZEO0FBQ3pELG1CQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0gsYUFGRCxNQUdLO0FBQ0Qsa0JBQUksV0FBVSxpQ0FBZDs7QUFFQSxtQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLFFBQXhCO0FBQ0EsbUJBQUssUUFBTCxDQUFjLGVBQWQsQ0FBOEIsUUFBOUI7O0FBRUEsbUJBQUssZUFBTCxHQUF1QixJQUF2QjtBQUNIO0FBQ0Y7QUFDSixTOzs2Q0FFRCxXLDBCQUFjO0FBQ1osZUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsZUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0QsUzs7NkNBRUQsUSx1QkFBVyxDQUNWLEMiLCJmaWxlIjoic2V0dXAtYWR2YW5jZWQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
