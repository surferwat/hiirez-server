"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require('debug')('004-multisnap-server:db');
const config_1 = require("../../config");
const pg_1 = require("pg");
// Set up default postgresql connection
const pool = new pg_1.Pool({
    user: config_1.config.dbUser,
    host: config_1.config.dbHost,
    database: config_1.config.dbDatabase,
    password: config_1.config.dbPassword,
    max: 10,
    idleTimeoutMillis: 30000,
    ssl: {
        rejectUnauthorized: false
    },
});
const db = {
    query: (text, params) => pool.query(text, params)
};
exports.default = db;
//# sourceMappingURL=index.js.map