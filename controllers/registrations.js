const hairdresser = require('../models/hairdresser');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res){
  hairdresser
    .create(req.body)
    .then((hairdresser)=>{
      console.log(hairdresser);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
