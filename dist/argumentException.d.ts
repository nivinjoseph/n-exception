import Exception from "./exception";
import "n-ext";
declare class ArgumentException extends Exception {
    readonly exceptionType: string;
    constructor(argName: string, reason: string);
    constructor(argName: string, reason: string, innerException: Exception);
}
export default ArgumentException;
