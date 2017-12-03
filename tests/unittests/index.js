var chai = require("chai");
var expect = chai.expect;

var stringCalc = require("../../services/string-calculator");

describe("Simple Calculator ", function () {

    describe("Sum of inputs", function(){
        it("Should return sum of 2 inputs comma separated.", function(){
            var input = "2,1";
            var output = 3;
            expect(stringCalc.sum(input)).to.equal(output);
        })
   });
})