import { Exception } from "./exception";
import "@nivinjoseph/n-ext";
export declare class ObjectDisposedException extends Exception {
    constructor(disposed: object | string);
}
