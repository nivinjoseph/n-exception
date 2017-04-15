import { Exception, ApplicationException } from "../src/index";

// Not a proper test
suite.skip("Exception", () =>
{
    class MyCustomException extends ApplicationException
    { }

    class Foo
    {
        public doFoo(): void
        {
            console.log("fooing");
            let baz = (new Bar()).createBaz();
        }
    }

    class Bar
    {
        public createBaz(): Baz
        {
            try
            {
                return this.createBazInternal();
            }
            catch (err)
            {
                throw new ApplicationException("Caught some exception", err);
            }
        }

        private createBazInternal(): Baz
        {
            return new Baz();
        }
    }

    class Baz
    {
        public constructor()
        {
            console.log("creating exception");
            let exp = new Error("this is a test");
            console.log("throwing exception");
            throw exp;
        }
    }
    
    function foo()
    {
        throw new ApplicationException("waa");
    }
    
    test("StackTracing", () =>
    {
        // throw new Error("waa");
        
        // foo();
        
        try
        {
            let foo = new Foo();
            foo.doFoo();
        }
        catch (err)
        {
            let exp = err as Exception;

            console.log("stackTrace", exp.stack);
            console.log("toString()", exp.toString());
        }
    });
});