const fibonacci = function(num) {
    if (typeof num == "string") {num = parseInt(num);}
    else if (num < 0) {return "OOPS";}

    let fibonacciVals = [1,1];
    while (num > fibonacciVals.length) {
        const last = fibonacciVals[fibonacciVals.length - 1];
        const nextLast = fibonacciVals[fibonacciVals.length - 2];
        fibonacciVals.push(last + nextLast);
    }
    return fibonacciVals[fibonacciVals.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
