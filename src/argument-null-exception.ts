import ArgumentException from "./argument-exception";
import Exception from "./exception";

export default class ArgumentNullException extends ArgumentException
{
    public constructor(argName: string);
    public constructor(argName: string, innerException: Exception);
    public constructor(argName: string, innerException?: Exception)
    {    
        super(argName, "is NULL", innerException);
    }
}