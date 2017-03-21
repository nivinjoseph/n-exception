import Exception from "./exception";
import "n-ext";

class ArgumentNullException extends Exception
{
    public constructor(argName: string);
    public constructor(argName: string, innerException: Exception);
    public constructor(argName: string, innerException?: Exception)
    {
        if (argName == null || argName.isEmptyOrWhiteSpace())
            argName = "<UNKNOWN>";

        const message = "Argument '{0}' is NULL.".format(argName);

        super(message, innerException);
    }
}

export default ArgumentNullException;