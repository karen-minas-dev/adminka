'use strict';
/** @module config/index */


/**
 * Read configuration file and export configs
 * @function
 * @requires node_modules:nconf
 * @return {Object} nconf
 */

const nconf = require('nconf');

nconf.argv().env().file({ file: `${__dirname}/config.json` });

module.exports = nconf;
