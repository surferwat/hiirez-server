import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import db from './db/index';
import rateLimit from 'express-rate-limit';
import { router as indexRouter } from './routes/index';

// Create Express server
const app = express();

// NOTE: if not connecting, check AWS security groups
// NOTE: update types for err and res args
db.query("SELECT NOW()", (err: any, res: any) => {
  if (err) {
    console.log("err", err);
  }
});

// server side events setup
let serverSideEventRes = {};
app.locals.serverSideEventRes = serverSideEventRes;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// rate limit setup
app.set('trust proxy', 1);
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 100 // limit each IP to 100 requests per windowMS
})

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/build')));
app.use(limiter);

// Load middleware function
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.statusCode || 500);
  res.send({message: err.message}); // QUESTION: NOT DEFAULT;changed to statusCode from status, which is default. Is this ok?
});

export default app;