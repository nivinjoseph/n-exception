import { Exception } from "./exception.js";
export declare class InvalidOperationException extends Exception {
    private readonly _reason;
    get reason(): string;
    constructor(reason: string, innerException?: Error);
}
//# sourceMappingURL=invalid-operation-exception.d.ts.map