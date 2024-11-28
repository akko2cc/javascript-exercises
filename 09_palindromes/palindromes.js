const palindromes = function () {
    let word = arguments[0].toLowerCase();
    word = word.replace(/[^a-z0-9]/gi,"")

    if (word.split("").reverse().join("") === word) return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
