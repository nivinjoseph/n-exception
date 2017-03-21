import * as assert from "assert";
import "n-ext";
import  
{
    ApplicationException,
    ArgumentException,
    ArgumentNullException,
    InvalidArgumentException,
    InvalidOperationException
} from "../src/index";

suite("exceptions", () =>
{
    suite("ApplicationException", () =>
    {
        test("should have the right exceptionType", () =>
        {
            let exp = new ApplicationException("test exception");
            let exceptionType = exp.exceptionType;
            assert.strictEqual(exp.exceptionType, "ApplicationException");
        });
    });
});