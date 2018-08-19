const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  description: String,
  url: String,
  length: { type: String, enum: ['long', 'medium', 'long'] },
  sex: { type: String, enum: ['male', 'female']},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  products: String,
  service: { type: String, enum: ['haircut', 'blowdry', 'colour','perm','straighten', 'treatment', 'extensions'] }
});

module.exports = mongoose.model('Picture', pictureSchema);
