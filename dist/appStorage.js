'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    var inject, _createClass, _dec, _class, AppStorage;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
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

            _export('AppStorage', AppStorage = (_dec = inject('localStorage'), _dec(_class = function () {
                function AppStorage(localStorage) {
                    _classCallCheck(this, AppStorage);

                    this.localStorage = localStorage;

                    console.log(this.localStorage);
                }

                AppStorage.prototype.getObject = function getObject(key, defaultValue) {
                    var str = this.localStorage.getItem(key);

                    try {
                        var obj = JSON.parse(str);
                        return obj;
                    } catch (e) {
                        return defaultValue || {};
                    }
                };

                AppStorage.prototype.setObject = function setObject(key, obj) {
                    var str = JSON.stringify(obj);

                    this.localStorage.setItem(key, str);
                };

                _createClass(AppStorage, [{
                    key: 'voiceName',
                    get: function get() {
                        return this.getObject(AppStorage.storageKeys.voiceName, "");
                    },
                    set: function set(value) {
                        return this.setObject(AppStorage.storageKeys.voiceName, value);
                    }
                }, {
                    key: 'googleSheetUrl',
                    get: function get() {
                        return this.getObject(AppStorage.storageKeys.googleSheetUrl, "");
                    },
                    set: function set(value) {
                        return this.setObject(AppStorage.storageKeys.googleSheetUrl, value);
                    }
                }, {
                    key: 'wordMasterList',
                    get: function get() {
                        return this.getObject(AppStorage.storageKeys.wordMasterList, []);
                    },
                    set: function set(value) {
                        return this.setObject(AppStorage.storageKeys.wordMasterList, value);
                    }
                }, {
                    key: 'leaderBoard',
                    get: function get() {
                        return this.getObject(AppStorage.storageKeys.leaderBoard, []);
                    },
                    set: function set(value) {
                        return this.setObject(AppStorage.storageKeys.leaderBoard, value);
                    }
                }], [{
                    key: 'storageKeys',
                    get: function get() {
                        return {
                            voiceName: "VoiceName",
                            googleSheetUrl: "GoogleSheetUrl",
                            wordMasterList: "WordMasterList",
                            leaderBoard: "LeaderBoard"
                        };
                    }
                }]);

                return AppStorage;
            }()) || _class));

            _export('AppStorage', AppStorage);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFN0b3JhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHSyxVLFdBRFosT0FBTyxjQUFQLEM7QUFFRyxvQ0FBWSxZQUFaLEVBQTBCO0FBQUE7O0FBQ3RCLHlCQUFLLFlBQUwsR0FBb0IsWUFBcEI7O0FBRUEsNEJBQVEsR0FBUixDQUFZLEtBQUssWUFBakI7QUFDSDs7cUNBMkNELFMsc0JBQVUsRyxFQUFLLFksRUFBYztBQUN6Qix3QkFBSSxNQUFNLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixHQUExQixDQUFWOztBQUVBLHdCQUFJO0FBQ0EsNEJBQUksTUFBTSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQVY7QUFDQSwrQkFBTyxHQUFQO0FBQ0gscUJBSEQsQ0FJQSxPQUFNLENBQU4sRUFBUztBQUNMLCtCQUFPLGdCQUFnQixFQUF2QjtBQUNIO0FBQ0osaUI7O3FDQUVELFMsc0JBQVUsRyxFQUFLLEcsRUFBSztBQUNoQix3QkFBSSxNQUFNLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBVjs7QUFFQSx5QkFBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLEdBQTFCLEVBQStCLEdBQS9CO0FBQ0gsaUI7Ozs7d0NBaERlO0FBQ1osK0JBQU8sS0FBSyxTQUFMLENBQWUsV0FBVyxXQUFYLENBQXVCLFNBQXRDLEVBQWlELEVBQWpELENBQVA7QUFDSCxxQjtzQ0FFYSxLLEVBQU87QUFDakIsK0JBQU8sS0FBSyxTQUFMLENBQWUsV0FBVyxXQUFYLENBQXVCLFNBQXRDLEVBQWlELEtBQWpELENBQVA7QUFDSDs7O3dDQUVvQjtBQUNqQiwrQkFBTyxLQUFLLFNBQUwsQ0FBZSxXQUFXLFdBQVgsQ0FBdUIsY0FBdEMsRUFBc0QsRUFBdEQsQ0FBUDtBQUNILHFCO3NDQUVrQixLLEVBQU87QUFDdEIsK0JBQU8sS0FBSyxTQUFMLENBQWUsV0FBVyxXQUFYLENBQXVCLGNBQXRDLEVBQXNELEtBQXRELENBQVA7QUFDSDs7O3dDQUVvQjtBQUNqQiwrQkFBTyxLQUFLLFNBQUwsQ0FBZSxXQUFXLFdBQVgsQ0FBdUIsY0FBdEMsRUFBc0QsRUFBdEQsQ0FBUDtBQUNILHFCO3NDQUVrQixLLEVBQU87QUFDdEIsK0JBQU8sS0FBSyxTQUFMLENBQWUsV0FBVyxXQUFYLENBQXVCLGNBQXRDLEVBQXNELEtBQXRELENBQVA7QUFDSDs7O3dDQUVpQjtBQUNkLCtCQUFPLEtBQUssU0FBTCxDQUFlLFdBQVcsV0FBWCxDQUF1QixXQUF0QyxFQUFtRCxFQUFuRCxDQUFQO0FBQ0gscUI7c0NBRWUsSyxFQUFPO0FBQ25CLCtCQUFPLEtBQUssU0FBTCxDQUFlLFdBQVcsV0FBWCxDQUF1QixXQUF0QyxFQUFtRCxLQUFuRCxDQUFQO0FBQ0g7Ozt3Q0F2Q3dCO0FBQ3JCLCtCQUFPO0FBQ0gsdUNBQVcsV0FEUjtBQUVILDRDQUFnQixnQkFGYjtBQUdILDRDQUFnQixnQkFIYjtBQUlILHlDQUFhO0FBSlYseUJBQVA7QUFNSCIsImZpbGUiOiJhcHBTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
