/// <reference types="node" />
import * as crypto from 'crypto';
import { PasswordMiddleware } from '.';
export declare class None implements PasswordMiddleware {
    process(provided: string): Promise<string>;
}
export declare class Hash implements PasswordMiddleware {
    private algorithm;
    private encoding;
    constructor(algorithm: string, encoding?: crypto.HexBase64Latin1Encoding);
    process(provided: string): Promise<string>;
}
export declare abstract class RSA implements PasswordMiddleware {
    protected encoding: string;
    constructor(encoding?: string);
    process(provided: string): Promise<string>;
    protected abstract privateKey(): Promise<string | crypto.RsaPrivateKey>;
}
export declare class MemoryRSA extends RSA {
    private _privateKey;
    constructor(encoding: string | undefined, _privateKey: string);
    protected privateKey(): Promise<string>;
}
export declare class FileRSA extends RSA {
    private privateKeyFile;
    constructor(encoding: string | undefined, privateKeyFile: string);
    protected privateKey(): Promise<string | crypto.RsaPrivateKey>;
}
