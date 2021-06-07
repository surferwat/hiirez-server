"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class GoogleMapsStaticApiUrlSigner {
    constructor(initUnsignedUrlStub, initSecret) {
        this._unsignedUrlStub = initUnsignedUrlStub;
        this._secret = initSecret;
    }
    /**
     * Convert from 'web safe' base64 to true base64.
     * @param safeEncodedString The code you want to translate
     *                          from a web safe form.
     */
    removeWebSafe(safeEncodedString) {
        return safeEncodedString.replace(/-/g, '+').replace(/_/g, '/');
    }
    /**
     * Convert from true base64 to 'web safe' base64
     * @param  encodedString The code you want to translate to a
     *                       web safe form.
     */
    makeWebSafe(encodedString) {
        return encodedString.replace(/\+/g, '-').replace(/\//g, '_');
    }
    /**
     * Takes a base64 code and decodes it.
     * @param code The encoded data.
     */
    decodeBase64Hash(code) {
        // "new Buffer(...)" is deprecated. Use Buffer.from if it exists.
        return Buffer.from ? Buffer.from(code, 'base64') : new Buffer(code, 'base64');
    }
    /**
     * Takes a key and signs the data with it.
     * @param key  Your unique secret key.
     * @param data The url to sign.
     */
    encodeBase64Hash(key, data) {
        return crypto_1.default.createHmac('sha1', key).update(data).digest('base64');
    }
    /**
     * Sign a URL using a secret key.
     */
    sign() {
        const safeSecret = this.decodeBase64Hash(this.removeWebSafe(this._secret));
        const hashedSignature = this.makeWebSafe(this.encodeBase64Hash(safeSecret, this._unsignedUrlStub));
        const signedUrlStub = this._unsignedUrlStub.toString() + '&signature=' + hashedSignature;
        return signedUrlStub;
    }
}
exports.default = GoogleMapsStaticApiUrlSigner;
//# sourceMappingURL=GoogleMapsStaticApiUrlSigner.js.map