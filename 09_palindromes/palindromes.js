const palindromes = function (word) {

    let wordStripped = word.replace(/[^\w]/g, "").toLowerCase();
    midpoint = Math.ceil(wordStripped.length/2) - 1;
    for (let i = 0; i < midpoint; i++) {
        if (wordStripped[i] != wordStripped[wordStripped.length-1-i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
