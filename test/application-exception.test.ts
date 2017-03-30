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

suite("ApplicationException", () =>
{
    suite("exceptionType property", () =>
    {
        test("should have the right exceptionType", () =>
        {
            let exp = new ApplicationException("test exception");
            assert.strictEqual(exp.exceptionType, "ApplicationException");
        });
    });

    suite("message property", () =>
    {
        test("should be default value when message arg is null", () =>
        {
            let exp = new ApplicationException(null);
            assert.strictEqual(exp.message, "<none>");
        });

        test("should be default value when message arg is a white space", () =>
        {
            let exp = new ApplicationException(" ");
            assert.strictEqual(exp.message, "<none>");
        });

        test("should be default value when message arg is an empty string", () =>
        {
            let exp = new ApplicationException("");
            assert.strictEqual(exp.message, "<none>");
        });

        test("should be the same message as the argument provided", () =>
        {
            let exp = new ApplicationException("You have an error");
            assert.strictEqual(exp.message, "You have an error");
        });
    });
    
    suite("toString method", () =>
    {
        test("should be formated with provided value when message argument is provided", () =>
        {
            let exp = new ApplicationException("You have an error");
            
            assert.strictEqual(exp.toString(), "ApplicationException: You have an error");
        });
        
        test("should be formated with default value for message when message is null", () =>
        {
            let exp = new ApplicationException(null);
            
            assert.strictEqual(exp.toString(), "ApplicationException: <none>");
        });
        
        test("should be formated with default value for message when message is a space character", () =>
        {
            let exp = new ApplicationException(" ");
            
            assert.strictEqual(exp.toString(), "ApplicationException: <none>");
        });
        
        test("should be formated with default value for message when message is an empty string", () =>
        {
            let exp = new ApplicationException("");
            
            assert.strictEqual(exp.toString(), "ApplicationException: <none>");
        });
    });

    suite("innerException property", () =>
    {
        test("should be null when no innerException arg is provided", () =>
        {
            let exp = new ApplicationException("404");
            
            assert.strictEqual(exp.innerException, null);
        });

        test("should be the same object as the provided arg when the innerException arg is provided", () =>
        {
            let innerExp = new ApplicationException("401");
            let exp = new ApplicationException("404", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    suite("stackTrace property", () =>
    {
        test("should have value", () =>
        {
            let exp = new ApplicationException("404");
            
            assert.ok(exp.stackTrace != null && exp.stackTrace !== undefined && !exp.stackTrace.isEmptyOrWhiteSpace());
        });
    });
}); 