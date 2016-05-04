'use strict';

System.register([], function (_export, _context) {
  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Spelling Bee';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: ['practice'], name: 'practice', moduleId: 'practice', nav: true, title: 'Practice' }, { route: 'setup', name: 'setup', moduleId: 'setup', nav: true, title: 'Setup' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxQkFBYSxHOzs7OztzQkFDWCxlLDRCQUFnQixNLEVBQVEsTSxFQUFRO0FBQzlCLGlCQUFPLEtBQVAsR0FBZSxjQUFmO0FBQ0EsaUJBQU8sR0FBUCxDQUFXLENBQ1QsRUFBRSxPQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FBVCxFQUEwQixNQUFNLFNBQWhDLEVBQWdELFVBQVUsU0FBMUQsRUFBMEUsS0FBSyxJQUEvRSxFQUFxRixPQUFPLFNBQTVGLEVBRFMsRUFFVCxFQUFFLE9BQU8sQ0FBQyxVQUFELENBQVQsRUFBdUIsTUFBTSxVQUE3QixFQUE4QyxVQUFVLFVBQXhELEVBQXlFLEtBQUssSUFBOUUsRUFBb0YsT0FBTyxVQUEzRixFQUZTLEVBTVQsRUFBRSxPQUFPLE9BQVQsRUFBMEIsTUFBTSxPQUFoQyxFQUFnRCxVQUFVLE9BQTFELEVBQTBFLEtBQUssSUFBL0UsRUFBcUYsT0FBTyxPQUE1RixFQU5TLENBQVg7O0FBU0EsZUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNELFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
