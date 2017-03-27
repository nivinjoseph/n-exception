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
    suite("exceptionType property", () =>
    {
        test("should have the right exceptionType", () =>
        {
            let exp = new ArgumentNullException("test exception");
            
            assert.strictEqual(exp.exceptionType, "ArgumentNullException");
        });
    });
    
    suite("message property", () =>
    {
        test("should be formated when argName is provided", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });
        
        test("should be formated with default value when argName is null", () =>
        {
            let exp = new ArgumentNullException(null);
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        test("should be formated with default value when argName is an empty string", () =>
        {
            let exp = new ArgumentNullException("");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        test("should be foramted with default value when argName is a space character", () =>
        {
            let exp = new ArgumentNullException(" ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });
    
    suite("base classes reason property", () =>
    {
        test("should be 'is NULL' when passing reason parameter to base class", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.reason, "is NULL");
        });
    });
    
    suite("innerException property", () =>
    {
        test("should be null when no innerException argument is provided", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should be the same object that was passed in as an innerException argument", () =>
        {
            let innerExp = new ArgumentNullException("401");
            let exp = new ArgumentNullException("404", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
    
    suite("stackTrace property", () =>
    {
        test("should have value", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.ok(exp.stackTrace);
        });
        
        test("should not be an empty string", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.ok(exp.stackTrace !== "");
        });
        
        test("should not be a space character", () =>
        {
            let exp = new ArgumentNullException("404");
            
            assert.ok(exp.stackTrace !== " ");
        });
    });
});