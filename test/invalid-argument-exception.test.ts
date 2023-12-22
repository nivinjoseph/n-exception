import "@nivinjoseph/n-ext";
import assert from "node:assert";
import { describe, test } from "node:test";
import
    {
        // ApplicationException,
        // ArgumentException,
        // ArgumentNullException,
        InvalidArgumentException
        // InvalidOperationException
    } from "../src/index.js";

await describe("InvalidArgumentException", async () =>
{
    await describe("name property", async () =>
    {
        await test("should be the right name", () =>
        {
            const exp = new InvalidArgumentException("test exception");

            assert.strictEqual(exp.name, "InvalidArgumentException");
        });
    });

    await describe("message property", async () =>
    {
        await test("should be formated with value provided when argName is provided", () =>
        {
            const exp = new InvalidArgumentException("i");

            assert.strictEqual(exp.message, "Argument 'i' is invalid.");
        });

        await test("should be formated with default value when argName is null", () =>
        {
            const exp = new InvalidArgumentException(null as any);

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });

        await test("should be formated with default value when argName is an empty string", () =>
        {
            const exp = new InvalidArgumentException("");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });

        await test("should be formated with default value when argName is a space character", () =>
        {
            const exp = new InvalidArgumentException(" ");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is invalid.");
        });
    });

    await describe("base classes reason property", async () =>
    {
        await test("should be 'is invalid'", () =>
        {
            const exp = new InvalidArgumentException("i");

            assert.strictEqual(exp.reason, "is invalid");
        });
    });

    await describe("argName property", async () =>
    {
        await test("should be value that is provided when argName is provided", () =>
        {
            const exp = new InvalidArgumentException("i");

            assert.strictEqual(exp.argName, "i");
        });

        await test("should be default value when argName is null", () =>
        {
            const exp = new InvalidArgumentException(null as any);

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is a space character", () =>
        {
            const exp = new InvalidArgumentException(" ");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is an empty string", () =>
        {
            const exp = new InvalidArgumentException("");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

    });

    await describe("innerException property", async () =>
    {
        await test("should be null when no innerException argument is provided", () =>
        {
            const exp = new InvalidArgumentException("401");

            assert.strictEqual(exp.innerException, null);
        });

        await test("should be the same object as the innerException argument that is passed in", () =>
        {
            const innerExp = new InvalidArgumentException("404");
            const exp = new InvalidArgumentException("401", innerExp);

            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    await describe("stack property", async () =>
    {
        await test("should have value", () =>
        {
            const exp = new InvalidArgumentException("404");

            assert.ok(exp.stack != null && exp.stack.isNotEmptyOrWhiteSpace());
        });
    });
});