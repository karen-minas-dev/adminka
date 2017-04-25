const db = require(`${__dirname}/../lib/db`);

var schemaFriend = new db.Schema({
  user_id: {
    type: db.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  friend_id: {
    type: db.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  user_state: {
    type: String,
    enum: ['friend', 'requested', 'pending', 'blocked', 'none'],
    default: 'none',
    index: true
  },
  friend_state: {
    type: String,
    enum: ['friend', 'requested', 'pending', 'blocked', 'none'],
    default: 'none',
    index: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

exports.Friend = db.model('Friend', schemaFriend);
