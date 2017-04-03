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
var argument_exception_1 = require("./argument-exception");
var ArgumentNullException = (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(argName, innerException) {
        return _super.call(this, argName, "is NULL", innerException) || this;
    }
    return ArgumentNullException;
}(argument_exception_1.ArgumentException));
exports.ArgumentNullException = ArgumentNullException;
//# sourceMappingURL=argument-null-exception.js.map