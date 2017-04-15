"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("n-ext");
class Exception extends Error {
    get name() { return this._name; }
    // public get message(): string { return this._message; }
    // public get stack(): string { return this._stack; }
    get innerException() { return this._innerException; }
    constructor(message, innerException) {
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        super(message);
        this._name = this.getTypeName();
        this._innerException = innerException ? innerException : null;
        // if ((<any>message) instanceof Error)
        // {
        //     let err = (<any>message) as Error;
        //     this._message = err.message;
        //     this._stack = err.stack;
        // }
        // else
        // {
        //     if (message == null || message.isEmptyOrWhiteSpace())
        //         message = "<none>";
        //     this._message = message;
        //     this._stack = this.generateStackTrace();
        //     this._innerException = innerException ? innerException : null;
        // }
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map