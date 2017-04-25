const db = require(`${__dirname}/../lib/db`);
/**
 * @schema pings report
 */
var schemaReport = new db.Schema({
  report_date: {
    type: Date,
    default: new Date()
  },
  report_ping:{
    type: Object,
    required: true
  },
  ping_sended_id:{
    type:String,
    required: true
  },
  claimant_id:{
    type:String,
    required: true
  },
  type:{
    type: String,
    enum: ['0', '1']
  }
});

exports.Report = db.model('Report', schemaReport);
