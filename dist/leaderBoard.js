'use strict';

System.register(['aurelia-framework', 'appState'], function (_export, _context) {
    var inject, AppState, _createClass, _dec, _class, LeaderBoard;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_appState) {
            AppState = _appState.AppState;
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

            _export('LeaderBoard', LeaderBoard = (_dec = inject(AppState), _dec(_class = function () {
                function LeaderBoard(appState) {
                    _classCallCheck(this, LeaderBoard);

                    this._lastWord = "";

                    this.appState = appState;

                    this._leaderBoard = this.appState.leaderBoard && this.appState.leaderBoard.totalCount || LeaderBoard.default;
                }

                LeaderBoard.prototype.update = function update(correct, word) {
                    console.log("correct: " + correct + ", word: " + word);

                    if (word === this._lastWord) {
                        return;
                    }

                    this._lastWord = word;

                    if (correct) {
                        this._leaderBoard.correctCount++;
                    } else {
                        this._leaderBoard.incorrectCount++;
                    }

                    this._leaderBoard.totalCount++;

                    this.appState.leaderBoard = this._leaderBoard;
                };

                _createClass(LeaderBoard, [{
                    key: 'correctCount',
                    get: function get() {
                        return this._leaderBoard.correctCount || 0;
                    }
                }, {
                    key: 'incorrectCount',
                    get: function get() {
                        return this._leaderBoard.incorrectCount || 0;
                    }
                }, {
                    key: 'totalCount',
                    get: function get() {
                        return this._leaderBoard.totalCount || 0;
                    }
                }], [{
                    key: 'default',
                    get: function get() {
                        return {
                            correctCount: 0,
                            incorrectCount: 0,
                            totalCount: 0
                        };
                    }
                }]);

                return LeaderBoard;
            }()) || _class));

            _export('LeaderBoard', LeaderBoard);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlckJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLG9CLGFBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUdLLFcsV0FEWixPQUFPLFFBQVAsQztBQUlHLHFDQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx5QkFGdEIsU0FFc0IsR0FGVixFQUVVOztBQUNsQix5QkFBSyxRQUFMLEdBQWdCLFFBQWhCOztBQUVBLHlCQUFLLFlBQUwsR0FBcUIsS0FBSyxRQUFMLENBQWMsV0FBZCxJQUE2QixLQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLFVBQXhELElBQXVFLFlBQVksT0FBdkc7QUFDSDs7c0NBc0JELE0sbUJBQU8sTyxFQUFTLEksRUFBTTtBQUNsQiw0QkFBUSxHQUFSLENBQVksY0FBYyxPQUFkLEdBQXdCLFVBQXhCLEdBQXFDLElBQWpEOztBQUVBLHdCQUFJLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUN6QjtBQUNIOztBQUVELHlCQUFLLFNBQUwsR0FBaUIsSUFBakI7O0FBRUEsd0JBQUksT0FBSixFQUFhO0FBQ1QsNkJBQUssWUFBTCxDQUFrQixZQUFsQjtBQUNILHFCQUZELE1BR0s7QUFDRCw2QkFBSyxZQUFMLENBQWtCLGNBQWxCO0FBQ0g7O0FBRUQseUJBQUssWUFBTCxDQUFrQixVQUFsQjs7QUFFQSx5QkFBSyxRQUFMLENBQWMsV0FBZCxHQUE0QixLQUFLLFlBQWpDO0FBQ0gsaUI7Ozs7d0NBL0JrQjtBQUNmLCtCQUFPLEtBQUssWUFBTCxDQUFrQixZQUFsQixJQUFrQyxDQUF6QztBQUNIOzs7d0NBRW9CO0FBQ2pCLCtCQUFPLEtBQUssWUFBTCxDQUFrQixjQUFsQixJQUFvQyxDQUEzQztBQUNIOzs7d0NBRWdCO0FBQ2IsK0JBQU8sS0FBSyxZQUFMLENBQWtCLFVBQWxCLElBQWdDLENBQXZDO0FBQ0g7Ozt3Q0FsQm9CO0FBQ2pCLCtCQUFPO0FBQ0gsMENBQWMsQ0FEWDtBQUVILDRDQUFnQixDQUZiO0FBR0gsd0NBQVk7QUFIVCx5QkFBUDtBQUtIIiwiZmlsZSI6ImxlYWRlckJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
