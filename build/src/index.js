#!/usr/bin/env node
"use strict";
/**
 * Load env file
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
/**
 * Module dependencies.
 */
const app_1 = __importDefault(require("./app"));
const debug = require('debug')('fanddly-server:server');
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.NODE_ENV !== 'production' ? '3000' : '/tmp/nginx.socket'); // Ref: https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nginx
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port); // ref: https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nginx
server.on('error', onError);
server.on('listening', onListening);
const filename = '/tmp/app-initialized';
fs_1.default.closeSync(fs_1.default.openSync(filename, 'w'));
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    if (addr == null) {
        debug('Listening on, Just kidding! - server address was null');
    }
    else {
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }
}
//# sourceMappingURL=index.js.map