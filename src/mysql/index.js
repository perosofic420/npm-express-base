require('dotenv').config();
const mysql = require('mysql')
const util = require('util');
const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
});
const querySQL = util.promisify(connection.query).bind(connection);
module.exports = querySQL;