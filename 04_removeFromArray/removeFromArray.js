const removeFromArray = function(array, ...args) {
    if (array.length == 0) {return [];}

    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        if (array.indexOf(item) >= 0) {array.splice(array.indexOf(item), 1) }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
