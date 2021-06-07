#!/usr/bin/env node

/**
 * Load env file
 */

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  };
  
  /**
   * Module dependencies.
   */
  
  import app from './app';
  const debug = require('debug')('004-multisnap-server:server');
  import http from 'http';
  import fs from 'fs';
  
  /**
   * Get port from environment and store in Express.
   */
  
  const port = normalizePort(process.env.NODE_ENV !== 'production' ? '3000' : '/tmp/nginx.socket'); // Ref: https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nginx
  app.set('port', port);
  
  /**
   * Create HTTP server.
   */
  
  const server = http.createServer(app);
  
  /**
   * Listen on provided port, on all network interfaces.
   */
  
  server.listen(port); // ref: https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nginx
  server.on('error', onError);
  server.on('listening', onListening);
  
  const filename = '/tmp/app-initialized';
  fs.closeSync(fs.openSync(filename, 'w'));
  
  /**
   * Normalize a port into a number, string, or false.
   */
  
  function normalizePort(val: string) {
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
  
  function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
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
    } else {
      const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }
  }
  