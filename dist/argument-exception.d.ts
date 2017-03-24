import Exception from "./exception";
import "n-ext";
declare class ArgumentException extends Exception {
    constructor(argName: string, reason: string);
    constructor(argName: string, reason: string, innerException: Exception);
}
export default ArgumentException;
