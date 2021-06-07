"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeRouter = void 0;
const express_1 = __importDefault(require("express"));
const subscribeController_create_subscribe_1 = require("../controllers/subscribeController.create_subscribe");
// Set instance of router
const subscribeRouter = express_1.default.Router();
exports.subscribeRouter = subscribeRouter;
// Subscribe routes
subscribeRouter.post('/api/v0/subscribe', subscribeController_create_subscribe_1.create_subscribe);
//# sourceMappingURL=subscribes.js.map