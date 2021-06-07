"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedUrlRouter = void 0;
const express_1 = __importDefault(require("express"));
const signedUrlController_create_signed_url_1 = require("../controllers/signedUrlController.create_signed_url");
// Set instance of router
const signedUrlRouter = express_1.default.Router();
exports.signedUrlRouter = signedUrlRouter;
// SignedUrl routes
signedUrlRouter.post('/api/v0/signed-urls', signedUrlController_create_signed_url_1.create_signed_url);
//# sourceMappingURL=signed-urls.js.map