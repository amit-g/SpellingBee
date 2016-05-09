'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'appState', 'wordListLoader', 'appStorage'], function (_export, _context) {
  var inject, HttpClient, AppState, WordListLoader, AppStorage, _dec, _class, Setup;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_appState) {
      AppState = _appState.AppState;
    }, function (_wordListLoader) {
      WordListLoader = _wordListLoader.WordListLoader;
    }, function (_appStorage) {
      AppStorage = _appStorage.AppStorage;
    }],
    execute: function () {
      _export('Setup', Setup = (_dec = inject(AppStorage, AppState, WordListLoader, HttpClient), _dec(_class = function () {
        function Setup(appStorage, appState, wordListLoader, http) {
          _classCallCheck(this, Setup);

          this.heading = 'Setup';

          this.http = http;
          this.appStorage = appStorage;
          this.appState = appState;
          this.wordListLoader = wordListLoader;

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        Setup.prototype.submit = function submit() {
          return false;
        };

        Setup.prototype.resetMessages = function resetMessages() {
          this.message = '';
          this.errorMessage = '';
          this.isSuccess = false;
          this.isError = false;
        };

        Setup.prototype.setMessage = function setMessage(m) {
          this.message = m;
          this.isSuccess = true;
        };

        Setup.prototype.setErrorMessage = function setErrorMessage(m) {
          this.errorMessage = m;
          this.isError = true;
        };

        Setup.prototype.activate = function activate() {};

        return Setup;
      }()) || _class));

      _export('Setup', Setup);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBQ0EsZ0Isc0JBQUEsVTs7QUFFQSxjLGFBQUEsUTs7QUFDQSxvQixtQkFBQSxjOztBQUNBLGdCLGVBQUEsVTs7O3VCQUdLLEssV0FEWixPQUFPLFVBQVAsRUFBbUIsUUFBbkIsRUFBNkIsY0FBN0IsRUFBNkMsVUFBN0MsQztBQUlDLHVCQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0MsY0FBbEMsRUFBa0QsSUFBbEQsRUFBd0Q7QUFBQTs7QUFBQSxlQUZ4RCxPQUV3RCxHQUY5QyxPQUU4Qzs7QUFDdEQsZUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGVBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGVBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGVBQUssY0FBTCxHQUFzQixjQUF0Qjs7QUFFQSxlQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLLE9BQUwsR0FBZSxLQUFmOztBQUVBLGVBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxlQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDRDs7d0JBRUQsTSxxQkFBUztBQUNQLGlCQUFPLEtBQVA7QUFDRCxTOzt3QkFFRCxhLDRCQUFlO0FBQ2IsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7QUFDRCxTOzt3QkFFRCxVLHVCQUFXLEMsRUFBRTtBQUNYLGVBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxlQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxTOzt3QkFFRCxlLDRCQUFnQixDLEVBQUU7QUFDaEIsZUFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsZUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNELFM7O3dCQUVELFEsdUJBQVcsQ0FDVixDIiwiZmlsZSI6InNldHVwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
