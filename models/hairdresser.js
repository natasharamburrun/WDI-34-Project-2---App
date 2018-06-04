const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hairdresserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true, required: true},
  password: { type: String, required: true }
});

hairdresserSchema.virtual('pictures', {
  ref: 'Picture',
  foreignField: 'creator',
  localField: '_id'
});

hairdresserSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

hairdresserSchema.pre('save', function(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }

  next();
});

hairdresserSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

hairdresserSchema.pre('validate', function(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('password');
  }
  next();
});

module.exports = mongoose.model('hairdresser', hairdresserSchema);
