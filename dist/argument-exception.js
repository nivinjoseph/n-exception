"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentException = void 0;
const exception_1 = require("./exception");
require("@nivinjoseph/n-ext");
class ArgumentException extends exception_1.Exception {
    constructor(argName, reason, innerException) {
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "is not valid";
        const message = "Argument '{0}' {1}.".format(argName, reason);
        super(message, innerException);
        this._argName = argName;
        this._reason = reason;
    }
    get argName() { return this._argName; }
    get reason() { return this._reason; }
}
exports.ArgumentException = ArgumentException;
//# sourceMappingURL=argument-exception.js.map