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
var ArgumentException = (function (_super) {
    __extends(ArgumentException, _super);
    function ArgumentException(argName, reason, innerException) {
        var _this = this;
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "is not valid";
        var message = "Argument '{0}' {1}.".format(argName, reason);
        _this = _super.call(this, message, innerException) || this;
        return _this;
    }
    return ArgumentException;
}(exception_1.default));
exports.default = ArgumentException;
//# sourceMappingURL=argument-exception.js.map