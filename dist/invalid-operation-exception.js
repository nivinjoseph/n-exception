import { Exception } from "./exception.js";
export class InvalidOperationException extends Exception {
    get reason() { return this._reason; }
    constructor(reason, innerException) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "<UNKNOWN>";
        const message = `Operation is invalid due to reason '${reason}'.`;
        super(message, innerException);
        this._reason = reason;
    }
}
//# sourceMappingURL=invalid-operation-exception.js.map