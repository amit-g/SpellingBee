"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
    var inject, LeaderBoard;

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
            _export("LeaderBoard", LeaderBoard = function () {
                function LeaderBoard() {
                    _classCallCheck(this, LeaderBoard);

                    this.correctCount = 0;
                    this.incorrectCount = 0;
                    this.totalCount = 0;
                }

                LeaderBoard.prototype.update = function update(correct) {
                    console.log("correct: " + correct);

                    if (correct) {
                        this.correctCount++;
                    } else {
                        this.incorrectCount++;
                    }

                    this.totalCount++;
                };

                return LeaderBoard;
            }());

            _export("LeaderBoard", LeaderBoard);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlckJvYXJkU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVEsa0IscUJBQUEsTTs7O21DQUVLLFc7QUFDVCx1Q0FBZTtBQUFBOztBQUNYLHlCQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSx5QkFBSyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EseUJBQUssVUFBTCxHQUFrQixDQUFsQjtBQUNIOztzQ0FFRCxNLG1CQUFPLE8sRUFBUztBQUNaLDRCQUFRLEdBQVIsQ0FBWSxjQUFjLE9BQTFCOztBQUVBLHdCQUFJLE9BQUosRUFBYTtBQUNULDZCQUFLLFlBQUw7QUFDSCxxQkFGRCxNQUdLO0FBQ0QsNkJBQUssY0FBTDtBQUNIOztBQUVELHlCQUFLLFVBQUw7QUFDSCxpQiIsImZpbGUiOiJsZWFkZXJCb2FyZFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
