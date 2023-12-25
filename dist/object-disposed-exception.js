import { Exception } from "./exception.js";
export class ObjectDisposedException extends Exception {
    constructor(disposed) {
        const type = typeof disposed === "string" ? disposed : disposed.getTypeName();
        super(`Object of type '${type ? type : "UNKNOWN"}' has been disposed.`);
    }
}
//# sourceMappingURL=object-disposed-exception.js.map