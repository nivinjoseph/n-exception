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

suite("ArgumentException", () =>
{
    suite("exceptionType property", () =>
    {
        test("should have the right exceptionType", () =>
        {
            let exp = new ArgumentException("i", "test exception");
            
            assert.strictEqual(exp.exceptionType, "ArgumentException");
        });
    });
    
    suite("message property", () =>
    {
        test("should be formated when argumentException is provided an argName and a reason", () =>
        {
            let exp = new ArgumentException("i", "is valid");
            
            assert.strictEqual(exp.message, "Argument 'i' is valid.");
        });
        
        test("argName should be formated and reason should be the default value when argName was provided and reason is an empty string", () =>
        {
            let exp = new ArgumentException("i", "");

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });

        test("argName should be formated with value when provided and reason should be formated with default value when reason is a space character", () =>
        {
            let exp = new ArgumentException("i", " ");

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });
        
        test("argName should be formated with the value when argName is provided and reason should be formated with the default value when reason is null", () =>
        {
            let exp = new ArgumentException("i", null);

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });
        
        test("argName should be formated with default value and reason should be formated when argName is an empty string and reason was provided", () =>
        {
            let exp = new ArgumentException("", "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });

        test("argName should be formated with default value when argName is a space character and reason should be formated with value when provided", () =>
        {
            let exp = new ArgumentException(" ", "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });
        
        test("argName should be formated with default value when argName is a null and reason should be the formated with value when reason is provided", () =>
        {
            let exp = new ArgumentException(null, "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });
        
        test("should be formated with default values if argName and reason are null", () =>
        {
            let exp = new ArgumentException(null, null); 
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("argName and reason should be formated with default values when argName is null and reason is an empty string", () =>
        {
            let exp = new ArgumentException(null, "");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("argName and reason should be formated with default values when argName is null and reason is a space character", () =>
        {
            let exp = new ArgumentException(null, " ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("argName should be formated with the default value when argName is an empty string and reason should be formated with default value when reason is null", () =>
        {
            let exp = new ArgumentException("", null);
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("argName should be formated with the default value when argName is a space character and reason should be formated with default value when reason is null", () =>
        {
            let exp = new ArgumentException(" ", null); 
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        test("should be formated with default values when argName and reason are empty strings", () =>
        {
            let exp = new ArgumentException("", "");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        test("should be formated with default values when argName and reason are space characters", () =>
        {
            let exp = new ArgumentException(" ", " ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("should be default values when argName is an empty string and reason is a space character", () =>
        {
            let exp = new ArgumentException("", " ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("should be default values when argName is a space character and reason is an empty string", () =>
        {
            let exp = new ArgumentException(" ", "");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
    });
    
    suite("argName property", () =>
    {
        test("should be the value that was passed in when argName is provided", () =>
        {
            let exp = new ArgumentException("i", "is valid");

            assert.strictEqual(exp.argName, "i");
        });
        
        test("should be default value if argName is null", () =>
        {
            let exp = new ArgumentException(null, "is valid");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value if argName is an empty string", () =>
        {
            let exp = new ArgumentException("", "is valid");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
        
        test("should be default value if argName is a space character", () =>
        {
            let exp = new ArgumentException(" ", "is valid");
            
            assert.strictEqual(exp.argName, "<UNKNOWN>");
        }); 
    });
    
    suite("reason property", () =>
    {
        test("should be the value that was passed in when reason is provided", () =>
        {
            let exp = new ArgumentException("i", "is valid");
            
            assert.strictEqual(exp.reason, "is valid");
        });
        
        test("should be the default value when reason is null", () =>
        {
            let exp = new ArgumentException("i", null);
            
            assert.strictEqual(exp.reason, "is not valid");
        });
        
        test("should be the default value when reason is a space character", () =>
        {
            let exp = new ArgumentException("i", "");
            
            assert.strictEqual(exp.reason, "is not valid");
        });
        
        test("should be default value when reason is an empty string", () =>
        {
            let exp = new ArgumentException("i", " ");
            
            assert.strictEqual(exp.reason, "is not valid");
        });
    });
    
    suite("innerException property", () =>
    {
        test("should be null when no innerException arg is provided", () =>
        {
            let exp = new ArgumentException("404", "is valid.");
            
            assert.strictEqual(exp.innerException, null);
        });
        
        test("should be the same object as the provided arg when the innerException arg is provided", () =>
        {
            let innerExp = new ArgumentException("401", "is valid.");
            let exp = new ArgumentException("404", "is valid.", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
    
    suite("stackTrace property", () =>
    {
        test("should have value", () =>
        {
            let exp = new ArgumentException("404", "is valid.");
            
            assert.ok(exp.stackTrace);
        });
        
        test("should not be an empty string", () =>
        {
            let exp = new ArgumentException("404", "is valid.");
            
            assert.ok(exp.stackTrace !== "");
        });
        
        test("should not be a space character", () =>
        {
            let exp = new ArgumentException("404", "is valid.");
            
            assert.ok(exp.stackTrace !== " ");
        });
    });
});   