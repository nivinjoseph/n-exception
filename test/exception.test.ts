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
        
        test("should display <none> when message is a white space", () =>
        {
            let exp = new ApplicationException(" ");
            
            assert.strictEqual(exp.message, "<none>");
        });
        
        test("should display <none> when message is an empty string", () =>
        {
            let exp = new ApplicationException("");
            
            assert.strictEqual(exp.message, "<none>");
        });
        
        test("should return the message value when message argument is provided", () =>
        {
            let exp = new ApplicationException("You have an error"); 
            
            assert.strictEqual(exp.message, "You have an error");
        });
        
        test("should return null if no innerException argument is provided", () =>
        {
            let exp = new ApplicationException("404");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should return Exception object when innerException argument is provided", () =>
        {
            let innerExp = new ApplicationException("401");
            let exp = new ApplicationException("404", innerExp);    
            
            assert.strictEqual(exp.innerException, { _message: "401", _innerException: null });
        });
        
        test("should return message preappended with the string Error", () =>
        {
            let exp = new ApplicationException("404");
            
            assert.strictEqual(exp.stackTrace, "Error: 404");
        });
        
    });
    
    suite("ArgumentException", () =>
    {        
        test("should return message formated when provided argName and reason", () =>
        {
            let exp = new ArgumentException("i", "is valid");
            
            assert.strictEqual(exp.message, "Argument 'i' is valid.");
        }); 
        
        test("should return argName and reason with default value when argName and reason are empty strings", () =>
        {
            let exp = new ArgumentException("", "");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("should return argName and reason with default value when argName and reason are space characters", () =>
        {
            let exp = new ArgumentException(" ", " ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("should return argName with default value and formated reason when argName is an empty string and reason was provided", () =>
        {
            let exp = new ArgumentException("", "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });
        
        test("should return formated argName and default reason value when argName was provided and reason is an empty string", () =>
        {
            let exp = new ArgumentException("i", "");
            
            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });
        

    });
    
    suite("ArgumentNullException", () =>
    {
        test("should return formated message when argName is provided", () =>
        {
            let exp = new ArgumentNullException("i");
            
            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });
        
        test("should return argName with default value when argName is an empty string", () =>
        {
            let exp = new ArgumentNullException("");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
        
        test("should return argName with default value when argName is a space character", () =>
        {
            let exp = new ArgumentNullException(" ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });
    
    suite("InvalidArgumentException", () =>
    {
        test("should return formated message when argName is provided", () =>
        {
            let exp = new InvalidArgumentException("i");
            
            assert.strictEqual(exp.message, "Argument 'i' is invalid");
        });
        
        test("should return argName with default value when argName is an empty string", () =>
        {
            let exp = new InvalidArgumentException("");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });
        
        test("should return argName with default value whe argName is a space character", () =>
        {
            let exp = new InvalidArgumentException(" ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid");
        });
    });
    
    suite("InvalidOperationException", () =>
    {
        test("should return formated message when operation is provided", () =>
        {
            let exp = new InvalidOperationException("i");
            
            assert.strictEqual(exp.message, "Operation 'i' is invalid.");
        });
        
        test("should return default operation value when operation is an empty string", () =>
        {
            let exp = new InvalidOperationException("");
            
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
        
        test("should return default operation value when operation is a space character", () =>
        {
            let exp = new InvalidOperationException(" ");
            
            assert.strictEqual(exp.message, "Operation '<UNKNOWN>' is invalid.");
        });
    });
});