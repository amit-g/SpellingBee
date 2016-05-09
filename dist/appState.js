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

                AppState.prototype.updateWordList = function updateWordList(words) {
                    console.log("words=> " + words.length);

                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);
                    this.wordMasterList = this._.union(this.wordMasterList, words);
                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);

                    this.appStorage.wordMasterList = this.wordMasterList;
                    console.log(localStorage);
                };

                _createClass(AppState, [{
                    key: 'voiceName',
                    get: function get() {
                        return this.appStorage.voiceName;
                    },
                    set: function set(value) {
                        this.appStorage.voiceName = value;
                    }
                }]);

                return AppState;
            }()) || _class));

            _export('AppState', AppState);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLGVBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdLLFEsV0FEWixPQUFPLFFBQVAsRUFBaUIsVUFBakIsQztBQUVHLGtDQUFhLENBQWIsRUFBZ0IsVUFBaEIsRUFBNEI7QUFBQTs7QUFDeEIseUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLFVBQWxCOztBQUVBLHlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLENBQWdCLGNBQWhCLElBQWtDLEVBQXhEO0FBQ0EseUJBQUssU0FBTCxHQUFpQixLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsSUFBNkIsUUFBOUM7QUFDQSx5QkFBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxDQUFnQixjQUFoQixJQUFrQyxFQUF4RDtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsS0FBSyxVQUFMLENBQWdCLFdBQWhCLElBQStCLEVBQWxEO0FBQ0g7O21DQVVELGMsMkJBQWUsSyxFQUFPO0FBQ2xCLDRCQUFRLEdBQVIsQ0FBWSxhQUFhLE1BQU0sTUFBL0I7O0FBRUEsNEJBQVEsR0FBUixDQUFZLGlDQUFpQyxLQUFLLGNBQUwsQ0FBb0IsTUFBakU7QUFDQSx5QkFBSyxjQUFMLEdBQXNCLEtBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBYSxLQUFLLGNBQWxCLEVBQWtDLEtBQWxDLENBQXRCO0FBQ0EsNEJBQVEsR0FBUixDQUFZLGlDQUFpQyxLQUFLLGNBQUwsQ0FBb0IsTUFBakU7O0FBRUEseUJBQUssVUFBTCxDQUFnQixjQUFoQixHQUFpQyxLQUFLLGNBQXRDO0FBQ0EsNEJBQVEsR0FBUixDQUFZLFlBQVo7QUFDSCxpQjs7Ozt3Q0FqQmU7QUFDWiwrQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsU0FBdkI7QUFDSCxxQjtzQ0FFYSxLLEVBQU87QUFDakIsNkJBQUssVUFBTCxDQUFnQixTQUFoQixHQUE0QixLQUE1QjtBQUNIIiwiZmlsZSI6ImFwcFN0YXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
