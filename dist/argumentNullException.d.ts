import Exception from "./exception";
import "n-ext";
declare class ArgumentNullException extends Exception {
    readonly exceptionType: string;
    constructor(argName: string);
    constructor(argName: string, innerException: Exception);
}
export default ArgumentNullException;
