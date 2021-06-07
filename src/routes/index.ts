import express from 'express';
import { signedUrlRouter }  from './signed-urls'
import { subscribeRouter } from './subscribes';

// Set instance of router
const router = express.Router();

// Set route middleware
router.use('/', signedUrlRouter, subscribeRouter);

export { router };
