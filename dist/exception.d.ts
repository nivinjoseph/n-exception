export declare abstract class Exception extends Error {
    private readonly _name;
    get name(): string;
    get innerException(): Error | null;
    constructor(message: string, innerException?: Error);
}
//# sourceMappingURL=exception.d.ts.map