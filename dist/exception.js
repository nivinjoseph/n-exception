export class Exception extends Error {
    // private readonly _message: string;
    // private readonly _stack: string;
    get name() { return this._name; }
    // public get message(): string { return this._message; }
    // public get stack(): string { return this._stack; }
    get innerException() { return this.cause; }
    constructor(message, innerException) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        super(message, {
            cause: innerException !== null && innerException !== void 0 ? innerException : null
        });
        this.message = message;
        this._name = this.getTypeName();
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
//# sourceMappingURL=exception.js.map