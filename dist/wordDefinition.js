"use strict";

System.register([], function (_export, _context) {
  var _createClass, WordDefinition;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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

      _export("WordDefinition", WordDefinition = function () {
        function WordDefinition(definition) {
          _classCallCheck(this, WordDefinition);

          this.text = definition.text || "";
          this.attributionText = definition.attributionText || "";
          this.partOfSpeech = definition.partOfSpeech || "";
        }

        _createClass(WordDefinition, [{
          key: "displayText",
          get: function get() {
            return this.partOfSpeech ? this.partOfSpeech + ": " + this.text : this.text;
          }
        }]);

        return WordDefinition;
      }());

      _export("WordDefinition", WordDefinition);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmREZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUFhLGM7QUFDWCxnQ0FBWSxVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLGVBQUssSUFBTCxHQUFZLFdBQVcsSUFBWCxJQUFtQixFQUEvQjtBQUNBLGVBQUssZUFBTCxHQUF1QixXQUFXLGVBQVgsSUFBOEIsRUFBckQ7QUFDQSxlQUFLLFlBQUwsR0FBb0IsV0FBVyxZQUFYLElBQTJCLEVBQS9DO0FBQ0Q7Ozs7OEJBRWlCO0FBQ2hCLG1CQUFPLEtBQUssWUFBTCxHQUFvQixLQUFLLFlBQUwsR0FBb0IsSUFBcEIsR0FBMkIsS0FBSyxJQUFwRCxHQUEyRCxLQUFLLElBQXZFO0FBQ0QiLCJmaWxlIjoid29yZERlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
