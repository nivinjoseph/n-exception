"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOperationException = void 0;
const exception_1 = require("./exception");
require("@nivinjoseph/n-ext");
class InvalidOperationException extends exception_1.Exception {
    constructor(reason, innerException) {
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "<UNKNOWN>";
        const message = "Operation is invalid due to reason '{0}'.".format(reason);
        super(message, innerException);
        this._reason = reason;
    }
    get reason() { return this._reason; }
}
exports.InvalidOperationException = InvalidOperationException;
//# sourceMappingURL=invalid-operation-exception.js.map