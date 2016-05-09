'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'appState', 'wordListLoader', 'appStorage'], function (_export, _context) {
  var inject, HttpClient, AppState, WordListLoader, AppStorage, _createClass, _dec, _class, Setup;

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

      _export('Setup', Setup = (_dec = inject(AppStorage, AppState, WordListLoader, HttpClient), _dec(_class = function () {
        function Setup(appStorage, appState, wordListLoader, http) {
          _classCallCheck(this, Setup);

          this.heading = 'Setup';

          this.http = http;
          this.appStorage = appStorage;
          this.appState = appState;
          this.wordListLoader = wordListLoader;

          this.googleSheetUrl = this.appStorage.googleSheetUrl;
          this.gistUrl = "";

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        Setup.prototype.submit = function submit() {
          return false;
        };

        Setup.prototype.loadWordsFromGoogleSheet = function loadWordsFromGoogleSheet() {
          var _this = this;

          this.resetMessages();

          this.appStorage.googleSheetUrl = this.googleSheetUrl;

          this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl).then(function (promiseData) {
            console.log(promiseData);
            _this.setMessage(_this.appState.wordMasterList.length + ' words loaded.');
          }).catch(function (promiseData) {
            console.log(promiseData);
            _this.setErrorMessage(promiseData.errorMessage);
          });
        };

        Setup.prototype.loadWordsFromGist = function loadWordsFromGist() {
          console.log("loadWordsFromGist");

          this.resetMessages();
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

        _createClass(Setup, [{
          key: 'isGoogleSheetUrlValid',
          get: function get() {
            return true;
          }
        }, {
          key: 'isGistUrlValid',
          get: function get() {
            return true;
          }
        }]);

        return Setup;
      }()) || _class));

      _export('Setup', Setup);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBR0EsZ0Isc0JBQUEsVTs7QUFHQSxjLGFBQUEsUTs7QUFDQSxvQixtQkFBQSxjOztBQUNBLGdCLGVBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdLLEssV0FEWixPQUFPLFVBQVAsRUFBbUIsUUFBbkIsRUFBNkIsY0FBN0IsRUFBNkMsVUFBN0MsQztBQVVDLHVCQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0MsY0FBbEMsRUFBa0QsSUFBbEQsRUFBd0Q7QUFBQTs7QUFBQSxlQVJ4RCxPQVF3RCxHQVI5QyxPQVE4Qzs7QUFDdEQsZUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGVBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGVBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGVBQUssY0FBTCxHQUFzQixjQUF0Qjs7QUFHQSxlQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLENBQWdCLGNBQXRDO0FBQ0EsZUFBSyxPQUFMLEdBQWUsRUFBZjs7QUFFQSxlQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLLE9BQUwsR0FBZSxLQUFmOztBQUVBLGVBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxlQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDRDs7d0JBY0QsTSxxQkFBUztBQUNQLGlCQUFPLEtBQVA7QUFDRCxTOzt3QkFVRCx3Qix1Q0FBMkI7QUFBQTs7QUFDdkIsZUFBSyxhQUFMOztBQUdBLGVBQUssVUFBTCxDQUFnQixjQUFoQixHQUFpQyxLQUFLLGNBQXRDOztBQUVBLGVBQUssY0FBTCxDQUFvQixtQkFBcEIsQ0FBd0MsS0FBSyxjQUE3QyxFQUNDLElBREQsQ0FDTSx1QkFBZTtBQUNqQixvQkFBUSxHQUFSLENBQVksV0FBWjtBQUNBLGtCQUFLLFVBQUwsQ0FBZ0IsTUFBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixNQUE3QixHQUFzQyxnQkFBdEQ7QUFDSCxXQUpELEVBS0MsS0FMRCxDQUtPLHVCQUFlO0FBQ2xCLG9CQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0Esa0JBQUssZUFBTCxDQUFxQixZQUFZLFlBQWpDO0FBQ0gsV0FSRDtBQVNILFM7O3dCQUVELGlCLGdDQUFvQjtBQUNoQixrQkFBUSxHQUFSLENBQVksbUJBQVo7O0FBRUEsZUFBSyxhQUFMO0FBQ0gsUzs7d0JBRUQsYSw0QkFBZTtBQUNiLGVBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxlQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxlQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLLE9BQUwsR0FBZSxLQUFmO0FBQ0QsUzs7d0JBRUQsVSx1QkFBVyxDLEVBQUU7QUFDWCxlQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsZUFBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0QsUzs7d0JBRUQsZSw0QkFBZ0IsQyxFQUFFO0FBQ2hCLGVBQUssWUFBTCxHQUFvQixDQUFwQjtBQUNBLGVBQUssT0FBTCxHQUFlLElBQWY7QUFDRCxTOzt3QkFFRCxRLHVCQUFXLENBSVYsQzs7Ozs4QkFuRTJCO0FBQ3hCLG1CQUFPLElBQVA7QUFFSDs7OzhCQUdvQjtBQUNqQixtQkFBTyxJQUFQO0FBRUgiLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
