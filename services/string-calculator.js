var stringCalculator = {};

stringCalculator.sum = function(input) {
    if (input.length == 0) {
        return 0;
    }
    var splitted = input.split(",");
    if(splitted.length == 1) {
        return parseInt(splitted[0]);
    }
    return parseInt(splitted[0]) + parseInt(splitted[1]);
};

module.exports = stringCalculator;