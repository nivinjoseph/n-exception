import "@nivinjoseph/n-ext";
import { Exception } from "./exception.js";
import { ApplicationException } from "./application-exception.js";
import { ArgumentException } from "./argument-exception.js";
import { ArgumentNullException } from "./argument-null-exception.js";
import { InvalidArgumentException } from "./invalid-argument-exception.js";
import { InvalidOperationException } from "./invalid-operation-exception.js";
import { NotImplementedException } from "./not-implemented-exception.js";
import { ObjectDisposedException } from "./object-disposed-exception.js";
Error.prototype.toString = function () {
    var _a;
    const obj = Object(this);
    if (obj !== this)
        throw new TypeError();
    let log = (_a = this.stack) !== null && _a !== void 0 ? _a : "No stack trace";
    if (this.innerException)
        log = log + "\n" + "Inner Exception --> " + this.innerException.toString();
    return log;
};
export { Exception, ApplicationException, ArgumentException, ArgumentNullException, InvalidArgumentException, InvalidOperationException, NotImplementedException, ObjectDisposedException };
//# sourceMappingURL=index.js.map