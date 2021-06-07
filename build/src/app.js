"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const index_1 = __importDefault(require("./db/index"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const index_2 = require("./routes/index");
// Create Express server
const app = express_1.default();
// NOTE: if not connecting, check AWS security groups
// NOTE: update types for err and res args
index_1.default.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log("err", err);
    }
});
// server side events setup
let serverSideEventRes = {};
app.locals.serverSideEventRes = serverSideEventRes;
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
// rate limit setup
app.set('trust proxy', 1);
const limiter = express_rate_limit_1.default({
    windowMs: 60 * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMS
});
app.use(helmet_1.default());
app.use(compression_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, './client/build')));
app.use(limiter);
// Load middleware function
app.use('/', index_2.router);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // Render the error page
    res.status(err.statusCode || 500);
    res.send({ message: err.message }); // QUESTION: NOT DEFAULT;changed to statusCode from status, which is default. Is this ok?
});
exports.default = app;
//# sourceMappingURL=app.js.map