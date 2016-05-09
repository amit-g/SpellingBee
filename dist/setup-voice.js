'use strict';

System.register(['aurelia-framework', 'appState', 'textToSpeech'], function (_export, _context) {
    var inject, AppState, TextToSpeech, _dec, _class, SetupVoiceCustomElement;

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
        }, function (_textToSpeech) {
            TextToSpeech = _textToSpeech.TextToSpeech;
        }],
        execute: function () {
            _export('SetupVoiceCustomElement', SetupVoiceCustomElement = (_dec = inject(AppState, TextToSpeech, 'window'), _dec(_class = function () {
                function SetupVoiceCustomElement(appState, textToSpeech, window) {
                    _classCallCheck(this, SetupVoiceCustomElement);

                    this.heading = 'SetupVoice';

                    this.appState = appState;
                    this.textToSpeech = textToSpeech;
                    this.window = window;

                    this.voices = [];
                    this.currentVoiceName = this.appState.voiceName;
                    this.sampleText = "Hello, this is how I speak";
                }

                SetupVoiceCustomElement.prototype.playVoice = function playVoice(index) {
                    var message = this.sampleText;
                    this.textToSpeech.speak(message, this.voices[index]);
                };

                SetupVoiceCustomElement.prototype.setVoice = function setVoice(index) {
                    this.currentVoiceName = this.appState.voiceName = this.voices[index].name;

                    var message = "Voice set to " + this.currentVoiceName;
                    this.textToSpeech.speak(message, this.voices[index]);
                };

                SetupVoiceCustomElement.prototype.populateVoices = function populateVoices() {
                    this.voices = this.textToSpeech.voices;
                };

                SetupVoiceCustomElement.prototype.attached = function attached() {
                    var _this = this;

                    if (this.voices.length === 0) {
                        this.populateVoices();
                        if (this.voices.length === 0) {
                            this.window.setTimeout(function () {
                                return _this.populateVoices();
                            }, 100);
                        }
                    }
                };

                return SetupVoiceCustomElement;
            }()) || _class));

            _export('SetupVoiceCustomElement', SetupVoiceCustomElement);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXZvaWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLG9CLGFBQUEsUTs7QUFDQSx3QixpQkFBQSxZOzs7K0NBR0ssdUIsV0FEWixPQUFPLFFBQVAsRUFBaUIsWUFBakIsRUFBK0IsUUFBL0IsQztBQUlDLGlEQUFZLFFBQVosRUFBc0IsWUFBdEIsRUFBb0MsTUFBcEMsRUFBNEM7QUFBQTs7QUFBQSx5QkFGNUMsT0FFNEMsR0FGbEMsWUFFa0M7O0FBQzFDLHlCQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSx5QkFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEseUJBQUssTUFBTCxHQUFjLEVBQWQ7QUFDQSx5QkFBSyxnQkFBTCxHQUF3QixLQUFLLFFBQUwsQ0FBYyxTQUF0QztBQUNBLHlCQUFLLFVBQUwsR0FBa0IsNEJBQWxCO0FBQ0Q7O2tEQUVELFMsc0JBQVUsSyxFQUFPO0FBQ2Isd0JBQUksVUFBVSxLQUFLLFVBQW5CO0FBQ0EseUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixFQUFpQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWpDO0FBQ0gsaUI7O2tEQUVELFEscUJBQVMsSyxFQUFPO0FBQ1oseUJBQUssZ0JBQUwsR0FBd0IsS0FBSyxRQUFMLENBQWMsU0FBZCxHQUEwQixLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLElBQXJFOztBQUVBLHdCQUFJLFVBQVUsa0JBQWtCLEtBQUssZ0JBQXJDO0FBQ0EseUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixFQUFpQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWpDO0FBQ0gsaUI7O2tEQUVELGMsNkJBQWlCO0FBQ2IseUJBQUssTUFBTCxHQUFjLEtBQUssWUFBTCxDQUFrQixNQUFoQztBQUNILGlCOztrREFFRCxRLHVCQUFXO0FBQUE7O0FBQ1Asd0JBQUksS0FBSyxNQUFMLENBQVksTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQiw2QkFBSyxjQUFMO0FBQ0EsNEJBQUksS0FBSyxNQUFMLENBQVksTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQixpQ0FBSyxNQUFMLENBQVksVUFBWixDQUF1QjtBQUFBLHVDQUFNLE1BQUssY0FBTCxFQUFOO0FBQUEsNkJBQXZCLEVBQW9ELEdBQXBEO0FBQ0g7QUFDSjtBQUNKLGlCIiwiZmlsZSI6InNldHVwLXZvaWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
