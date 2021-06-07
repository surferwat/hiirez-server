import express from 'express';
import { create_signed_url } from '../controllers/signedUrlController.create_signed_url';

// Set instance of router
const signedUrlRouter = express.Router();

// SignedUrl routes
signedUrlRouter.post('/api/v0/signed-urls', create_signed_url);

// Expose routes
export { signedUrlRouter };
