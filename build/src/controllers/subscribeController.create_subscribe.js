// import logger from '../lib/logger/index';
// import { check, validationResult } from 'express-validator';
// import { sanitize, body } from 'express-validator';
// import SubscribeService from '../services/SubscribeService';
// import { generateError } from '../lib/generateError';
// /// create_subscribe(req, res, next)
// ///   Creates a new subscription plan for the member at Stripe
// const create_subscribe = [
//   // validate fields
//   check('email').exists().trim().isEmail(),
//   // sanitize fields
//   body('email').trim().escape(),
//   // Process request after validation and sanitization.
//   async (req, res, next) => {
//     try {
//       // Extract the validation errors from a request.
//       const errors = await validationResult(req);
//       if (!errors.isEmpty()) {
//         // There are errors. Send json with sanitized values/errors messages.
//         res.json(errors.array());
//         return;
//       }
//       else {
//         const email = req.body.email;
//         await SubscribeService.createOneSubscribe(email);
//         res.status(200).send()
//       }
//     } catch (e) {
//       if (e) {
//         logger.error(`could not create a subscribe object for ${req.body.email}: ${e.message}`, { filepath: '/src/controllers', filename: 'subscribeController.create_subscribe.ts', method: 'create_subscribe'});
//         return next(e);
//       }
//     }
//   },
// ];
// export { create_subscribe };
//# sourceMappingURL=subscribeController.create_subscribe.js.map