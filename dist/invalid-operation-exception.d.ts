import { Exception } from "./exception";
import "@nivinjoseph/n-ext";
export declare class InvalidOperationException extends Exception {
    private readonly _reason;
    get reason(): string;
    constructor(reason: string);
    constructor(reason: string, innerException: Exception);
}
