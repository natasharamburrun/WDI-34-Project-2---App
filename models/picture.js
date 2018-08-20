const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  username: { type: String, required: true},
  salon: { type: String, required: true},
  url: { type: String, required: true},
  length: String,
  sex: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  service: String,
  products: String
  // length: { type: String, enum: ['long', 'medium', 'long'] },
  // sex: { type: String, enum: ['male', 'female']},
  // service: { type: String, enum: ['haircut', 'blowdry', 'colour','perm','straighten', 'treatment', 'extensions'] }
});

module.exports = mongoose.model('Picture', pictureSchema);
