import crypto from 'crypto';
import { URL } from 'whatwg-url';

class GoogleMapsStaticApiUrlSigner {
  private _unsignedUrlStub: string 
  private _secret: string

  constructor(initUnsignedUrlStub: string, initSecret: string) {
    this._unsignedUrlStub = initUnsignedUrlStub;
    this._secret = initSecret;
  }

  /**
   * Convert from 'web safe' base64 to true base64.
   * @param safeEncodedString The code you want to translate
   *                          from a web safe form.
   */
  
  private removeWebSafe(safeEncodedString: string) {
    return safeEncodedString.replace(/-/g, '+').replace(/_/g, '/');
  }
  
  /**
   * Convert from true base64 to 'web safe' base64
   * @param  encodedString The code you want to translate to a
   *                       web safe form.
   */

  private makeWebSafe(encodedString: string) {
    return encodedString.replace(/\+/g, '-').replace(/\//g, '_');
  }
  
  /**
   * Takes a base64 code and decodes it.
   * @param code The encoded data.
   */

  private decodeBase64Hash(code: string) {
    // "new Buffer(...)" is deprecated. Use Buffer.from if it exists.
    return Buffer.from ? Buffer.from(code, 'base64') : new Buffer(code, 'base64');
  } 
  
  /**
   * Takes a key and signs the data with it.
   * @param key  Your unique secret key.
   * @param data The url to sign.
   */

  private encodeBase64Hash(key: string | Buffer, data: string) {
    return crypto.createHmac('sha1', key).update(data).digest('base64');
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

export default GoogleMapsStaticApiUrlSigner



