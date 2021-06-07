declare class GoogleMapsStaticApiUrlSigner {
    private _unsignedUrlStub;
    private _secret;
    constructor(initUnsignedUrlStub: string, initSecret: string);
    /**
     * Convert from 'web safe' base64 to true base64.
     * @param safeEncodedString The code you want to translate
     *                          from a web safe form.
     */
    private removeWebSafe;
    /**
     * Convert from true base64 to 'web safe' base64
     * @param  encodedString The code you want to translate to a
     *                       web safe form.
     */
    private makeWebSafe;
    /**
     * Takes a base64 code and decodes it.
     * @param code The encoded data.
     */
    private decodeBase64Hash;
    /**
     * Takes a key and signs the data with it.
     * @param key  Your unique secret key.
     * @param data The url to sign.
     */
    private encodeBase64Hash;
    /**
     * Sign a URL using a secret key.
     */
    sign(): string;
}
export default GoogleMapsStaticApiUrlSigner;
