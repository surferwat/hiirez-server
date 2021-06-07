"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeModel = void 0;
const debug = require('debug')('multisnap-server:subscribe');
const index_1 = __importDefault(require("../db/index"));
/// SubscribeModel()
///   Database layer for the class Subscribe. Used for newsletters and updates
///   to visitors of the website.
class SubscribeModel {
    constructor(newEmail) {
        this._email = newEmail;
    }
    async createOne() {
        const text = `INSERT INTO public.subscribe(email)
      VALUES($1) RETURNING *`;
        const values = [this._email];
        let result = {};
        try {
            result = await index_1.default.query(text, values);
        }
        catch (e) {
            debug('could not query to database' + e.message);
            throw new Error('could not query to database ' + e.message);
        }
        const subscribe = {
            record: result.rows[0],
            count: result.rowCount
        };
        return subscribe;
    }
}
exports.SubscribeModel = SubscribeModel;
//# sourceMappingURL=subscribe.js.map