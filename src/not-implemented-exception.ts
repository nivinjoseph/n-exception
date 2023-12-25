import { Exception } from "./exception.js";


export class NotImplementedException extends Exception
{
    public constructor()
    {
        super("Not implemented.");
    }
}