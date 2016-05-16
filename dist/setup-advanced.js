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
        function SetupAdvancedCustomElement(appState, textToSpeech) {
          _classCallCheck(this, SetupAdvancedCustomElement);

          this.heading = 'Setup Advanced';
          this.confirmationText = "reset setup";

          this.appState = appState;
          this.textToSpeech = textToSpeech;

          this.showConfirmText = false;
          this.enteredCofirmationText = "";
        }

        SetupAdvancedCustomElement.prototype.resetSetup = function resetSetup() {
          if (this.enteredCofirmationText === "") {
            var message = "Are you sure? This would reset all progress. Please type '" + this.confirmationText + "' to confirm.";

            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);

            this.showConfirmText = true;
          } else {
            if (this.enteredCofirmationText === this.confirmationText) {
              this.appState.reset();

              var _message = "'Reset Setup' completed.";

              this.messages.resetMessages();
              this.messages.setMessage(_message);

              this.showConfirmText = false;
            } else {
              var _message2 = "Please type '" + this.confirmationText + "' to confirm.";

              this.textToSpeech.speak(_message2);
              this.messages.setErrorMessage(_message2);

              this.showConfirmText = true;
            }
          }
        };

        SetupAdvancedCustomElement.prototype.cancelResetSetup = function cancelResetSetup() {
          this.showConfirmText = false;
          this.enteredCofirmationText = "";

          this.messages.resetMessages();
        };

        SetupAdvancedCustomElement.prototype.resetScores = function resetScores() {
          var confirmation = confirm("Are you sure to reset the scores?");

          if (confirmation) {
            this.appState.leaderBoard = {};
          }
        };

        SetupAdvancedCustomElement.prototype.attached = function attached() {};

        return SetupAdvancedCustomElement;
      }()) || _class));

      _export('SetupAdvancedCustomElement', SetupAdvancedCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLWFkdmFuY2VkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsYyxhQUFBLFE7O0FBQ0Esa0IsaUJBQUEsWTs7OzRDQUdLLDBCLFdBRFosT0FBTyxRQUFQLEVBQWlCLFlBQWpCLEM7QUFPQyw0Q0FBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZUFMcEMsT0FLb0MsR0FMMUIsZ0JBSzBCO0FBQUEsZUFKcEMsZ0JBSW9DLEdBSmpCLGFBSWlCOztBQUNsQyxlQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxlQUFLLFlBQUwsR0FBb0IsWUFBcEI7O0FBRUEsZUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsZUFBSyxzQkFBTCxHQUE4QixFQUE5QjtBQUNEOzs2Q0FFRCxVLHlCQUFhO0FBQ1QsY0FBSSxLQUFLLHNCQUFMLEtBQWdDLEVBQXBDLEVBQXdDO0FBQ3RDLGdCQUFJLFVBQVUsK0RBQStELEtBQUssZ0JBQXBFLEdBQXVGLGVBQXJHOztBQUVBLGlCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEI7QUFDQSxpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixPQUE5Qjs7QUFFQSxpQkFBSyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsV0FQRCxNQVFLO0FBQ0gsZ0JBQUksS0FBSyxzQkFBTCxLQUFnQyxLQUFLLGdCQUF6QyxFQUEyRDtBQUN2RCxtQkFBSyxRQUFMLENBQWMsS0FBZDs7QUFFQSxrQkFBSSxXQUFVLDBCQUFkOztBQUVBLG1CQUFLLFFBQUwsQ0FBYyxhQUFkO0FBQ0EsbUJBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsUUFBekI7O0FBRUEsbUJBQUssZUFBTCxHQUF1QixLQUF2QjtBQUNILGFBVEQsTUFVSztBQUNELGtCQUFJLFlBQVUsa0JBQWtCLEtBQUssZ0JBQXZCLEdBQTBDLGVBQXhEOztBQUVBLG1CQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsU0FBeEI7QUFDQSxtQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixTQUE5Qjs7QUFFQSxtQkFBSyxlQUFMLEdBQXVCLElBQXZCO0FBQ0g7QUFDRjtBQUNKLFM7OzZDQUVELGdCLCtCQUFtQjtBQUNqQixlQUFLLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxlQUFLLHNCQUFMLEdBQThCLEVBQTlCOztBQUVBLGVBQUssUUFBTCxDQUFjLGFBQWQ7QUFDRCxTOzs2Q0FFRCxXLDBCQUFjO0FBQ1osY0FBSSxlQUFlLFFBQVEsbUNBQVIsQ0FBbkI7O0FBRUEsY0FBSSxZQUFKLEVBQWtCO0FBQ2hCLGlCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLEVBQTVCO0FBQ0Q7QUFDRixTOzs2Q0FFRCxRLHVCQUFXLENBQ1YsQyIsImZpbGUiOiJzZXR1cC1hZHZhbmNlZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
