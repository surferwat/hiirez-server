import express from 'express';
import { check, validationResult } from 'express-validator';
import { body } from 'express-validator';
import UrlSigningService from '../services/UrlSigningService';

/// create_signed_url(req, res, next)
///   Signs Google Maps Static API request url

const create_signed_url = [
  // validate fields
  check('unsigned_url_stub').exists().trim(),

  // sanitize fields
  body('unsigned_url_stub').trim(), // not saving to databaes, so not escaping

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
        const unsignedUrlStub = req.body.unsigned_url_stub;

        const signedUrlStub = UrlSigningService.signUrl(unsignedUrlStub);
        res.status(200).send({signed_url_stub: signedUrlStub})
      }
    } catch (e) {
      if (e) {
        return next(e);
      }
    }
  },
];

export { create_signed_url };
