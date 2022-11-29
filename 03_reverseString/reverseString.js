const reverseString = function(input) {
    result = "";
    for (let i = input.length-1; i >= 0; i--) {
        result += input[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
