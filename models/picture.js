const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  description: String,
  stylist: String,
  salon: String,
  url: String,
  length: String,
  // length: { type: String, enum: ['long', 'medium', 'long'] },
  // sex: { type: String, enum: ['male', 'female']},
  sex: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  service: String,
  products: String
  // service: { type: String, enum: ['haircut', 'blowdry', 'colour','perm','straighten', 'treatment', 'extensions'] }
});

module.exports = mongoose.model('Picture', pictureSchema);
