"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_signed_url = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const UrlSigningService_1 = __importDefault(require("../services/UrlSigningService"));
/// create_signed_url(req, res, next)
///   Signs Google Maps Static API request url
const create_signed_url = [
    // validate fields
    express_validator_1.check('unsigned_url_stub').exists().trim(),
    // sanitize fields
    express_validator_2.body('unsigned_url_stub').trim(),
    // Process request after validation and sanitization.
    async (req, res, next) => {
        try {
            // Extract the validation errors from a request.
            const errors = await express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                // There are errors. Send json with sanitized values/errors messages.
                res.json(errors.array());
                return;
            }
            else {
                const unsignedUrlStub = req.body.unsigned_url_stub;
                const signedUrlStub = UrlSigningService_1.default.signUrl(unsignedUrlStub);
                res.status(200).send({ signed_url_stub: signedUrlStub });
            }
        }
        catch (e) {
            if (e) {
                return next(e);
            }
        }
    },
];
exports.create_signed_url = create_signed_url;
//# sourceMappingURL=signedUrlController.create_signed_url.js.map