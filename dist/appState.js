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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLGVBQUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdLLFEsV0FEWixPQUFPLFFBQVAsRUFBaUIsVUFBakIsQztBQUVHLGtDQUFhLENBQWIsRUFBZ0IsVUFBaEIsRUFBNEI7QUFBQTs7QUFDeEIseUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLFVBQWxCOztBQUVBLHlCQUFLLFNBQUwsR0FBaUIsS0FBSyxVQUFMLENBQWdCLFNBQWhCLElBQTZCLFFBQTlDO0FBQ0EseUJBQUssY0FBTCxHQUFzQixLQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsSUFBa0MsRUFBeEQ7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLEtBQUssVUFBTCxDQUFnQixXQUFoQixJQUErQixFQUFsRDtBQUNIOzttQ0FVRCxjLDJCQUFlLEssRUFBTztBQUNsQiw0QkFBUSxHQUFSLENBQVksYUFBYSxNQUFNLE1BQS9COztBQUVBLDRCQUFRLEdBQVIsQ0FBWSxpQ0FBaUMsS0FBSyxjQUFMLENBQW9CLE1BQWpFO0FBQ0EseUJBQUssY0FBTCxHQUFzQixLQUFLLENBQUwsQ0FBTyxLQUFQLENBQWEsS0FBSyxjQUFsQixFQUFrQyxLQUFsQyxDQUF0QjtBQUNBLDRCQUFRLEdBQVIsQ0FBWSxpQ0FBaUMsS0FBSyxjQUFMLENBQW9CLE1BQWpFOztBQUVBLHlCQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsR0FBaUMsS0FBSyxjQUF0QztBQUNBLDRCQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0gsaUI7Ozs7d0NBakJlO0FBQ1osK0JBQU8sS0FBSyxVQUFMLENBQWdCLFNBQXZCO0FBQ0gscUI7c0NBRWEsSyxFQUFPO0FBQ2pCLDZCQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsR0FBNEIsS0FBNUI7QUFDSCIsImZpbGUiOiJhcHBTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
