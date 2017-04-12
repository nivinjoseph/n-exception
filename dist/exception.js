"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("n-ext");
var Exception = (function () {
    function Exception(message, innerException) {
        this._name = this.getTypeName();
        if (message instanceof Error) {
            var err = message;
            this._message = err.message;
            this._stack = err.stack;
        }
        else {
            if (message == null || message.isEmptyOrWhiteSpace())
                message = "<none>";
            this._message = message;
            this._stack = this.generateStackTrace();
            this._innerException = innerException ? innerException : null;
        }
    }
    Object.defineProperty(Exception.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "message", {
        get: function () { return this._message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "stack", {
        get: function () { return this._stack; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "innerException", {
        get: function () { return this._innerException; },
        enumerable: true,
        configurable: true
    });
    Exception.fromError = function (error) {
        return new Exception(error);
    };
    Exception.prototype.toString = function () {
        return "{0}: {1}".format(this._name, this._message);
    };
    Exception.prototype.toLogString = function () {
        var log = this.stack;
        if (this.innerException != null)
            log = log + "\n" + "Inner Exception --> " + this.innerException.toLogString();
        return log;
    };
    Exception.prototype.generateStackTrace = function () {
        var err = new Error();
        var splitted = err.stack.split(/\r?\n/g);
        var mark = "at new {0}".format(this.name);
        var index = null;
        for (var i = 0; i < splitted.length; i++) {
            if (splitted[i].trim().startsWith(mark)) {
                index = i + 1;
                break;
            }
        }
        splitted = index != null ? splitted.skip(index) : splitted.skip(1);
        splitted = [this.toString()].concat(splitted);
        return splitted.join("\n");
    };
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map