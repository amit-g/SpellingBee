"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
  var bindable, bindingMode, MessagesCustomElement;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
    }],
    execute: function () {
      _export("MessagesCustomElement", MessagesCustomElement = function () {
        function MessagesCustomElement() {
          _classCallCheck(this, MessagesCustomElement);

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        MessagesCustomElement.prototype.resetMessages = function resetMessages() {
          this.message = '';
          this.errorMessage = '';
          this.isSuccess = false;
          this.isError = false;
        };

        MessagesCustomElement.prototype.setMessage = function setMessage(m) {
          this.message = m;
          this.isSuccess = true;
        };

        MessagesCustomElement.prototype.setErrorMessage = function setErrorMessage(m) {
          this.errorMessage = m;
          this.isError = true;
        };

        MessagesCustomElement.prototype.attached = function attached() {
          this.resetMessages();
        };

        return MessagesCustomElement;
      }());

      _export("MessagesCustomElement", MessagesCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxjLHFCQUFBLFE7QUFBVSxpQixxQkFBQSxXOzs7dUNBRUwscUI7QUFDWCx5Q0FBYztBQUFBOztBQUNaLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7O0FBRUEsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNEOzt3Q0FFRCxhLDRCQUFnQjtBQUNkLGVBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxlQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxlQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLLE9BQUwsR0FBZSxLQUFmO0FBQ0QsUzs7d0NBRUQsVSx1QkFBVyxDLEVBQUc7QUFDWixlQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsZUFBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0QsUzs7d0NBRUQsZSw0QkFBZ0IsQyxFQUFHO0FBQ2pCLGVBQUssWUFBTCxHQUFvQixDQUFwQjtBQUNBLGVBQUssT0FBTCxHQUFlLElBQWY7QUFDRCxTOzt3Q0FFRCxRLHVCQUFXO0FBQ1AsZUFBSyxhQUFMO0FBQ0gsUyIsImZpbGUiOiJtZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
