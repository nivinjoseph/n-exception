"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
require("n-ext");
var index_1 = require("../src/index");
suite("exceptions", function () {
    suite("ApplicationException", function () {
        test("should have the right exceptionType", function () {
            var exp = new index_1.ApplicationException("test exception");
            assert.strictEqual(exp.exceptionType, "ApplicationException");
        });
        test("should display <none> when message is not provided", function () {
            var innerExp = "Hello";
            var exp = new index_1.ApplicationException("");
            assert.strictEqual(exp.message, "<none>");
        });
        test("should display <none> when message is a white space", function () {
            var exp = new index_1.ApplicationException(" ");
            assert.strictEqual(exp.message, "<none>");
        });
        test("should display <none> when message is an empty string", function () {
            var exp = new index_1.ApplicationException("");
            assert.strictEqual(exp.message, "<none>");
        });
        test.only("should return the message value when message argument is provided", function () {
            var exp = new index_1.ApplicationException("You have an");
            assert.strictEqual(exp.message, "You have an error");
        });
        test("should display null if no innerException argument is provided");
        test("should return Exception when innerException argument is provided");
        test("should display ");
        test("should return a string value if error exists");
        test("should return ..... if error does not exist");
        test("", function () {
            var innerExp = new index_1.ApplicationException("hello");
            var exp = new index_1.ApplicationException("hi", innerExp);
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
});
//# sourceMappingURL=exception.test.js.map