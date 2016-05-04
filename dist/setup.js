'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'appState', 'wordListLoader'], function (_export, _context) {
  var inject, HttpClient, AppState, WordListLoader, _createClass, _dec, _class, Setup;

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

      _export('Setup', Setup = (_dec = inject(AppState, WordListLoader, HttpClient), _dec(_class = function () {
        _createClass(Setup, null, [{
          key: 'storageKeys',
          get: function get() {
            return {
              googleSheetUrl: "GoogleSheetUrl"
            };
          }
        }]);

        function Setup(appState, wordListLoader, http) {
          _classCallCheck(this, Setup);

          this.heading = 'Setup';

          this.http = http;
          this.appState = appState;
          this.wordListLoader = wordListLoader;

          this.googleSheetUrl = Setup.getGoogleSheetUrlFromStorage();
          this.gistUrl = "";

          this.isSuccess = false;
          this.isError = false;

          this.message = "";
          this.errorMessage = "";
        }

        Setup.prototype.submit = function submit() {
          return false;
        };

        Setup.getGoogleSheetUrlFromStorage = function getGoogleSheetUrlFromStorage() {
          return window.localStorage.getItem(Setup.storageKeys.googleSheetUrl);
        };

        Setup.saveGoogleSheetUrlToStorage = function saveGoogleSheetUrlToStorage(googleSheetUrl) {
          return window.localStorage.setItem(Setup.storageKeys.googleSheetUrl, googleSheetUrl);
        };

        Setup.prototype.loadWordsFromGoogleSheet = function loadWordsFromGoogleSheet() {
          var _this = this;

          this.resetMessages();

          Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);

          this.wordListLoader.loadFromGoogleSheet(this.googleSheetUrl).then(function (promiseData) {
            console.log(promiseData);
            _this.setMessage(_this.appState.wordMasterList.length + ' words loaded.');
          }).catch(function (promiseData) {
            console.log(promiseData);
            _this.setErrorMessage(promiseData.errorMessage);
          });
        };

        Setup.prototype.loadWordsFromGoogleSheetOld = function loadWordsFromGoogleSheetOld() {
          var _this2 = this;

          console.log("loadWordsFromGoogleSheet");

          this.resetMessages();

          if (this.googleSheetUrl.length == 0) {
            this.setErrorMessage('Please enter a valid url for Google Sheet');

            return;
          }

          Setup.saveGoogleSheetUrlToStorage(this.googleSheetUrl);

          var publishedUrl = this.googleSheetUrl;
          console.log(publishedUrl);
          var publishedUrlPrefix = "https://docs.google.com/spreadsheets/d/";
          var publishedUrlPattern = "(https://docs.google.com/spreadsheets/d/)([^/]+)(/.+)";
          var publishedUrlRegExp = new RegExp(publishedUrlPattern, "i");
          var key = publishedUrl.replace(publishedUrlRegExp, "$2");

          if (!key || key === publishedUrl) {
            console.log("Invalid Url");
            this.setErrorMessage('Invalid Url');

            return;
          }

          var feedUrlTemplate = "https://spreadsheets.google.com/feeds/cells/{key}/od6/public/basic?alt=json";
          var feedUrl = feedUrlTemplate.replace("{key}", key);

          this.http.jsonp(feedUrl, 'callback').then(function (httpResponse) {
            console.log(httpResponse);
            var words = $.map(httpResponse.response.feed.entry, function (ele, i) {
              return ele.content["$t"];
            });

            console.log(words);
            console.log(_this2.appState.wordMasterList);

            _this2.appState.wordMasterList.length = 0;
            Array.prototype.push.apply(_this2.appState.wordMasterList, words);

            console.log(words);
            console.log(_this2.appState.wordMasterList);

            _this2.setMessage(_this2.appState.wordMasterList.length + ' words loaded.');

            return words;
          }).catch(function (httpResponse) {
            console.log(httpResponse);
            _this2.setErrorMessage('Could not get the word from Google Sheet. Please check the Url and permissions. The sheet has to be published (not shared).');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxZLHFCQUFBLE07O0FBR0EsZ0Isc0JBQUEsVTs7QUFHQSxjLGFBQUEsUTs7QUFDQSxvQixtQkFBQSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0ssSyxXQURaLE9BQU8sUUFBUCxFQUFpQixjQUFqQixFQUFpQyxVQUFqQyxDOzs7OEJBSTBCO0FBQ3JCLG1CQUFPO0FBQ0wsOEJBQWdCO0FBRFgsYUFBUDtBQUdIOzs7QUFFRCx1QkFBWSxRQUFaLEVBQXNCLGNBQXRCLEVBQXNDLElBQXRDLEVBQTRDO0FBQUE7O0FBQUEsZUFSNUMsT0FRNEMsR0FSbEMsT0FRa0M7O0FBQzFDLGVBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxlQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxlQUFLLGNBQUwsR0FBc0IsY0FBdEI7O0FBRUEsZUFBSyxjQUFMLEdBQXNCLE1BQU0sNEJBQU4sRUFBdEI7QUFDQSxlQUFLLE9BQUwsR0FBZSxFQUFmOztBQUVBLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7O0FBRUEsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNEOzt3QkFjRCxNLHFCQUFTO0FBQ1AsaUJBQU8sS0FBUDtBQUNELFM7O2NBRU0sNEIsMkNBQThCO0FBQ2pDLGlCQUFPLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE0QixNQUFNLFdBQU4sQ0FBa0IsY0FBOUMsQ0FBUDtBQUNILFM7O2NBRU0sMkIsd0NBQTRCLGMsRUFBZTtBQUM5QyxpQkFBTyxPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsTUFBTSxXQUFOLENBQWtCLGNBQTlDLEVBQThELGNBQTlELENBQVA7QUFDSCxTOzt3QkFFRCx3Qix1Q0FBMkI7QUFBQTs7QUFDdkIsZUFBSyxhQUFMOztBQUVBLGdCQUFNLDJCQUFOLENBQWtDLEtBQUssY0FBdkM7O0FBRUEsZUFBSyxjQUFMLENBQW9CLG1CQUFwQixDQUF3QyxLQUFLLGNBQTdDLEVBQ0MsSUFERCxDQUNNLHVCQUFlO0FBQ2pCLG9CQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0Esa0JBQUssVUFBTCxDQUFnQixNQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLE1BQTdCLEdBQXNDLGdCQUF0RDtBQUNILFdBSkQsRUFLQyxLQUxELENBS08sdUJBQWU7QUFDbEIsb0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSxrQkFBSyxlQUFMLENBQXFCLFlBQVksWUFBakM7QUFDSCxXQVJEO0FBU0gsUzs7d0JBRUQsMkIsMENBQThCO0FBQUE7O0FBQzFCLGtCQUFRLEdBQVIsQ0FBWSwwQkFBWjs7QUFFQSxlQUFLLGFBQUw7O0FBRUEsY0FBSSxLQUFLLGNBQUwsQ0FBb0IsTUFBcEIsSUFBOEIsQ0FBbEMsRUFBcUM7QUFDakMsaUJBQUssZUFBTCxDQUFxQiwyQ0FBckI7O0FBRUE7QUFDSDs7QUFFRCxnQkFBTSwyQkFBTixDQUFrQyxLQUFLLGNBQXZDOztBQUVBLGNBQUksZUFBZSxLQUFLLGNBQXhCO0FBQ0Esa0JBQVEsR0FBUixDQUFZLFlBQVo7QUFDQSxjQUFJLHFCQUFxQix5Q0FBekI7QUFDQSxjQUFJLHNCQUFzQix1REFBMUI7QUFDQSxjQUFJLHFCQUFxQixJQUFJLE1BQUosQ0FBVyxtQkFBWCxFQUFnQyxHQUFoQyxDQUF6QjtBQUNBLGNBQUksTUFBTSxhQUFhLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLElBQXpDLENBQVY7O0FBRUEsY0FBSSxDQUFDLEdBQUQsSUFBUSxRQUFRLFlBQXBCLEVBQWlDO0FBQzdCLG9CQUFRLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsaUJBQUssZUFBTCxDQUFxQixhQUFyQjs7QUFFQTtBQUNIOztBQUVELGNBQUksa0JBQWtCLDZFQUF0QjtBQUNBLGNBQUksVUFBVSxnQkFBZ0IsT0FBaEIsQ0FBd0IsT0FBeEIsRUFBaUMsR0FBakMsQ0FBZDs7QUFFQSxlQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLFVBQXpCLEVBRUssSUFGTCxDQUVVLHdCQUFnQjtBQUNsQixvQkFBUSxHQUFSLENBQVksWUFBWjtBQUNBLGdCQUFJLFFBQVEsRUFBRSxHQUFGLENBQU0sYUFBYSxRQUFiLENBQXNCLElBQXRCLENBQTJCLEtBQWpDLEVBQXdDLFVBQVMsR0FBVCxFQUFjLENBQWQsRUFDcEQ7QUFDSSxxQkFBTyxJQUFJLE9BQUosQ0FBWSxJQUFaLENBQVA7QUFDSCxhQUhXLENBQVo7O0FBS0Esb0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxvQkFBUSxHQUFSLENBQVksT0FBSyxRQUFMLENBQWMsY0FBMUI7O0FBRUEsbUJBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsTUFBN0IsR0FBc0MsQ0FBdEM7QUFDQSxrQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLEtBQXJCLENBQTJCLE9BQUssUUFBTCxDQUFjLGNBQXpDLEVBQXlELEtBQXpEOztBQUVBLG9CQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0Esb0JBQVEsR0FBUixDQUFZLE9BQUssUUFBTCxDQUFjLGNBQTFCOztBQUVBLG1CQUFLLFVBQUwsQ0FBZ0IsT0FBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixNQUE3QixHQUFzQyxnQkFBdEQ7O0FBRUEsbUJBQU8sS0FBUDtBQUNILFdBckJMLEVBc0JLLEtBdEJMLENBc0JXLHdCQUFnQjtBQUNuQixvQkFBUSxHQUFSLENBQVksWUFBWjtBQUNBLG1CQUFLLGVBQUwsQ0FBcUIsNkhBQXJCO0FBQ0gsV0F6Qkw7QUEwQkgsUzs7d0JBRUQsaUIsZ0NBQW9CO0FBQ2hCLGtCQUFRLEdBQVIsQ0FBWSxtQkFBWjs7QUFFQSxlQUFLLGFBQUw7QUFDSCxTOzt3QkFFRCxhLDRCQUFlO0FBQ2IsZUFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLGVBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBLGVBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGVBQUssT0FBTCxHQUFlLEtBQWY7QUFDRCxTOzt3QkFFRCxVLHVCQUFXLEMsRUFBRTtBQUNYLGVBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxlQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxTOzt3QkFFRCxlLDRCQUFnQixDLEVBQUU7QUFDaEIsZUFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsZUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNELFM7O3dCQUVELFEsdUJBQVcsQ0FJVixDOzs7OzhCQTVIMkI7QUFDeEIsbUJBQU8sSUFBUDtBQUVIOzs7OEJBR29CO0FBQ2pCLG1CQUFPLElBQVA7QUFFSCIsImZpbGUiOiJzZXR1cC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
