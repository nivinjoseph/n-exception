import "n-ext";
declare abstract class Exception {
    private readonly _message;
    private readonly _innerException;
    private readonly _exceptionType;
    private readonly _error;
    readonly message: string;
    readonly exceptionType: string;
    readonly innerException: Exception;
    readonly stackTrace: string;
    constructor(message: string);
    constructor(message: string, innerException: Exception);
}
export default Exception;
