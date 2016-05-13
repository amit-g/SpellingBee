'use strict';

System.register(['aurelia-framework', 'appStorage'], function (_export, _context) {
    var inject, AppStorage, _createClass, _dec, _class, AppState;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
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

            _export('AppState', AppState = (_dec = inject('loDash', AppStorage), _dec(_class = function () {
                function AppState(_, appStorage) {
                    _classCallCheck(this, AppState);

                    this._ = _;
                    this.appStorage = appStorage;

                    this.googleSheetUrl = this.appStorage.googleSheetUrl || '';
                    this.voiceName = this.appStorage.voiceName || 'native';
                    this.wordMasterList = this.appStorage.wordMasterList || [];
                    this.leaderBoard = this.appStorage.leaderBoard || [];
                }

                AppState.prototype.appendWords = function appendWords(words) {
                    console.log("words=> " + words.length);

                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);
                    this.appStorage.wordMasterList = this._.union(this.appStorage.wordMasterList, words);
                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);

                    console.log(localStorage);
                };

                AppState.prototype.reset = function reset() {
                    this.appStorage.clear();

                    this.googleSheetUrl = '';
                    this.voiceName = 'native';
                    this.wordMasterList = [];
                    this.leaderBoard = {};
                };

                _createClass(AppState, [{
                    key: 'googleSheetUrl',
                    get: function get() {
                        return this.appStorage.googleSheetUrl || '';
                    },
                    set: function set(value) {
                        this.appStorage.googleSheetUrl = value;
                    }
                }, {
                    key: 'voiceName',
                    get: function get() {
                        return this.appStorage.voiceName || 'native';
                    },
                    set: function set(value) {
                        this.appStorage.voiceName = value;
                    }
                }, {
                    key: 'wordMasterList',
                    get: function get() {
                        return this.appStorage.wordMasterList || [];
                    },
                    set: function set(value) {
                        this.appStorage.wordMasterList = value;
                    }
                }, {
                    key: 'leaderBoard',
                    get: function get() {
                        return this.appStorage.leaderBoard || {};
                    },
                    set: function set(value) {
                        this.appStorage.leaderBoard = value;
                    }
                }]);

                return AppState;
            }()) || _class));

            _export('AppState', AppState);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLGVBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdLLFEsV0FEWixPQUFPLFFBQVAsRUFBaUIsVUFBakIsQztBQUVHLGtDQUFhLENBQWIsRUFBZ0IsVUFBaEIsRUFBNEI7QUFBQTs7QUFDeEIseUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLFVBQWxCOztBQUVBLHlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLENBQWdCLGNBQWhCLElBQWtDLEVBQXhEO0FBQ0EseUJBQUssU0FBTCxHQUFpQixLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsSUFBNkIsUUFBOUM7QUFDQSx5QkFBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxDQUFnQixjQUFoQixJQUFrQyxFQUF4RDtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsS0FBSyxVQUFMLENBQWdCLFdBQWhCLElBQStCLEVBQWxEO0FBQ0g7O21DQWtDRCxXLHdCQUFZLEssRUFBTztBQUNmLDRCQUFRLEdBQVIsQ0FBWSxhQUFhLE1BQU0sTUFBL0I7O0FBRUEsNEJBQVEsR0FBUixDQUFZLGlDQUFpQyxLQUFLLGNBQUwsQ0FBb0IsTUFBakU7QUFDQSx5QkFBSyxVQUFMLENBQWdCLGNBQWhCLEdBQWlDLEtBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBYSxLQUFLLFVBQUwsQ0FBZ0IsY0FBN0IsRUFBNkMsS0FBN0MsQ0FBakM7QUFDQSw0QkFBUSxHQUFSLENBQVksaUNBQWlDLEtBQUssY0FBTCxDQUFvQixNQUFqRTs7QUFFQSw0QkFBUSxHQUFSLENBQVksWUFBWjtBQUNILGlCOzttQ0FhRCxLLG9CQUFRO0FBQ0oseUJBQUssVUFBTCxDQUFnQixLQUFoQjs7QUFFQSx5QkFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EseUJBQUssU0FBTCxHQUFpQixRQUFqQjtBQUNBLHlCQUFLLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0gsaUI7Ozs7d0NBNURvQjtBQUNqQiwrQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsSUFBa0MsRUFBekM7QUFDSCxxQjtzQ0FFa0IsSyxFQUFPO0FBQ3RCLDZCQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsR0FBaUMsS0FBakM7QUFDSDs7O3dDQUVlO0FBQ1osK0JBQU8sS0FBSyxVQUFMLENBQWdCLFNBQWhCLElBQTZCLFFBQXBDO0FBQ0gscUI7c0NBRWEsSyxFQUFPO0FBQ2pCLDZCQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsR0FBNEIsS0FBNUI7QUFDSDs7O3dDQUVvQjtBQUNqQiwrQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsSUFBa0MsRUFBekM7QUFDSCxxQjtzQ0FFa0IsSyxFQUFPO0FBQ3RCLDZCQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsR0FBaUMsS0FBakM7QUFDSDs7O3dDQUVpQjtBQUNkLCtCQUFPLEtBQUssVUFBTCxDQUFnQixXQUFoQixJQUErQixFQUF0QztBQUNILHFCO3NDQUVlLEssRUFBTztBQUNuQiw2QkFBSyxVQUFMLENBQWdCLFdBQWhCLEdBQThCLEtBQTlCO0FBQ0giLCJmaWxlIjoiYXBwU3RhdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
