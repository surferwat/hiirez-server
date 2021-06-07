const debug = require('debug')('multisnap-server:subscribe');
import db from '../db/index';

/// SubscribeModel()
///   Database layer for the class Subscribe. Used for newsletters and updates
///   to visitors of the website.

class SubscribeModel {
  private _email: string

  constructor(newEmail: string) {
    this._email = newEmail;
  }

  async createOne() {
    const text = `INSERT INTO public.subscribe(email)
      VALUES($1) RETURNING *`;
    const values = [this._email];

    let result : any = {};
    try {
      result = await db.query(text, values);
    } catch(e) {
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

export { SubscribeModel };
