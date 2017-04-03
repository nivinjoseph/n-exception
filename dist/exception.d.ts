import "n-ext";
export declare abstract class Exception {
    private readonly _name;
    private readonly _message;
    private readonly _stack;
    private readonly _innerException;
    readonly name: string;
    readonly message: string;
    readonly stack: string;
    readonly innerException: Exception;
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    toString(): string;
    toLogString(): string;
    private generateStackTrace();
}
