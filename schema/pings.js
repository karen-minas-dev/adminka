const db = require(`${__dirname}/../lib/db`);

var schemaPings = new db.Schema({
  title: {
    type: String
  },
  ping_data: {
    type: String
  },
  to_nearby_only: {
    type: Boolean
  },
  channel_id: {
    type: String,
    index: true
  },
  parent_ping_id: {
    type: db.Schema.Types.ObjectId,
    ref: 'Pings',
    index: true
  },
  to_users: {
    type: Array
  },
  answered_users: {
    type: Array
  },
  listen_users: {
    type: Array,
    index: true
  },
  user: {
    type: db.Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  user_id: {
    type: String,
    index: true
  },
  create_at: {
    type: Date
  },
  sort_date: {
    type: Date
  },
  pin: {
    type: Boolean,
    default: false
  },
  bing_users_count: {
    type: Number,
    default: 0
  },
  listen_status: {
    type: Boolean,
    default: false
  },
  is_muted: {
    type: Boolean,
    default: false
  }
});

exports.Pings = db.model('Pings', schemaPings);
