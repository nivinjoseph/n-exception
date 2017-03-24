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

suite("InvalidArgumentException", () =>
{
    suite("message property", () =>
    {
        test("should be formated when argName is provided", () =>
        {
            let exp = new InvalidArgumentException("i");
            assert.strictEqual(exp.message, "Argument 'i' is invalid");
        });

        test("should be argName with default value when argName is an empty string", () =>
        {
            let exp = new InvalidArgumentException("");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });

        test("should be argName with default value when argName is a space character", () =>
        {
            let exp = new InvalidArgumentException(" ");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });
    });
});