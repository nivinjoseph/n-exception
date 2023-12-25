import "@nivinjoseph/n-ext";
import assert from "node:assert";
import { describe, test } from "node:test";
import
{
    // ApplicationException,
    ArgumentException
    // ArgumentNullException,
    // InvalidArgumentException,
    // InvalidOperationException
} from "../src/index.js";

await describe("ArgumentException", async () =>
{
    await describe("name property", async () =>
    {
        await test("should have the right name", () =>
        {
            const exp = new ArgumentException("i", "test exception");

            assert.strictEqual(exp.name, "ArgumentException");
        });
    });

    await describe("message property", async () =>
    {
        await test("should be formated when argumentException is provided an argName and a reason", () =>
        {
            const exp = new ArgumentException("i", "is valid");

            assert.strictEqual(exp.message, "Argument 'i' is valid.");
        });

        await test("should be formated with provided value for argName and default value for reason when argName is provided and reason is an empty string", () =>
        {
            const exp = new ArgumentException("i", "");

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });

        await test("should be formated with provided value for argName and default value for reason when argName is provided and reason is a space character", () =>
        {
            const exp = new ArgumentException("i", " ");

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });

        await test("should be formated with provided value for argName and default value for reason when argName is provided and reason is null", () =>
        {
            const exp = new ArgumentException("i", null as any);

            assert.strictEqual(exp.message, "Argument 'i' is not valid.");
        });

        await test("should be formated with default value for argName and provided value for reason when argName is an empty string and reason is provided", () =>
        {
            const exp = new ArgumentException("", "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });

        await test("should be formated with default value for argName and provided value for reason when argName is a space character and reason is provided", () =>
        {
            const exp = new ArgumentException(" ", "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });

        await test("should be formated with default value for argName and provided value for reason when argName is null and reason is provided", () =>
        {
            const exp = new ArgumentException(null as any, "is valid");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is valid.");
        });

        await test("should be formated with default values when argName and reason are null", () =>
        {
            const exp = new ArgumentException(null as any, null as any);

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName is null and reason is an empty string", () =>
        {
            const exp = new ArgumentException(null as any, "");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName is null and reason is a space character", () =>
        {
            const exp = new ArgumentException(null as any, " ");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName is an empty string and reason is null", () =>
        {
            const exp = new ArgumentException("", null as any);

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName is a space character and reason is null", () =>
        {
            const exp = new ArgumentException(" ", null as any);

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName and reason are empty strings", () =>
        {
            const exp = new ArgumentException("", "");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be formated with default values when argName and reason are space characters", () =>
        {
            const exp = new ArgumentException(" ", " ");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be default values when argName is an empty string and reason is a space character", () =>
        {
            const exp = new ArgumentException("", " ");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });

        await test("should be default values when argName is a space character and reason is an empty string", () =>
        {
            const exp = new ArgumentException(" ", "");

            assert.strictEqual(exp.message, "Argument '<UNKNOWN>' is not valid.");
        });
    });

    await describe("argName property", async () =>
    {
        await test("should be the value that was passed in when argName is provided", () =>
        {
            const exp = new ArgumentException("i", "is valid");

            assert.strictEqual(exp.argName, "i");
        });

        await test("should be default value when argName is null", () =>
        {
            const exp = new ArgumentException(null as any, "is valid");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is an empty string", () =>
        {
            const exp = new ArgumentException("", "is valid");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });

        await test("should be default value when argName is a space character", () =>
        {
            const exp = new ArgumentException(" ", "is valid");

            assert.strictEqual(exp.argName, "<UNKNOWN>");
        });
    });

    await describe("reason property", async () =>
    {
        await test("should be value that was passed in when reason is provided", () =>
        {
            const exp = new ArgumentException("i", "is valid");

            assert.strictEqual(exp.reason, "is valid");
        });

        await test("should be default value when reason is null", () =>
        {
            const exp = new ArgumentException("i", null as any);

            assert.strictEqual(exp.reason, "is not valid");
        });

        await test("should be default value when reason is a space character", () =>
        {
            const exp = new ArgumentException("i", "");

            assert.strictEqual(exp.reason, "is not valid");
        });

        await test("should be default value when reason is an empty string", () =>
        {
            const exp = new ArgumentException("i", " ");

            assert.strictEqual(exp.reason, "is not valid");
        });
    });

    await describe("innerException property", async () =>
    {
        await test("should be null when no innerException arg is provided", () =>
        {
            const exp = new ArgumentException("404", "is valid.");

            assert.strictEqual(exp.innerException, null);
        });

        await test("should be the same object as the provided arg when the innerException arg is provided", () =>
        {
            const innerExp = new ArgumentException("401", "is valid.");
            const exp = new ArgumentException("404", "is valid.", innerExp);

            assert.strictEqual(exp.innerException, innerExp);
        });
    });

    await describe("stack property", async () =>
    {
        await test("should have value", () =>
        {
            const exp = new ArgumentException("404", "is valid.");

            assert.ok(exp.stack != null && exp.stack.isNotEmptyOrWhiteSpace());
        });
    });
});   