import express from 'express';
import { create_subscribe } from '../controllers/subscribeController.create_subscribe';

// Set instance of router
const subscribeRouter = express.Router();

// Subscribe routes
subscribeRouter.post('/api/v0/subscribe', create_subscribe);

// Expose routes
export { subscribeRouter };
