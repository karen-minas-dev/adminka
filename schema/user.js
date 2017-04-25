const db = require(`${__dirname}/../lib/db`);

var UserSchema = new db.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  full_name: {
    type: String
  },
  email: {
    type: String,
    email: true
  },
  gender: {
    type: String,
    enum: ['0', '1', '2']
  },
  image: {
    type: String,
    default: 'default.jpg'
  },
  is_default_profile_image: {
    type: Boolean
  },
  is_first_social_login:{
    type: Boolean,
    default: false
  },
  is_first_login:{
    type: Boolean
  },
  date_of_birth: {
    type: Date
  },
  last_login_date: {
    type: Date
  },
  last_location_update: {
    type: Date
  },
  notification_id: {
    type: String
  },
  status_user: {
    type: String,
    default: "offline"
  },
  is_social_user:{
    type: Boolean,
    default: false
  },
  social_default_image:{
    type: Boolean,
    default: true
  },
  device_id: {
    type: String
  },
  loc: {
    type: [Number],
    index: '2dsphere'
  },
  role: {
    type: String,
    default: 'User'
  },
  user_type: {
    type: String,
    enum: ['public', 'friend_only'],
    default: 'public'
  },
  block_users: {
    type: Array,
    index: true
  },
  block_users_me: {
    type: Array,
    index: true
  },
  channel_mute: {
    type: Array,
    index: true
  },
  ping_mute: {
    type: Array,
    index: true
  },
  password: {
    type: String
  },
  forgot: {
    code: {type: Number},
    date: {type: Date}
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  has_password: {
    type: Boolean,
    default: true
  },
  token: {
    type: String,
    unique: true,
    index: true
  },
  update_at: {
    type: Date
  },
  friend_add_cnt: {
    type: Number,
    default: 0
  },
  channel_add_cnt: {
    type: Number,
    default: 0
  },
  adding_channels: {
    type: Array,
    index: true
  },
  facebook_id: {type: String},
  google_id: {type: String},
  twitter_id: {type: String},
  join_channels: {
    type: Array
  },
  status: {
    type: String
  }
});

module.exports = db.model('User', UserSchema);
