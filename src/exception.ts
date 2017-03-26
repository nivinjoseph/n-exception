import "n-ext";

abstract class Exception
{
    private readonly _message: string;
    private readonly _innerException: Exception;
    private readonly _exceptionType: string;
    private readonly _stackTrace: string;
    
    
    public get message(): string { return this._message; }
    public get exceptionType(): string { return this._exceptionType; }
    public get innerException(): Exception { return this._innerException; }
    public get stackTrace(): string { return this._stackTrace; }
    
    
    public constructor(message: string);
    public constructor(message: string, innerException: Exception);
    public constructor(message: string, innerException?: Exception)
    {
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        
        this._message = message;
        this._innerException = innerException ? innerException : null;
        this._exceptionType = (<Object>this).getTypeName();
        this._stackTrace = this.generateStackTrace();
    }
    
    
    public toString(): string
    {
        return "{0}: {1}".format(this._exceptionType, this._message);
    }
    
    public toLogString(): string
    {
        let log = this.stackTrace;
        if (this.innerException != null)
            log = log + "\n" + "Inner Exception --> " + this.innerException.toLogString();
        
        return log;
    }
    
    
    private generateStackTrace(): string
    {
        let err = new Error();
        let splitted = err.stack.split(/\r?\n/g);
        let mark = "at new {0}".format(this.exceptionType);
        let index = null;
        for (let i = 0; i < splitted.length; i++)
        {
            if (splitted[i].trim().startsWith(mark))
            {
                index = i + 1;
                break;
            }
        }
        splitted = index != null ? splitted.skip(index) : splitted.skip(1);
        splitted = [this.toString()].concat(splitted);
        return splitted.join("\n");
    }
}

export default Exception;