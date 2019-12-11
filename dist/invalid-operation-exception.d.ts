import { Exception } from "./exception";
import "@nivinjoseph/n-ext";
export declare class InvalidOperationException extends Exception {
    private readonly _operation;
    get operation(): string;
    constructor(operation: string);
    constructor(operation: string, innerException: Exception);
}
