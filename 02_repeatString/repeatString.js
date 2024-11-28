const repeatString = function(word, repeatTimes) {

    if (word.length === 0) return ""

    if (repeatTimes < 0) return "ERROR"
    else if (repeatTimes === 0) return ""
    else {
        let stringTemp = ""
        for (let i = 0; i < repeatTimes; i++) {
            stringTemp += word;
        }
        return stringTemp
    }
};

// Do not edit below this line
module.exports = repeatString;
