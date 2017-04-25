const db = require(`${__dirname}/../lib/db`);

var schemaCannels = new db.Schema({
  name: {
    type: String
  },
  category: {
    type: db.Schema.Types.ObjectId,
    ref: 'Categories',
    index: true
  },
  intro_ping: {
    type: String
  },
  image_url: {
    type: String
  },
  allow_pings: {
    type: Boolean
  },
  allow_bings: {
    type: Boolean
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  last_ping_date: {
    type: Date
  },
  owner: {
    type: db.Schema.Types.ObjectId,
    ref: "User",
    index: true
  },
  member_count: {
    type: Number,
    default: 1
  },
  private: {
    type: Boolean,
    default: false
  },
  join_users: {
    type: Array,
    index: true
  },
  is_muted: {
    type: Boolean,
    default: false
  }
});

exports.Channel = db.model('Channel', schemaCannels);
