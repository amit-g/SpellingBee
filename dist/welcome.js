'use strict';

System.register([], function (_export, _context) {
  var Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Welcome', Welcome = function Welcome() {
        _classCallCheck(this, Welcome);

        this.heading = 'Welcome to Spelling Bee Practice...';
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.previousValue = this.fullName;
      });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7eUJBRWEsTzs7O2FBQ1gsTyxHQUFVLHFDO2FBQ1YsUyxHQUFZLE07YUFDWixRLEdBQVcsSzthQUNYLGEsR0FBZ0IsS0FBSyxROzs7OztxQ0FHVixtQjs7Ozs7c0NBQ1gsTSxtQkFBTyxLLEVBQU87QUFDWixpQkFBTyxTQUFTLE1BQU0sV0FBTixFQUFoQjtBQUNELFMiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
