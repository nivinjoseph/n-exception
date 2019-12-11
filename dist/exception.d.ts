import "@nivinjoseph/n-ext";
export declare class Exception extends Error {
    private readonly _name;
    private readonly _innerException;
    get name(): string;
    get innerException(): Error;
    constructor(message: string);
    constructor(message: string, innerException: Error);
}
