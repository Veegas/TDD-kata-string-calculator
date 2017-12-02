
var calculator = {};

calculator.sum = function(input) {
    var splitted = input.split(",");
    return parseInt(splitted[0]) + parseInt(splitted[1]);


};

module.exports = calculator;
