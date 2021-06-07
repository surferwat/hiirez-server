"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const GoogleMapsStaticApiUrlSigner_1 = __importDefault(require("../lib/GoogleMapsStaticApiUrlSigner"));
class UrlSigningService {
    static signUrl(unsignedUrlStub) {
        let signedUrlStub = '';
        const privateKey = config_1.config.googleMapsStaticAPIPrivateKey;
        if (privateKey == null) {
            return signedUrlStub;
            // throw error
        }
        const urlSigner = new GoogleMapsStaticApiUrlSigner_1.default(unsignedUrlStub, privateKey);
        signedUrlStub = urlSigner.sign();
        return signedUrlStub;
    }
}
exports.default = UrlSigningService;
//# sourceMappingURL=UrlSigningService.js.map