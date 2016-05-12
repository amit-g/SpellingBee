'use strict';

System.register(['jquery', 'bootstrap', 'lodash'], function (_export, _context) {

  function configureContainer(container) {
    container.registerInstance('window', window);
    container.registerInstance('document', document);
    container.registerInstance('localStorage', window.localStorage);
    container.registerInstance('jQuery', $);
    container.registerInstance('loDash', _);
  }
  return {
    setters: [function (_jquery) {}, function (_bootstrap) {}, function (_lodash) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        configureContainer(aurelia.container);

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }
      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQXFCQSxXQUFTLGtCQUFULENBQTRCLFNBQTVCLEVBQXVDO0FBQ3JDLGNBQVUsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsTUFBckM7QUFDQSxjQUFVLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFFBQXZDO0FBQ0EsY0FBVSxnQkFBVixDQUEyQixjQUEzQixFQUEyQyxPQUFPLFlBQWxEO0FBQ0EsY0FBVSxnQkFBVixDQUEyQixRQUEzQixFQUFxQyxDQUFyQztBQUNBLGNBQVUsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsQ0FBckM7QUFDRDs7OztBQXZCTSxlQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDakMsZ0JBQVEsR0FBUixDQUNHLHFCQURILEdBRUcsa0JBRkg7O0FBSUEsMkJBQW1CLFFBQVEsU0FBM0I7O0FBU0EsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtBQUFBLGlCQUFNLFFBQVEsT0FBUixFQUFOO0FBQUEsU0FBckI7QUFDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
