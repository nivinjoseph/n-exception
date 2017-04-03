import "n-ext";

export abstract class Exception
{
    private readonly _name: string;
    private readonly _message: string;
    private readonly _stack: string;
    private readonly _innerException: Exception;
    
    
    public get name(): string { return this._name; }
    public get message(): string { return this._message; }
    public get stack(): string { return this._stack; }
    public get innerException(): Exception { return this._innerException; }
    
    
    public constructor(message: string);
    public constructor(message: string, innerException: Exception);
    public constructor(message: string, innerException?: Exception)
    {
        this._name = (<Object>this).getTypeName();
        
        if (message == null || message.isEmptyOrWhiteSpace())
            message = "<none>";
        
        this._message = message;
        this._stack = this.generateStackTrace();
        this._innerException = innerException ? innerException : null;
    }
    
    
    public toString(): string
    {
        return "{0}: {1}".format(this._name, this._message);
    }
    
    public toLogString(): string
    {
        let log = this.stack;
        if (this.innerException != null)
            log = log + "\n" + "Inner Exception --> " + this.innerException.toLogString();
        
        return log;
    }
    
    
    private generateStackTrace(): string
    {
        let err = new Error();
        let splitted = err.stack.split(/\r?\n/g);
        let mark = "at new {0}".format(this.name);
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