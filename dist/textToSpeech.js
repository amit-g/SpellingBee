'use strict';

System.register([], function (_export, _context) {
    var TextToSpeech;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('TextToSpeech', TextToSpeech = function () {
                function TextToSpeech() {
                    _classCallCheck(this, TextToSpeech);
                }

                TextToSpeech.prototype.speak = function speak(message) {
                    var utterance = new SpeechSynthesisUtterance(message);
                    utterance.voice = speechSynthesis.getVoices().filter(function (voice) {
                        return voice.name == 'Whisper';
                    })[0];

                    speechSynthesis.speak(utterance);
                };

                return TextToSpeech;
            }());

            _export('TextToSpeech', TextToSpeech);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRUb1NwZWVjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztvQ0FBYSxZOzs7Ozt1Q0FDVCxLLGtCQUFNLE8sRUFBUztBQUNYLHdCQUFJLFlBQVksSUFBSSx3QkFBSixDQUE2QixPQUE3QixDQUFoQjtBQUNBLDhCQUFVLEtBQVYsR0FBa0IsZ0JBQWdCLFNBQWhCLEdBQ0csTUFESCxDQUNVO0FBQUEsK0JBQVMsTUFBTSxJQUFOLElBQWMsU0FBdkI7QUFBQSxxQkFEVixFQUM0QyxDQUQ1QyxDQUFsQjs7QUFHQSxvQ0FBZ0IsS0FBaEIsQ0FBc0IsU0FBdEI7QUFDSCxpQiIsImZpbGUiOiJ0ZXh0VG9TcGVlY2guanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
