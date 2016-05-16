'use strict';

<<<<<<< HEAD
System.register(['aurelia-framework', 'appState', 'textToSpeech', 'randomHelper'], function (_export, _context) {
    var inject, AppState, TextToSpeech, RandomHelper, _dec, _class, SetupVoiceCustomElement;
=======
System.register(['aurelia-framework', 'appState', 'textToSpeech'], function (_export, _context) {
    var inject, AppState, TextToSpeech, _dec, _class, SetupVoiceCustomElement;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e

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
<<<<<<< HEAD
        }, function (_randomHelper) {
            RandomHelper = _randomHelper.RandomHelper;
        }],
        execute: function () {
            _export('SetupVoiceCustomElement', SetupVoiceCustomElement = (_dec = inject(AppState, TextToSpeech, RandomHelper, 'window'), _dec(_class = function () {
                function SetupVoiceCustomElement(appState, textToSpeech, randomHelper, window) {
                    _classCallCheck(this, SetupVoiceCustomElement);

                    this.heading = 'Setup Voice';
                    this._sampleTexts = ["Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "The difference between stupidity and genius is that genius has its limits.", "Anyone who has never made a mistake has never tried anything new.", "The important thing is not to stop questioning. Curiosity has its own reason for existing.", "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones."];

                    this.appState = appState;
                    this.textToSpeech = textToSpeech;
                    this.randomHelper = randomHelper;
=======
        }],
        execute: function () {
            _export('SetupVoiceCustomElement', SetupVoiceCustomElement = (_dec = inject(AppState, TextToSpeech, 'window'), _dec(_class = function () {
                function SetupVoiceCustomElement(appState, textToSpeech, window) {
                    _classCallCheck(this, SetupVoiceCustomElement);

                    this.heading = 'Setup Voice';

                    this.appState = appState;
                    this.textToSpeech = textToSpeech;
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                    this.window = window;

                    this.voices = [];
                    this.currentVoiceName = this.appState.voiceName;
<<<<<<< HEAD
                    this.sampleText = "Hello, this is how I speak.";
=======
                    this.sampleText = "Hello, this is how I speak";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                }

                SetupVoiceCustomElement.prototype.playVoice = function playVoice(index) {
                    var message = this.sampleText;
                    this.textToSpeech.speak(message, this.voices[index]);
<<<<<<< HEAD
                    message = "I am using " + this.voices[index].name + " voice to read the text.";
=======
                    message = "I am using " + this.voices[index].name + " voice";
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
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
<<<<<<< HEAD

                    this.sampleText = this._sampleTexts[this.randomHelper.getRandomInt(0, this._sampleTexts.length)];
=======
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
                };

                return SetupVoiceCustomElement;
            }()) || _class));

            _export('SetupVoiceCustomElement', SetupVoiceCustomElement);
        }
    };
});
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,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
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXZvaWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLG9CLGFBQUEsUTs7QUFDQSx3QixpQkFBQSxZOzs7K0NBR0ssdUIsV0FEWixPQUFPLFFBQVAsRUFBaUIsWUFBakIsRUFBK0IsUUFBL0IsQztBQUlDLGlEQUFZLFFBQVosRUFBc0IsWUFBdEIsRUFBb0MsTUFBcEMsRUFBNEM7QUFBQTs7QUFBQSx5QkFGNUMsT0FFNEMsR0FGbEMsYUFFa0M7O0FBQzFDLHlCQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSx5QkFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEseUJBQUssTUFBTCxHQUFjLEVBQWQ7QUFDQSx5QkFBSyxnQkFBTCxHQUF3QixLQUFLLFFBQUwsQ0FBYyxTQUF0QztBQUNBLHlCQUFLLFVBQUwsR0FBa0IsNEJBQWxCO0FBQ0Q7O2tEQUVELFMsc0JBQVUsSyxFQUFPO0FBQ2Isd0JBQUksVUFBVSxLQUFLLFVBQW5CO0FBQ0EseUJBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixFQUFpQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWpDO0FBQ0EsOEJBQVUsZ0JBQWdCLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsSUFBbkMsR0FBMEMsUUFBcEQ7QUFDQSx5QkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEVBQWlDLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBakM7QUFDSCxpQjs7a0RBRUQsUSxxQkFBUyxLLEVBQU87QUFDWix5QkFBSyxnQkFBTCxHQUF3QixLQUFLLFFBQUwsQ0FBYyxTQUFkLEdBQTBCLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsSUFBckU7O0FBRUEsd0JBQUksVUFBVSxrQkFBa0IsS0FBSyxnQkFBckM7QUFDQSx5QkFBSyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEVBQWlDLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBakM7QUFDSCxpQjs7a0RBRUQsYyw2QkFBaUI7QUFDYix5QkFBSyxNQUFMLEdBQWMsS0FBSyxZQUFMLENBQWtCLE1BQWhDO0FBQ0gsaUI7O2tEQUVELFEsdUJBQVc7QUFBQTs7QUFDUCx3QkFBSSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLDZCQUFLLGNBQUw7QUFDQSw0QkFBSSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGlDQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCO0FBQUEsdUNBQU0sTUFBSyxjQUFMLEVBQU47QUFBQSw2QkFBdkIsRUFBb0QsR0FBcEQ7QUFDSDtBQUNKO0FBQ0osaUIiLCJmaWxlIjoic2V0dXAtdm9pY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
>>>>>>> 6d32f1bca6b7df771899cc4f865376193423ec3e
