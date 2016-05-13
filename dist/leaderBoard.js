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

                    this._leaderBoard = this.appState.leaderBoard || LeaderBoard.default;

                    if (!this.appState.leaderBoard.totalCount) {
                        this._leaderBoard = LeaderBoard.default;
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlckJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLG9CLGFBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUdLLFcsV0FEWixPQUFPLFFBQVAsQztBQUlHLHFDQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx5QkFGdEIsU0FFc0IsR0FGVixFQUVVOztBQUNsQix5QkFBSyxRQUFMLEdBQWdCLFFBQWhCOztBQUVBLHlCQUFLLFlBQUwsR0FBb0IsS0FBSyxRQUFMLENBQWMsV0FBZCxJQUE2QixZQUFZLE9BQTdEOztBQUVBLHdCQUFJLENBQUMsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixVQUEvQixFQUEyQztBQUN2Qyw2QkFBSyxZQUFMLEdBQW9CLFlBQVksT0FBaEM7QUFDSDtBQUNKOztzQ0FzQkQsTSxtQkFBTyxPLEVBQVMsSSxFQUFNO0FBQ2xCLDRCQUFRLEdBQVIsQ0FBWSxjQUFjLE9BQWQsR0FBd0IsVUFBeEIsR0FBcUMsSUFBakQ7O0FBRUEsd0JBQUksU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCO0FBQ0g7O0FBRUQseUJBQUssU0FBTCxHQUFpQixJQUFqQjs7QUFFQSx3QkFBSSxPQUFKLEVBQWE7QUFDVCw2QkFBSyxZQUFMLENBQWtCLFlBQWxCO0FBQ0gscUJBRkQsTUFHSztBQUNELDZCQUFLLFlBQUwsQ0FBa0IsY0FBbEI7QUFDSDs7QUFFRCx5QkFBSyxZQUFMLENBQWtCLFVBQWxCOztBQUVBLHlCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLEtBQUssWUFBakM7QUFDSCxpQjs7Ozt3Q0EvQmtCO0FBQ2YsK0JBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLElBQWtDLENBQXpDO0FBQ0g7Ozt3Q0FFb0I7QUFDakIsK0JBQU8sS0FBSyxZQUFMLENBQWtCLGNBQWxCLElBQW9DLENBQTNDO0FBQ0g7Ozt3Q0FFZ0I7QUFDYiwrQkFBTyxLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsSUFBZ0MsQ0FBdkM7QUFDSDs7O3dDQWxCb0I7QUFDakIsK0JBQU87QUFDSCwwQ0FBYyxDQURYO0FBRUgsNENBQWdCLENBRmI7QUFHSCx3Q0FBWTtBQUhULHlCQUFQO0FBS0giLCJmaWxlIjoibGVhZGVyQm9hcmQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
