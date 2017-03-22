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
        
        test("should display <none> when message is not provided", () =>
        {
            let innerExp = "Hello";
            let exp = new ApplicationException("");
            
            assert.strictEqual(exp.message, "<none>");
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
        
        test.only("should return the message value when message argument is provided", () =>
        {
            let exp = new ApplicationException("You have an error"); 
            
            assert.strictEqual(exp.message, "You have an error");
        });
        
        test("should display null if no innerException argument is provided");
        test("should return Exception when innerException argument is provided");
        test("should display ");
        
        test("should return a string value if error exists");
        test("should return ..... if error does not exist");
        
        test("", () =>
        {
            let innerExp = new ApplicationException("hello");   
            let exp = new ApplicationException("hi", innerExp);
            
            assert.strictEqual(exp.innerException, innerExp);
        });
        
    });
});