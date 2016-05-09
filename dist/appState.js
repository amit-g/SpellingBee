'use strict';

System.register(['aurelia-framework', 'appStorage'], function (_export, _context) {
    var inject, AppStorage, _dec, _class, AppState;

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
            _export('AppState', AppState = (_dec = inject('loDash', AppStorage), _dec(_class = function () {
                function AppState(_, appStorage) {
                    _classCallCheck(this, AppState);

                    this._ = _;
                    this.appStorage = appStorage;

                    this.wordMasterList = this.appStorage.wordMasterList || [];
                    this.leaderBoard = this.appStorage.leaderBoard || [];

                    console.log(localStorage);
                    console.log(this.appStorage.wordMasterList);
                }

                AppState.prototype.updateWordList = function updateWordList(words) {
                    console.log("words=> " + words.length);

                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);
                    this.wordMasterList = this._.union(this.wordMasterList, words);
                    console.log("this.wordMasterList.length: " + this.wordMasterList.length);

                    this.appStorage.wordMasterList = this.wordMasterList;
                    console.log(localStorage);
                };

                return AppState;
            }()) || _class));

            _export('AppState', AppState);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLGVBQUEsVTs7O2dDQUdLLFEsV0FEWixPQUFPLFFBQVAsRUFBaUIsVUFBakIsQztBQUVHLGtDQUFhLENBQWIsRUFBZ0IsVUFBaEIsRUFBNEI7QUFBQTs7QUFDeEIseUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLFVBQWxCOztBQUVBLHlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLENBQWdCLGNBQWhCLElBQWtDLEVBQXhEO0FBQ0EseUJBQUssV0FBTCxHQUFtQixLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsSUFBK0IsRUFBbEQ7O0FBRUEsNEJBQVEsR0FBUixDQUFZLFlBQVo7QUFDQSw0QkFBUSxHQUFSLENBQVksS0FBSyxVQUFMLENBQWdCLGNBQTVCO0FBQ0g7O21DQUVELGMsMkJBQWUsSyxFQUFPO0FBQ2xCLDRCQUFRLEdBQVIsQ0FBWSxhQUFhLE1BQU0sTUFBL0I7O0FBRUEsNEJBQVEsR0FBUixDQUFZLGlDQUFpQyxLQUFLLGNBQUwsQ0FBb0IsTUFBakU7QUFDQSx5QkFBSyxjQUFMLEdBQXNCLEtBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBYSxLQUFLLGNBQWxCLEVBQWtDLEtBQWxDLENBQXRCO0FBQ0EsNEJBQVEsR0FBUixDQUFZLGlDQUFpQyxLQUFLLGNBQUwsQ0FBb0IsTUFBakU7O0FBRUEseUJBQUssVUFBTCxDQUFnQixjQUFoQixHQUFpQyxLQUFLLGNBQXRDO0FBQ0EsNEJBQVEsR0FBUixDQUFZLFlBQVo7QUFDSCxpQiIsImZpbGUiOiJhcHBTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
