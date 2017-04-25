const db = require(`${__dirname}/../lib/db`);

var schemaCategories = new db.Schema({
  name: {
    type: String,
    require: true
  }
});

exports.Categories = db.model('Categories', schemaCategories);
