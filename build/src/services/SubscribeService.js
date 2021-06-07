"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require('debug')('multisnap-server:SubscribeService');
const subscribe_1 = require("../models/subscribe");
/// SubscribeService()
///   Service for the management of the subscribe API.
const SubscribeService = class {
    // createOneSubscribe(email)
    //  Creates one subscribe object.
    //  @params     email       The email address of subscriber
    //  @returns    subscribe   The subscribe object.
    static async createOneSubscribe(email) {
        const subscribeModel = new subscribe_1.SubscribeModel(email);
        const result = await subscribeModel.createOne();
        const subscribe = result.record;
        return subscribe;
    }
};
exports.default = SubscribeService;
//# sourceMappingURL=SubscribeService.js.map