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

suite("ArgumentNullException", () =>
{
    suite("message property", () =>
    {
        test("should be formated when argName is provided", () =>
        {
            let exp = new ArgumentNullException("i");
            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });

        test("should be argName with default value when argName is an empty string", () =>
        {
            let exp = new ArgumentNullException("");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        test("should be argName with default value when argName is a space character", () =>
        {
            let exp = new ArgumentNullException(" ");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });
});