'use strict';
const crypto = require('crypto');

exports.hash = (password) => {
  const HASH = crypto.createHmac('sha256', 'AjkYtLo14Vcv38SkFg#lOL1Pp84Rr#aT')
                    .update(password)
                    .digest('hex');

  return HASH;
};

exports.token = (user_id) => {
  let token = user_id + '' + new Date();

  const TOKEN = crypto.createHmac('sha256', 'AjkYtLo14Vcv38SkFg#lOL1Pp84Rr#aT')
                    .update(token)
                    .digest('hex');

  return TOKEN;
};
