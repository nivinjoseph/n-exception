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
    suite("exceptionType property", () =>
    {
        test("should be the right exceptionType", () =>
        {
            let exp = new InvalidArgumentException("test exception");
            
            assert.strictEqual(exp.exceptionType, "InvalidArgumentException");
        });  
    });
    
    suite("message property", () =>
    {
        test("should be formated when argName is provided", () =>
        {
            let exp = new InvalidArgumentException("i");
            
            assert.strictEqual(exp.message, "Argument 'i' is invalid.");
        });
        
        test("should be formated with default value when argName is null", () =>
        {
            let exp = new InvalidArgumentException(null);
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });

        test("should be formated with default value when argName is an empty string", () =>
        {
            let exp = new InvalidArgumentException("");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });

        test("should be formated with default value when argName is a space character", () =>
        {
            let exp = new InvalidArgumentException(" ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });
    });
    
    suite("base classes reason property", () =>
    {
        test("should be 'is invalid' when passing reason parameter to base class", () =>
        {
            let exp = new InvalidArgumentException("i");
            
            assert.strictEqual(exp.reason, "is invalid");
        });
    });
    
    suite("argName property", () =>
    {
        test("should be value that was passed in when argName is provided", () =>
        {
            let exp = new InvalidArgumentException("i");
            
            assert.strictEqual(exp.argName, "i");
        });
        
        test("should be default value if argName is null", () =>
        {
            let exp = new InvalidArgumentException(null);
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value if argName is a space character", () =>
        {
            let exp = new InvalidArgumentException(" ");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value if argName is an empty string", () =>
        {
            let exp = new InvalidArgumentException("");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
    });
    
    suite("innerException property", () =>
    {
        test("should be null when no innerException argument is provided", () =>
        {
            let exp = new InvalidArgumentException("401");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should be the same object as the innerException argument that is passed in", () =>
        {
            let innerExp = new InvalidArgumentException("404");
            let exp = new InvalidArgumentException("401", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
    
    suite("stackTrace property", () =>
    {
        test("should have value", () =>
        {
            let exp = new InvalidArgumentException("404");
            
            assert.ok(exp.stackTrace);
        });
        
        test("should not be an empty string", () =>
        {
            let exp = new InvalidArgumentException("404");
            
            assert.ok(exp.stackTrace !== "");
        });
        
        test("should not be a space character", () =>
        {
            let exp = new InvalidArgumentException("404");
            
            assert.ok(exp.stackTrace !== " ");
        });
    });
});