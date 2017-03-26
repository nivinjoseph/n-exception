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
            let exp = new MyCustomException("this is a test");
            console.log("throwing exception");
            throw exp;
        }
    }
    
    test("StackTracing", () =>
    {
        try
        {
            let foo = new Foo();
            foo.doFoo();
        }
        catch (err)
        {
            let exp = err as Exception;

            console.log("toString()", exp.toString());
            console.log("stackTrace", exp.stackTrace);
            console.log("toLogString()", exp.toLogString());
        }
    });
});