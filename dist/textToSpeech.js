'use strict';

System.register(['aurelia-framework', 'appState'], function (_export, _context) {
    var inject, AppState, _createClass, _dec, _class, TextToSpeech;

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

            _export('TextToSpeech', TextToSpeech = (_dec = inject('window', AppState), _dec(_class = function () {
                function TextToSpeech(window, appState) {
                    _classCallCheck(this, TextToSpeech);

                    this.window = window;
                    this.appState = appState;
                }

                TextToSpeech.prototype.speak = function speak(message, voice) {
                    var _this = this;

                    var utterance = new this.window.SpeechSynthesisUtterance(message);

                    if (voice) {
                        utterance.voice = voice;
                        utterance.voice.lang = voice.lang;
                    } else {
                        if (this.appState.voiceName) {
                            voice = this.window.speechSynthesis.getVoices().filter(function (voice) {
                                return voice.name === _this.appState.voiceName;
                            })[0];
                            utterance.voice = voice;
                            utterance.voice.lang = voice.lang;
                        }
                    }

                    this.window.speechSynthesis.speak(utterance);
                };

                _createClass(TextToSpeech, [{
                    key: 'isSupported',
                    get: function get() {
                        return !!this.window.speechSynthesis;
                    }
                }, {
                    key: 'voices',
                    get: function get() {
                        return this.window.speechSynthesis.getVoices();
                    }
                }]);

                return TextToSpeech;
            }()) || _class));

            _export('TextToSpeech', TextToSpeech);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRUb1NwZWVjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVEsa0IscUJBQUEsTTs7QUFDQSxvQixhQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHSyxZLFdBRFosT0FBTyxRQUFQLEVBQWlCLFFBQWpCLEM7QUFFRyxzQ0FBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCO0FBQUE7O0FBQzFCLHlCQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EseUJBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIOzt1Q0FFRCxLLGtCQUFNLE8sRUFBUyxLLEVBQU87QUFBQTs7QUFDbEIsd0JBQUksWUFBWSxJQUFJLEtBQUssTUFBTCxDQUFZLHdCQUFoQixDQUF5QyxPQUF6QyxDQUFoQjs7QUFFQSx3QkFBSSxLQUFKLEVBQVc7QUFDUCxrQ0FBVSxLQUFWLEdBQWtCLEtBQWxCO0FBQ0Esa0NBQVUsS0FBVixDQUFnQixJQUFoQixHQUF1QixNQUFNLElBQTdCO0FBQ0gscUJBSEQsTUFJSztBQUNELDRCQUFJLEtBQUssUUFBTCxDQUFjLFNBQWxCLEVBQTZCO0FBQ3pCLG9DQUFRLEtBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsU0FBNUIsR0FDYSxNQURiLENBQ29CO0FBQUEsdUNBQVMsTUFBTSxJQUFOLEtBQWUsTUFBSyxRQUFMLENBQWMsU0FBdEM7QUFBQSw2QkFEcEIsRUFDcUUsQ0FEckUsQ0FBUjtBQUVBLHNDQUFVLEtBQVYsR0FBa0IsS0FBbEI7QUFDQSxzQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBQXVCLE1BQU0sSUFBN0I7QUFDSDtBQUNKOztBQUVELHlCQUFLLE1BQUwsQ0FBWSxlQUFaLENBQTRCLEtBQTVCLENBQWtDLFNBQWxDO0FBQ0gsaUI7Ozs7d0NBRWlCO0FBQ2QsK0JBQU8sQ0FBQyxDQUFDLEtBQUssTUFBTCxDQUFZLGVBQXJCO0FBQ0g7Ozt3Q0FFWTtBQUNULCtCQUFPLEtBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsU0FBNUIsRUFBUDtBQUNIIiwiZmlsZSI6InRleHRUb1NwZWVjaC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
