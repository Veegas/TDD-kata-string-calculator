
const app = require("../../app");
const request = require("supertest");
var chai = require("chai");
var expect = chai.expect;

describe("Smoketest", function() {
    describe("GET /", function() {
        it("should respond with 200 ok", function(done) {
            request(app)
                .get("/")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });
    describe("POST /sum", function() {
        it("should respond with 200 and output sum when format is correct", function(done) {
            request(app)
                .post("/sum")
                .send({
                    input: "1,2"
                })
                .expect("Content-Type", /json/)
                .expect(200, {
                    "sum": 3
                }, done);
        });
    });
});