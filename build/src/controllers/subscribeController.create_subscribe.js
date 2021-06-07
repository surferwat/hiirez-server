"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_subscribe = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const SubscribeService_1 = __importDefault(require("../services/SubscribeService"));
/// create_subscribe(req, res, next)
///   Creates a new subscription plan for the member at Stripe
const create_subscribe = [
    // validate fields
    express_validator_1.check('email').exists().trim().isEmail(),
    // sanitize fields
    express_validator_2.body('email').trim().escape(),
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
                const email = req.body.email;
                await SubscribeService_1.default.createOneSubscribe(email);
                res.status(200).send();
            }
        }
        catch (e) {
            if (e) {
                return next(e);
            }
        }
    },
];
exports.create_subscribe = create_subscribe;
//# sourceMappingURL=subscribeController.create_subscribe.js.map