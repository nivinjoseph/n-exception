import Exception from "./exception";
import "n-ext";
declare class InvalidArgumentException extends Exception {
    readonly exceptionType: string;
    constructor(argName: string);
    constructor(argName: string, innerException: Exception);
}
export default InvalidArgumentException;
