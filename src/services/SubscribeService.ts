const debug = require('debug')('multisnap-server:SubscribeService');
import { SubscribeModel } from '../models/subscribe';

/// SubscribeService()
///   Service for the management of the subscribe API.

const SubscribeService = class {

  // createOneSubscribe(email)
  //  Creates one subscribe object.
  //  @params     email       The email address of subscriber
  //  @returns    subscribe   The subscribe object.

  static async createOneSubscribe(email: string) {
    const subscribeModel = new SubscribeModel(email);
    const result = await subscribeModel.createOne();
    const subscribe = result.record;
    return subscribe;
  }
}

export default SubscribeService;
