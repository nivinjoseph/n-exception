import "@nivinjoseph/n-ext";
import assert from "node:assert";
import { describe, test } from "node:test";
import
    {
        // ApplicationException,
        // ArgumentException,
        ArgumentNullException
        // InvalidArgumentException,
        // InvalidOperationException
    } from "../src/index.js";

await describe("ArgumentNullException", async () =>
{
    await describe("name property", async () =>
    {
        await test("should have the right name", () =>
        {
            const exp = new ArgumentNullException("test exception");

            assert.strictEqual(exp.name, "ArgumentNullException");
        });
    });

    await describe("message property", async () =>
    {
        await test("should be formated with provided value when argName is provided", () =>
        {
            const exp = new ArgumentNullException("i");

            assert.strictEqual(exp.message, "Argument 'i' is NULL.");
        });

        await test("should be formated with default value when argName is null", () =>
        {
            const exp = new ArgumentNullException(null as any);

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        await test("should be formated with default value when argName is an empty string", () =>
        {
            const exp = new ArgumentNullException("");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });

        await test("should be formated with default value when argName is a space character", () =>
        {
            const exp = new ArgumentNullException(" ");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is NULL.");
        });
    });

    await describe("base class reason property", async () =>
    {
        await test("should be 'is NULL'", () =>
        {
            const exp = new ArgumentNullException("i");

            assert.strictEqual(exp.reason, "is NULL");
        });
    });

    await describe("argName property", async () =>
    {
        await test("should be value that is provided when argName argument is provided", () =>
        {
            const exp = new ArgumentNullException("i");

            assert.strictEqual(exp.argName, "i");
        });

        await test("should be default value when argName is null", () =>
        {
            const exp = new ArgumentNullException(null as any);

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is a space character", () =>
        {
            const exp = new ArgumentNullException(" ");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is an empty string", () =>
        {
            const exp = new ArgumentNullException("");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
    });

    await describe("innerException property", async () =>
    {
        await test("should be null when no innerException argument is provided", () =>
        {
            const exp = new ArgumentNullException("404");

            assert.strictEqual(exp.innerException, null);
        });

        await test("should be the same object that was provided as the innerException argument", () =>
        {
            const innerExp = new ArgumentNullException("401");
            const exp = new ArgumentNullException("404", innerExp);

            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    await describe("stack property", async () =>
    {
        await test("should have value", () =>
        {
            const exp = new ArgumentNullException("404");

            assert.ok(exp.stack != null && !exp.stack.isEmptyOrWhiteSpace());
        });
    });
});