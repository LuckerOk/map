const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./users');

const markerSchema = new Schema({
  latitude: { type: Number, require: true },
  longitude: { type: Number, require: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Marker', markerSchema);