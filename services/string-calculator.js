
var calculator = {};

calculator.sum = function(input) {
    var splitted = input.split(",");
    if (input.length == 0) {
        return 0;
    }
    
    if(splitted.length == 1) {
        return parseInt(splitted[0]);
    }
    return parseInt(splitted[0]) + parseInt(splitted[1]);
};

module.exports = calculator;
