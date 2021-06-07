import { config } from '../../config'
import GoogleMapsStaticApiUrlSigner from '../lib/GoogleMapsStaticApiUrlSigner'

// https://developers.google.com/maps/documentation/streetview/get-api-key#sample-code-for-url-signing

class UrlSigningService {

    static signUrl(unsignedUrlStub: string): string {
        let signedUrlStub: string = '';
        const privateKey = config.googleMapsStaticAPIPrivateKey;
        if (privateKey == null) {
            throw new Error('invalid private key');
        }
        const urlSigner = new GoogleMapsStaticApiUrlSigner(unsignedUrlStub, privateKey);
        signedUrlStub = urlSigner.sign();
        return signedUrlStub;
    }
}

export default UrlSigningService