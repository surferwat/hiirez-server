import express from 'express';
declare const create_signed_url: (import("express-validator").ValidationChain | ((req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>))[];
export { create_signed_url };
