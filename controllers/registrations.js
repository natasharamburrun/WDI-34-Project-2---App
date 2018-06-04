const user = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res){
  user
    .create(req.body)
    .then((user)=>{
      console.log(user);
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
