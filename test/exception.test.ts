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
            assert.strictEqual(exp.exceptionType, "ApplicationException");
        });
        
        test("", () =>
        {
            
        });
    });
});