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

suite("InvalidOperationException", () =>
{
    suite("operation property", () =>
    {
        test("should be formated when operation is provided", () =>
        {
            let exp = new InvalidOperationException("i");
            assert.strictEqual(exp.message, "Operation 'i' is invalid.");
        });

        test("should be default operation value when operation is an empty string", () =>
        {
            let exp = new InvalidOperationException("");
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });

        test("should be default operation value when operation is a space character", () =>
        {
            let exp = new InvalidOperationException(" ");
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
    });
});