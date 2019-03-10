import { Exception } from "./exception";
import "@nivinjoseph/n-ext";


export class ObjectDisposedException extends Exception
{
    public constructor(disposed: object)
    {
        super(`Object of type '${disposed ? (<Object>disposed).getTypeName() : "UNKNOWN"}' has been disposed.`);
    }
}