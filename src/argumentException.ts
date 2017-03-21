import Exception from "./exception";
import "n-ext";

class ArgumentException extends Exception
{
    public get exceptionType(): string { return "ArgumentException"; }

    
    public constructor(argName: string, reason: string);
    public constructor(argName: string, reason: string, innerException: Exception);
    public constructor(argName: string, reason: string, innerException?: Exception)
    {
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";

        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "is not valid";
        
        const message = "Argument '{0}' {1}.".format(argName, reason);

        super(message, innerException);
    }
}

export default ArgumentException;