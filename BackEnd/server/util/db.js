const mysql = require('mysql2');

const setPool = mysql.createPool({
  host: process.env.MYSQL_RDS_HOST,
  user: process.env.MYSQL_RDS_USER,
  database: process.env.MYSQL_RDS_DATABASE,
  password: process.env.MYSQL_RDS_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const pool = setPool.promise();
module.exports = pool;
