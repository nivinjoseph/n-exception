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
    suite("message property", () =>
    {
        test("should be formated when argumentException is provided an argName and a reason", () =>
        {
            let exp = new ArgumentException("i", "is valid.");
            
            assert.strictEqual(exp.message, "Argument 'i' is valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException(null, null); 
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException(null, "is valid."); 
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException(null, "");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException(null, " ");
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException("i", null); 
            
            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });
        
        test("", () =>
        {
            let exp = new ArgumentException("", null);
            
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
        
        test("", () =>
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

        test("argName should be the default value and reason should be formated when argName is an empty string and reason was provided", () =>
        {
            let exp = new ArgumentException("", "is valid");
            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });

        test("argName should be formated and reason should be the default value when argName was provided and reason is an empty string", () =>
        {
            let exp = new ArgumentException("i", "");
            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
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
            let innerExp = new ArgumentException("404", "is valid.");
            let exp = new ArgumentException("404", "is valid.", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
    });
});   