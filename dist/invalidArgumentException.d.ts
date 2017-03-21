import Exception from "./exception";
import "n-ext";
declare class InvalidArgumentException extends Exception {
    constructor(argName: string);
    constructor(argName: string, innerException: Exception);
}
export default InvalidArgumentException;
