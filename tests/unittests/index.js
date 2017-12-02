var chai = require("chai");
var expect = chai.expect;
var mocha = require("mocha");

var calculator = require("../../services/string-calculator");

describe("String calculator summation unit tests",  function() {

    describe("Summation of two numbers", function() {

        it("Should return sum of two numbers correctly", function () {
            expect(calculator.sum("1,2")).to.equal(3);
        });

        it("Should return the same in case of single input", function(){
            var inp = 1;

            expect(calculator.sum(inp.toString())).to.equal(inp);
        });
    });
});