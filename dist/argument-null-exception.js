import { ArgumentException } from "./argument-exception.js";
export class ArgumentNullException extends ArgumentException {
    constructor(argName, innerException) {
        super(argName, "is NULL", innerException);
    }
}
//# sourceMappingURL=argument-null-exception.js.map