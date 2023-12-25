import { ArgumentException } from "./argument-exception.js";
export class InvalidArgumentException extends ArgumentException {
    constructor(argName, innerException) {
        super(argName, "is invalid", innerException);
    }
}
//# sourceMappingURL=invalid-argument-exception.js.map