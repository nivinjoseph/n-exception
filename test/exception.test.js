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
        test("should display <none> when message is a white space", function () {
            var exp = new index_1.ApplicationException(" ");
            assert.strictEqual(exp.message, "<none>");
        });
        test("should display <none> when message is an empty string", function () {
            var exp = new index_1.ApplicationException("");
            assert.strictEqual(exp.message, "<none>");
        });
        test("should return the message value when message argument is provided", function () {
            var exp = new index_1.ApplicationException("You have an error");
            assert.strictEqual(exp.message, "You have an error");
        });
        test("should return null if no innerException argument is provided", function () {
            var exp = new index_1.ApplicationException("404");
            assert.strictEqual(exp.innerException, null);
        });
        test("should return Exception object when innerException argument is provided", function () {
            var innerExp = new index_1.ApplicationException("401");
            var exp = new index_1.ApplicationException("404", innerExp);
            assert.strictEqual(exp.innerException, { _message: "401", _innerException: null });
        });
        test("should return message preappended with the string Error", function () {
            var exp = new index_1.ApplicationException("404");
            assert.strictEqual(exp.stackTrace, "Error: 404");
        });
    });
    suite("ArgumentException", function () {
        test("should return message formated when provided argName and reason", function () {
            var exp = new index_1.ArgumentException("i", "is valid");
            assert.strictEqual(exp.message, "Argument 'i' is valid.");
        });
        test("should return argName and reason with default value when argName and reason are empty strings", function () {
            var exp = new index_1.ArgumentException("", "");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        test("should return argName and reason with default value when argName and reason are space characters", function () {
            var exp = new index_1.ArgumentException(" ", " ");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        test("should return argName with default value and formated reason when argName is an empty string and reason was provided", function () {
            var exp = new index_1.ArgumentException("", "is valid");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });
        test("should return formated argName and default reason value when argName was provided and reason is an empty string", function () {
            var exp = new index_1.ArgumentException("i", "");
            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });
    });
    suite("ArgumentNullException", function () {
        test("should return formated message when argName is provided", function () {
            var exp = new index_1.ArgumentNullException("i");
            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });
        test("should return argName with default value when argName is an empty string", function () {
            var exp = new index_1.ArgumentNullException("");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
        test("should return argName with default value when argName is a space character", function () {
            var exp = new index_1.ArgumentNullException(" ");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });
    suite("InvalidArgumentException", function () {
        test("should return formated message when argName is provided", function () {
            var exp = new index_1.InvalidArgumentException("i");
            assert.strictEqual(exp.message, "Argument 'i' is invalid");
        });
        test("should return argName with default value when argName is an empty string", function () {
            var exp = new index_1.InvalidArgumentException("");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });
        test("should return argName with default value whe argName is a space character", function () {
            var exp = new index_1.InvalidArgumentException(" ");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });
    });
    suite.only("InvalidOperationException", function () {
        test("should return formated message when operation is provided", function () {
            var exp = new index_1.InvalidOperationException("i");
            assert.strictEqual(exp.message, "Operation 'i' is invalid.");
        });
        test("should return default operation value when operation is an empty string", function () {
            var exp = new index_1.InvalidOperationException("");
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
        test("should return default operation value when operation is a space character", function () {
            var exp = new index_1.InvalidOperationException(" ");
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
    });
});
//# sourceMappingURL=exception.test.js.map