import { Exception } from "./exception.js";
export declare class ArgumentException extends Exception {
    private readonly _argName;
    private readonly _reason;
    get argName(): string;
    get reason(): string;
    constructor(argName: string, reason: string, innerException?: Error);
}
//# sourceMappingURL=argument-exception.d.ts.map