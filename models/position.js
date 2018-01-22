var mongoose = require('mongoose');

//Create position schema
var positionSchema = mongoose.Schema({
  device: {
    type: Number,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true,
    default: null
  }
});

var Position = module.exports = mongoose.model('positions', positionSchema);