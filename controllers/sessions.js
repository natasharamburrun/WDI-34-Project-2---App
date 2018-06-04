const Hairdresser = require('../models/hairdresser');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {
  Hairdresser
    .findOne({email: req.body.email })
    .then( (hairdresser)=>{
      console.log(hairdresser);
      if(!hairdresser || !hairdresser.validatePassword(req.body.password)){
        return res.status(401).render('sessions/new', {message: 'Unrecognised Credentials'});
      }
      req.session.userId = hairdresser.id;

      return res.redirect('/');
    });
}

function deleteRoute(req, res){
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
