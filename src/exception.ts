import "n-ext";

abstract class Exception
{
    private readonly _message: string;
    private readonly _innerException: Exception;
    private readonly _exceptionType: string;
    private readonly _error: Error;
    
    
    public get message(): string { return this._message; }
    public get exceptionType(): string { return this._exceptionType; }
    public get innerException(): Exception { return this._innerException; }
    public get stackTrace(): string { return this._error.stack; }
    
    
    public constructor(message: string);
    public constructor(message: string, innerException: Exception);
    public constructor(message: string, innerException?: Exception)
    {
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        
        this._message = message;
        this._innerException = innerException ? innerException : null;
        this._exceptionType = (<Object>this).getTypeName();
        this._error = new Error(this._message);
    }
}

export default Exception;