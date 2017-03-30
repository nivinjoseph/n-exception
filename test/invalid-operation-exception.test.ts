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
    suite("exceptionType property", () =>
    {
        test("should be the right exceptionType", () =>
        {
            let exp = new InvalidOperationException("test exception");
            
            assert.strictEqual(exp.exceptionType, "InvalidOperationException");
        });
    });
    
    suite("message property", () =>
    {
        test("should be formated with provided value when operation is provided", () =>
        {
            let exp = new InvalidOperationException("i");
            
            assert.strictEqual(exp.message, "Operation 'i' is invalid.");
        });
        
        test("should be formated with default value when operation value is null", () =>
        {
            let exp = new InvalidOperationException(null);
            
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });

        test("should be formated with default value when operation value is an empty string", () =>
        {
            let exp = new InvalidOperationException("");
            
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });

        test("should be formated with default value when operation value is a space character", () =>
        {
            let exp = new InvalidOperationException(" ");
            
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
    });
    
    suite("operation property", () =>
    {
        test("should be the value provided when operation is provided", () =>
        {
            let exp = new InvalidOperationException("i");
            
            assert.strictEqual(exp.operation, "i");
        });
        
        test("should be default value when operation is null", () =>
        {
            let exp = new InvalidOperationException(null);
            
            assert.strictEqual(exp.operation, "<UNKNOWN>");
        });
        
        test("should be default value when operation is an empty string", () =>
        {
            let exp = new InvalidOperationException("");
            
            assert.strictEqual(exp.operation, "<UNKNOWN>");
        });
        
        test("should be default value when operation is a space character", () =>
        {
            let exp = new InvalidOperationException(" ");
            
            assert.strictEqual(exp.operation, "<UNKNOWN>");
        });
    });
    
    suite("innerException property", () =>
    {
        test("should be null when no innerException argument is provided", () =>
        {
            let exp = new InvalidOperationException("i");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should be same object as the innerException argument that is passed in", () =>
        {
            let innerExp = new InvalidOperationException("i");
            let exp = new InvalidOperationException("i", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
    
    suite("stackTrace property", () =>
    {
        test("should have value", () =>
        {
            let exp = new InvalidOperationException("404");
            
            assert.ok(exp.stackTrace != null && exp.stackTrace !== undefined && !exp.stackTrace.isEmptyOrWhiteSpace());
        });
    });
});