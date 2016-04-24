$(function(){
    $("#checkIt").on("click", function(){
        var word = $("#wordInput").val();
        
        if (word.toLowerCase() == currentWord.toLowerCase()) {
            speak('Perfect');
        }
        else {
            speak('Try again');
        }
    });

    $("#speakAgain").on("click", function(){
         speak(currentWord); 
    });
   
    $("#showWord").on("click", function(){
         $("#wordInput").val(currentWord);
         speak(currentWord);
    });
   
    $("#nextWord").on("click", function(){
         currentWordIndex = getRandomInt(0, words.length);
         currentWord = words[currentWordIndex];
         
         $("#wordInput").val("");
         speak(currentWord);
    });
    
    $("#startPractice").on("click", function(){
        if (words.length <= 0){
            $("#message").html("Can't start the practice. Please load the  words first.");
            
            return;
        }
        
        startPractice(currentWord);
    });
  
    $("#loadDataFromGoogleWorksheet").on("click", function(){
        var publishedUrl = $("#googleWorksheetUrl").val();
        
        loadWords(publishedUrl);
    });
   
    init();
});

function speak(message) {
    var msg = new SpeechSynthesisUtterance(message);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
    speechSynthesis.speak(msg);
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//speak('Let\s go');

var words = [];
var currentWordIndex;
var currentWord;

function init(){
    var publishedUrl = window.localStorage.getItem("googleWorksheetUrl");
    
    console.log("words: " + publishedUrl);
    
    if (!publishedUrl){
        $("#message").html("No words loaded. Enter Google Sheet Url.");
        speak("No words loaded. Enter Google Sheet Url.");
        
        return;
    }
    
    loadWords(publishedUrl);
    startPractice();
}

function start(){
    init();
}

function startPractice(){
        if (words.length <= 0){
            $("#message").html("Can't start the practice. Please load the  words first.");
            
            return;
        }

        currentWordIndex = getRandomInt(0, words.length);
        currentWord = words[currentWordIndex];

        $("#wordInput").val("");
        speak(currentWord);
}

function loadWords(publishedUrl){
    loadWordsFromGoogleSheet(publishedUrl)
        .done(function(wordsFromGoogleSheet) {
            console.log(words);
            words.length = 0;
            Array.prototype.push.apply(words, wordsFromGoogleSheet);
            console.log(words);
            console.log(words.length + " words loaded. Ready for practice.");
            $("#message").html(words.length + " words loaded. Ready for practice.");
            
            speak($("#message").html());
            
            window.localStorage.setItem("googleWorksheetUrl", publishedUrl);
        })
        .fail(function() {
            console.log( "Could not load word." );
            $("#message").html("Could not load word.");
            deferred.fail();
        })
        .always(function() {
            console.log( "complete" );
        });
}
    
function loadWordsFromGoogleSheet(publishedUrl){
    console.log(publishedUrl);
    var publishedUrlPrefix = "https://docs.google.com/spreadsheets/d/";
    var publishedUrlPattern = "(https://docs.google.com/spreadsheets/d/)([^/]+)(/.+)";
    var publishedUrlRegExp = new RegExp(publishedUrlPattern, "i")
    var key = publishedUrl.replace(publishedUrlRegExp, "$2");
    
    if (!key){
        console.log("Invalid Url");
    }
    
    var feedUrlTemplate = "http://spreadsheets.google.com/feeds/cells/{key}/od6/public/basic?alt=json&callback=?";
    var feedUrl = feedUrlTemplate.replace("{key}", key);
        
    var deferred = new $.Deferred();
    
    $.getJSON(feedUrl, function(data){
        console.log(data);
        var newWords = $.map(data.feed.entry, function(ele, i)
        {
            return ele.content["$t"];
        });
        
        deferred.resolve(newWords);
    });
    
    return deferred;
}

function getWords(){
    var wordList = [
        'please',
        'load',
        'more',
        'words'
    ];

    return wordList;
}