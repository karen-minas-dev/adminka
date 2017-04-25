/**
 * Connect to the database and exports
 * @module extensions/db
 * @requires module:config/index
 * @requires module:node_modules/mongoose
 * @exports {Object} Database connect
 */

const conf = require(`${__dirname}/../config`);
const db = require('mongoose');

db.connect(conf.get("db-cnn"));

module.exports = db;
