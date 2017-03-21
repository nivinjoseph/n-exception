import Exception from "./exception";
import "n-ext";
declare class InvalidOperationException extends Exception {
    readonly exceptionType: string;
    constructor(operation: string);
    constructor(operation: string, innerException: Exception);
}
export default InvalidOperationException;
