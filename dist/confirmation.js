'use strict';

System.register(['aurelia-framework', 'textToSpeech'], function (_export, _context) {
  var inject, bindable, bindingMode, TextToSpeech, _dec, _class, _desc, _value, _class2, _descriptor, ConfirmationCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_textToSpeech) {
      TextToSpeech = _textToSpeech.TextToSpeech;
    }],
    execute: function () {
      _export('ConfirmationCustomElement', ConfirmationCustomElement = (_dec = inject(TextToSpeech), _dec(_class = (_class2 = function () {
        function ConfirmationCustomElement(textToSpeech) {
          _classCallCheck(this, ConfirmationCustomElement);

          _initDefineProp(this, 'confirmationText', _descriptor, this);

          this.textToSpeech = textToSpeech;

          this.showConfirmText = false;
          this.enteredCofirmationText = "";
        }

        ConfirmationCustomElement.prototype.resetSetup = function resetSetup() {
          if (this.enteredCofirmationText === "") {
            var message = "Are you sure? This would reset all progress. Please type '" + this.confirmationText + "' to confirm.";

            this.textToSpeech.speak(message);
            this.messages.setErrorMessage(message);

            this.showConfirmText = true;
          } else {
            if (this.enteredCofirmationText === this.confirmationText) {
              console.log("****** reset done ********");
            } else {
              var _message = "Please type '" + this.confirmationText + "' to confirm.";

              this.textToSpeech.speak(_message);
              this.messages.setErrorMessage(_message);

              this.showConfirmText = true;
            }
          }
        };

        ConfirmationCustomElement.prototype.cancelResetSetup = function cancelResetSetup() {
          this.showConfirmText = false;
          this.enteredCofirmationText = "";

          this.messages.resetMessages();
        };

        ConfirmationCustomElement.prototype.attached = function attached() {};

        return ConfirmationCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'confirmationText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _export('ConfirmationCustomElement', ConfirmationCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTtBQUFRLGMscUJBQUEsUTtBQUFVLGlCLHFCQUFBLFc7O0FBQ2xCLGtCLGlCQUFBLFk7OzsyQ0FHSyx5QixXQURaLE9BQU8sWUFBUCxDO0FBS0MsMkNBQVksWUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4QixlQUFLLFlBQUwsR0FBb0IsWUFBcEI7O0FBRUEsZUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsZUFBSyxzQkFBTCxHQUE4QixFQUE5QjtBQUNEOzs0Q0FFRCxVLHlCQUFhO0FBQ1QsY0FBSSxLQUFLLHNCQUFMLEtBQWdDLEVBQXBDLEVBQXdDO0FBQ3RDLGdCQUFJLFVBQVUsK0RBQStELEtBQUssZ0JBQXBFLEdBQXVGLGVBQXJHOztBQUVBLGlCQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEI7QUFDQSxpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixPQUE5Qjs7QUFFQSxpQkFBSyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsV0FQRCxNQVFLO0FBQ0gsZ0JBQUksS0FBSyxzQkFBTCxLQUFnQyxLQUFLLGdCQUF6QyxFQUEyRDtBQUV2RCxzQkFBUSxHQUFSLENBQVksNEJBQVo7QUFDSCxhQUhELE1BSUs7QUFDRCxrQkFBSSxXQUFVLGtCQUFrQixLQUFLLGdCQUF2QixHQUEwQyxlQUF4RDs7QUFFQSxtQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLFFBQXhCO0FBQ0EsbUJBQUssUUFBTCxDQUFjLGVBQWQsQ0FBOEIsUUFBOUI7O0FBRUEsbUJBQUssZUFBTCxHQUF1QixJQUF2QjtBQUNIO0FBQ0Y7QUFDSixTOzs0Q0FFRCxnQiwrQkFBbUI7QUFDakIsZUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsZUFBSyxzQkFBTCxHQUE4QixFQUE5Qjs7QUFFQSxlQUFLLFFBQUwsQ0FBYyxhQUFkO0FBQ0QsUzs7NENBRUQsUSx1QkFBVyxDQUNWLEM7Ozs0RkExQ0EsUTs7O2lCQUE0QixFIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
