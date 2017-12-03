var chai = require("chai");
var expect = chai.expect;

var stringCalc = require("../../services/string-calculator");

describe("Simple Calculator ", function () {

    describe("Sum of inputs", function(){
        it("Should return sum of 2 inputs comma separated.", function(){
            var input = "2,1";
            var output = 3;
            expect(stringCalc.sum(input)).to.equal(output);
        });

        it("Should return output same as input in case of one number", function() {
            var input = "4";
            var output = 4;
            expect(stringCalc.sum(input)).to.equal(output);
        });

        it("Should return 0 same as input in case of empty string input", function() {
            var input = "";
            var output = 0;
            expect(stringCalc.sum(input)).to.equal(output);
        });
   });
})