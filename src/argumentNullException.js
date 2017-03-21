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
var ArgumentNullException = (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(argName, innerException) {
        var _this = this;
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";
        var message = "Argument '{0}' is NULL.".format(argName);
        _this = _super.call(this, message, innerException) || this;
        return _this;
    }
    Object.defineProperty(ArgumentNullException.prototype, "exceptionType", {
        get: function () { return "ArgumentNullException"; },
        enumerable: true,
        configurable: true
    });
    return ArgumentNullException;
}(exception_1.default));
exports.default = ArgumentNullException;
//# sourceMappingURL=argumentNullException.js.map