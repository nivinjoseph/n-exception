"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
require("n-ext");
var index_1 = require("../src/index");
suite("exceptions", function () {
    suite("ApplicationException", function () {
        test("should have the right exceptionType", function () {
            var exp = new index_1.ApplicationException("test exception");
            var exceptionType = exp.exceptionType;
            assert.strictEqual(exp.exceptionType, "ApplicationException");
        });
    });
});
//# sourceMappingURL=exception.test.js.map