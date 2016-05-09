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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXZvaWNlLjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0Esb0IsYUFBQSxROztBQUNBLHdCLGlCQUFBLFk7OzsrQ0FHSyx1QixXQURaLE9BQU8sUUFBUCxFQUFpQixZQUFqQixFQUErQixRQUEvQixDO0FBSUMsaURBQVksUUFBWixFQUFzQixZQUF0QixFQUFvQyxNQUFwQyxFQUE0QztBQUFBOztBQUFBLHlCQUY1QyxPQUU0QyxHQUZsQyxZQUVrQzs7QUFDMUMseUJBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLHlCQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDs7QUFFQSx5QkFBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLHlCQUFLLGdCQUFMLEdBQXdCLEtBQUssUUFBTCxDQUFjLFNBQXRDO0FBQ0EseUJBQUssVUFBTCxHQUFrQiw0QkFBbEI7QUFDRDs7a0RBRUQsUyxzQkFBVSxLLEVBQU87QUFDYix3QkFBSSxVQUFVLEtBQUssVUFBbkI7QUFDQSx5QkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEVBQWlDLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBakM7QUFDSCxpQjs7a0RBRUQsUSxxQkFBUyxLLEVBQU87QUFDWix5QkFBSyxnQkFBTCxHQUF3QixLQUFLLFFBQUwsQ0FBYyxTQUFkLEdBQTBCLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsSUFBckU7O0FBRUEsd0JBQUksVUFBVSxrQkFBa0IsS0FBSyxnQkFBckM7QUFDQSx5QkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEVBQWlDLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBakM7QUFDSCxpQjs7a0RBRUQsYyw2QkFBaUI7QUFDYix5QkFBSyxNQUFMLEdBQWMsS0FBSyxZQUFMLENBQWtCLE1BQWhDO0FBQ0gsaUI7O2tEQUVELFEsdUJBQVc7QUFBQTs7QUFDUCx3QkFBSSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLDZCQUFLLGNBQUw7QUFDQSw0QkFBSSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGlDQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCO0FBQUEsdUNBQU0sTUFBSyxjQUFMLEVBQU47QUFBQSw2QkFBdkIsRUFBb0QsR0FBcEQ7QUFDSDtBQUNKO0FBQ0osaUIiLCJmaWxlIjoic2V0dXAtdm9pY2UuMS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
