import { ArgumentException } from "./argument-exception.js";


export class ArgumentNullException extends ArgumentException
{
    public constructor(argName: string, innerException?: Error)
    {    
        super(argName, "is NULL", innerException);
    }
}