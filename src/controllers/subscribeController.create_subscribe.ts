import express from 'express';
import { check, validationResult } from 'express-validator';
import { sanitize, body } from 'express-validator';
import SubscribeService from '../services/SubscribeService';

/// create_subscribe(req, res, next)
///   Creates a new subscription plan for the member at Stripe

const create_subscribe = [
  // validate fields
  check('email').exists().trim().isEmail(),

  // sanitize fields
  body('email').trim().escape(),

  // Process request after validation and sanitization.
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      // Extract the validation errors from a request.
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        // There are errors. Send json with sanitized values/errors messages.
        res.json(errors.array());
        return;
      }
      else {
        const email = req.body.email;

        await SubscribeService.createOneSubscribe(email);
        res.status(200).send()
      }
    } catch (e) {
      if (e) {
        return next(e);
      }
    }
  },
];

export { create_subscribe };
