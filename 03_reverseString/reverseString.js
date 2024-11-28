const reverseString = function(word) {
    let lettersArr = word.split("")
    let newWordArr = []
    let returnWord = ""

    for (let i = lettersArr.length-1; i >= 0; i--)
        newWordArr.push(lettersArr[i])

    for (let i = 0; i < newWordArr.length; i ++)
        returnWord += newWordArr[i]

    return returnWord
};

// Do not edit below this line
module.exports = reverseString;
