"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
require("@nivinjoseph/n-ext");
class ObjectDisposedException extends exception_1.Exception {
    constructor(disposed) {
        super(`Object of type '${disposed ? disposed.getTypeName() : "UNKNOWN"}' has been disposed.`);
    }
}
exports.ObjectDisposedException = ObjectDisposedException;
//# sourceMappingURL=object-disposed-exception.js.map