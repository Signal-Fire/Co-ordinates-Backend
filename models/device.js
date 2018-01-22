var mongoose = require('mongoose');

var deviceSchema = new mongoose.Schema({
  device: {
      type: Number,
      required: true
  },
  email: {
      type: String,
      required: true
  }
});

var Device = module.exports = mongoose.model('devices', deviceSchema);
