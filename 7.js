console.log(RepeatedLettersCounter("aabcde333"));
function RepeatedLettersCounter(word) {
    var letterCounter = 0;
    var arrayWord = word.split('');
    arrayWord.forEach(function (x) {
        var repeatedCounter = 0;
        for (var i = 0; i < arrayWord.length; i++) {
            if (x == arrayWord[i]) {
                repeatedCounter++;
            }
        }
        if (repeatedCounter > 1) {
            arrayWord = arrayWord.filter(function (letter) { return letter == x; });
            letterCounter++;
        }
    });
    return letterCounter;
}
