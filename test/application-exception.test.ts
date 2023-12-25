import "@nivinjoseph/n-ext";
import assert from "node:assert";
import { describe, test } from "node:test";
import
{
    ApplicationException
    // ArgumentException,
    // ArgumentNullException,
    // InvalidArgumentException,
    // InvalidOperationException
} from "../src/index.js";


await describe("ApplicationException", async () =>
{
    await describe("name property", async () =>
    {
        await test("should have the right name", () =>
        {
            const exp = new ApplicationException("test exception");
            assert.strictEqual(exp.name, "ApplicationException");
        });
    });

    await describe("message property", async () =>
    {
        await test("should be default value when message arg is null", () =>
        {
            const exp = new ApplicationException(null as any);
            assert.strictEqual(exp.message, "<none>");
        });

        await test("should be default value when message arg is a white space", () =>
        {
            const exp = new ApplicationException(" ");
            assert.strictEqual(exp.message, "<none>");
        });

        await test("should be default value when message arg is an empty string", () =>
        {
            const exp = new ApplicationException("");
            assert.strictEqual(exp.message, "<none>");
        });

        await test("should be the same message as the argument provided", () =>
        {
            const exp = new ApplicationException("You have an error");
            assert.strictEqual(exp.message, "You have an error");
        });
    });

    await describe("toString method", async () =>
    {
        await test("should be formated with provided value when message argument is provided", () =>
        {
            const exp = new ApplicationException("You have an error");

            assert.strictEqual(exp.toString().split("\n")[0], "ApplicationException: You have an error");
        });

        await test("should be formated with default value for message when message is null", () =>
        {
            const exp = new ApplicationException(null as any);

            assert.strictEqual(exp.toString().split("\n")[0], "ApplicationException: <none>");
        });

        await test("should be formated with default value for message when message is a space character", () =>
        {
            const exp = new ApplicationException(" ");

            assert.strictEqual(exp.toString().split("\n")[0], "ApplicationException: <none>");
        });

        await test("should be formated with default value for message when message is an empty string", () =>
        {
            const exp = new ApplicationException("");

            assert.strictEqual(exp.toString().split("\n")[0], "ApplicationException: <none>");
        });
    });

    await describe("innerException property", async () =>
    {
        await test("should be null when no innerException arg is provided", () =>
        {
            const exp = new ApplicationException("404");

            assert.strictEqual(exp.innerException, null);
        });

        await test("should be the same object as the provided arg when the innerException arg is provided", () =>
        {
            const innerExp = new ApplicationException("401");
            const exp = new ApplicationException("404", innerExp);

            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    await describe("stack property", async () =>
    {
        await test("should have value", () =>
        {
            const exp = new ApplicationException("404");

            assert.ok(exp.stack != null && exp.stack.isNotEmptyOrWhiteSpace());
        });
    });
}); 