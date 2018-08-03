const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  markers: [{ type: Schema.Types.ObjectId, ref: 'Marker'}]
});

module.exports = mongoose.model('User',userSchema);