import "@nivinjoseph/n-ext";
import assert from "node:assert";
import { describe, test } from "node:test";
import
    {
        // ApplicationException,
        // ArgumentException,
        // ArgumentNullException,
        // InvalidArgumentException,
        InvalidOperationException
    } from "../src/index.js";

await describe("InvalidOperationException", async () =>
{
    await describe("name property", async () =>
    {
        await test("should be the right name", () =>
        {
            const exp = new InvalidOperationException("test exception");

            assert.strictEqual(exp.name, "InvalidOperationException");
        });
    });

    await describe("message property", async () =>
    {
        await test("should be formated with provided value when operation is provided", () =>
        {
            const exp = new InvalidOperationException("i");

            assert.strictEqual(exp.message, "Operation is invalid due to reason 'i'.");
        });

        await test("should be formated with default value when operation value is null", () =>
        {
            const exp = new InvalidOperationException(null as any);

            assert.strictEqual(exp.message, "Operation is invalid due to reason '<UNKNOWN>'.");
        });

        await test("should be formated with default value when operation value is an empty string", () =>
        {
            const exp = new InvalidOperationException("");

            assert.strictEqual(exp.message, "Operation is invalid due to reason '<UNKNOWN>'.");
        });

        await test("should be formated with default value when operation value is a space character", () =>
        {
            const exp = new InvalidOperationException(" ");

            assert.strictEqual(exp.message, "Operation is invalid due to reason '<UNKNOWN>'.");
        });
    });

    await describe("operation property", async () =>
    {
        await test("should be the value provided when operation is provided", () =>
        {
            const exp = new InvalidOperationException("i");

            assert.strictEqual(exp.reason, "i");
        });

        await test("should be default value when operation is null", () =>
        {
            const exp = new InvalidOperationException(null as any);

            assert.strictEqual(exp.reason, "<UNKNOWN>");
        });

        await test("should be default value when operation is an empty string", () =>
        {
            const exp = new InvalidOperationException("");

            assert.strictEqual(exp.reason, "<UNKNOWN>");
        });

        await test("should be default value when operation is a space character", () =>
        {
            const exp = new InvalidOperationException(" ");

            assert.strictEqual(exp.reason, "<UNKNOWN>");
        });
    });

    await describe("innerException property", async () =>
    {
        await test("should be null when no innerException argument is provided", () =>
        {
            const exp = new InvalidOperationException("i");

            assert.strictEqual(exp.innerException, null);
        });

        await test("should be same object as the innerException argument that is passed in", () =>
        {
            const innerExp = new InvalidOperationException("inner");
            const exp = new InvalidOperationException("outer", innerExp);
            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    await describe("stack property", async () =>
    {
        await test("should have value", () =>
        {
            const exp = new InvalidOperationException("404");

            assert.ok(exp.stack != null && exp.stack.isNotEmptyOrWhiteSpace());
        });
    });
});