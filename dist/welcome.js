'use strict';

System.register(['aurelia-framework', 'textToSpeech'], function (_export, _context) {
  var inject, TextToSpeech, _createClass, _dec, _class, Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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

      _export('Welcome', Welcome = (_dec = inject(TextToSpeech), _dec(_class = function () {
        function Welcome(textToSpeech) {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to Spelling Bee Practice...';

          this.textToSpeech = textToSpeech;
        }

        Welcome.prototype.activate = function activate() {
          if (this.isSupported) {
            this.textToSpeech.speak("Welcome to spelling bee practice.");
          }
        };

        _createClass(Welcome, [{
          key: 'isSupported',
          get: function get() {
            return this.textToSpeech.isSupported;
          }
        }]);

        return Welcome;
      }()) || _class));

      _export('Welcome', Welcome);

      _export('UpperValueConverter', UpperValueConverter = function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        UpperValueConverter.prototype.toView = function toView(value) {
          return value && value.toUpperCase();
        };

        return UpperValueConverter;
      }());

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxrQixpQkFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBR0ssTyxXQURaLE9BQU8sWUFBUCxDO0FBSUMseUJBQVksWUFBWixFQUEwQjtBQUFBOztBQUFBLGVBRjFCLE9BRTBCLEdBRmhCLHFDQUVnQjs7QUFDeEIsZUFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0Q7OzBCQU1ELFEsdUJBQVc7QUFDVCxjQUFJLEtBQUssV0FBVCxFQUFxQjtBQUNqQixpQkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLG1DQUF4QjtBQUNIO0FBQ0YsUzs7Ozs4QkFSaUI7QUFDaEIsbUJBQU8sS0FBSyxZQUFMLENBQWtCLFdBQXpCO0FBQ0Q7Ozs7Ozs7O3FDQVNVLG1COzs7OztzQ0FDWCxNLG1CQUFPLEssRUFBTztBQUNaLGlCQUFPLFNBQVMsTUFBTSxXQUFOLEVBQWhCO0FBQ0QsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
