const debug = require('debug')('004-multisnap-server:db');
import { config } from '../../config';
import { Pool } from 'pg';

// Set up default postgresql connection
const pool = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbDatabase,
  password: config.dbPassword,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,  //time client is allowed to remain idle before being close
  ssl: {
    rejectUnauthorized: false
  },
});

const db = {
  query: (text: string, params?: any) => pool.query(text, params)
};

export default db;
