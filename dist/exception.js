"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("n-ext");
var Exception = (function () {
    function Exception(message, innerException) {
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        this._message = message;
        this._innerException = innerException ? innerException : null;
        this._exceptionType = this.getTypeName();
        this._error = new Error(this._message);
    }
    Object.defineProperty(Exception.prototype, "message", {
        get: function () { return this._message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "exceptionType", {
        get: function () { return this._exceptionType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "innerException", {
        get: function () { return this._innerException; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "stackTrace", {
        get: function () { return this._error.stack; },
        enumerable: true,
        configurable: true
    });
    return Exception;
}());
exports.default = Exception;
//# sourceMappingURL=exception.js.map