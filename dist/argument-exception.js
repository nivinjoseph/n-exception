import { Exception } from "./exception.js";
export class ArgumentException extends Exception {
    get argName() { return this._argName; }
    get reason() { return this._reason; }
    constructor(argName, reason, innerException) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "is not valid";
        const message = `Argument '${argName}' ${reason}.`;
        super(message, innerException);
        this._argName = argName;
        this._reason = reason;
    }
}
//# sourceMappingURL=argument-exception.js.map