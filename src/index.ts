import "@nivinjoseph/n-ext";
import { Exception } from "./exception.js";
import { ApplicationException } from "./application-exception.js";
import { ArgumentException } from "./argument-exception.js";
import { ArgumentNullException } from "./argument-null-exception.js";
import { InvalidArgumentException } from "./invalid-argument-exception.js";
import { InvalidOperationException } from "./invalid-operation-exception.js";
import { NotImplementedException } from "./not-implemented-exception.js";
import { ObjectDisposedException } from "./object-disposed-exception.js";


Error.prototype.toString = function (): string
{
    const obj = Object(this);
    if (obj !== this)
        throw new TypeError();

    let log = this.stack ?? "No stack trace";
    if ((this as Exception).innerException)
        log = log + "\n" + "Inner Exception --> " + (<Exception>this).innerException!.toString();

    return log;
};


export
{
    Exception,
    ApplicationException,
    ArgumentException,
    ArgumentNullException,
    InvalidArgumentException,
    InvalidOperationException,
    NotImplementedException,
    ObjectDisposedException
};