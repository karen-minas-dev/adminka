const http = require('http');

/**
 * Set error structure
 *
 * @param {Number}  num  - HTTP error code
 * @param {String}  msg  - HTTP error message
 * @param {Boolean} type - result type
 * @returns {{result: {}, status: {developer_error_msg: *, error_type: (*|number), friendly_error_msg: *, success: boolean}}}
 */
module.exports = (num, msg = http.STATUS_CODES[num], type = false) => {
  let resType = {};
  if(type) resType = [];

  return {
    "result": resType,
    "status": {
      "developer_error_msg": msg,
      "error_type": num || 404,
      "friendly_error_msg": msg,
      "success": false
    }
  };

};
