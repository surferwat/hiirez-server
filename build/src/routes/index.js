"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const signed_urls_1 = require("./signed-urls");
const subscribes_1 = require("./subscribes");
// Set instance of router
const router = express_1.default.Router();
exports.router = router;
// Set route middleware
router.use('/', signed_urls_1.signedUrlRouter, subscribes_1.subscribeRouter);
//# sourceMappingURL=index.js.map