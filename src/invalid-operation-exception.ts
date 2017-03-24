import Exception from "./exception";
import "n-ext";

class InvalidOperationException extends Exception
{
    public constructor(operation: string);
    public constructor(operation: string, innerException: Exception);
    public constructor(operation: string, innerException?: Exception)
    {
        if (operation == null || operation.isEmptyOrWhiteSpace())
            operation = "<UNKNOWN>";

        const message = "Operation '{0}' is invalid.".format(operation);

        super(message, innerException);
    }
}

export default InvalidOperationException;