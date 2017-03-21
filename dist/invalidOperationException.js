"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("./exception");
require("n-ext");
var InvalidOperationException = (function (_super) {
    __extends(InvalidOperationException, _super);
    function InvalidOperationException(operation, innerException) {
        var _this = this;
        if (operation == null || operation.isEmptyOrWhiteSpace())
            operation = "<UNKNOWN>";
        var message = "Operation '{0}' is invalid.".format(operation);
        _this = _super.call(this, message, innerException) || this;
        return _this;
    }
    Object.defineProperty(InvalidOperationException.prototype, "exceptionType", {
        get: function () { return "InvalidOperationException"; },
        enumerable: true,
        configurable: true
    });
    return InvalidOperationException;
}(exception_1.default));
exports.default = InvalidOperationException;